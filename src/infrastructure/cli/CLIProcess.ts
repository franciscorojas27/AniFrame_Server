// infrastructure/cli/CLIProcess.ts
import path from "path";

export class CLIProcess {
  private static instance: CLIProcess;
  private readonly pluginPath: string;

  private constructor() {
    this.pluginPath = path.join(process.cwd(), "plugins", "animeav1.exe");
  }

  public static getInstance(): CLIProcess {
    if (!CLIProcess.instance) CLIProcess.instance = new CLIProcess();
    return CLIProcess.instance;
  }

  public async run(
    method: string,
    args: (string | number)[] = []
  ): Promise<string> {
    const fullArgs = [this.pluginPath, method, ...args.map(String)];
    const start =
      process.env.NODE_ENV === "development" ? performance.now() : 0;

    const proc = Bun.spawn(fullArgs);

    const result = await new Response(proc.stdout).text();

    await proc.exited;
    if (process.env.NODE_ENV === "development") {
      const end = performance.now();
      console.log(`[CLIProcess] ${method} (${(end - start).toFixed(2)} ms)`);
    }

    return result.trim();
  }

  public runSync(method: string, args: (string | number)[] = []): string {
    const fullArgs = [this.pluginPath, method, ...args.map(String)];
    const proc = Bun.spawnSync(fullArgs);
    return new TextDecoder().decode(proc.stdout).trim();
  }
}
