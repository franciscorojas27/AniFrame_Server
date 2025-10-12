import { spawn } from "child_process";
import readline from "node:readline";
import path from "path";
export class ExeManager {
  child;
  pending: any[];
  constructor() {
    const execPath = path.join(process.cwd(), "plugins", "animeav1.exe");
    this.child = spawn(execPath, {
      stdio: ["pipe", "pipe", "pipe"],
    });

    // Cola para asociar promesas con respuestas
    this.pending = [];
  
    // Leer stdout línea por línea
    const rl = readline.createInterface({ input: this.child.stdout });
    rl.on("line", (line) => {
      try {
        const msg = JSON.parse(line);
        const resolver = this.pending.shift();
        if (resolver) resolver(msg);
      } catch {
        const resolver = this.pending.shift();
        if (resolver) resolver({ ok: false, error: "Invalid JSON from exe" });
      }
    });

    // Manejar errores del exe
    this.child.stderr.on("data", (data) => {
      console.error("EXE ERROR:", data.toString());
    });

    // Opcional: detectar si el exe muere
    this.child.on("exit", (code, signal) => {
      console.error(`EXE exited with code ${code} signal ${signal}`);
    });
  }

  // Función para enviar un comando JSON y esperar respuesta
  sendCommand(cmd: object) {
    return new Promise((resolve) => {
      this.pending.push(resolve);
      this.child.stdin.write(JSON.stringify(cmd) + "\n");
    });
  }

  // Opcional: cerrar el exe si ya no se necesita
  close() {
    this.child.stdin.end();
  }
}
