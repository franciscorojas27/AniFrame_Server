import { CLIProcess } from "./CLIProcess";

export class ManifestClient {
  private static instance: ManifestClient;
  private cli = CLIProcess.getInstance();

  private constructor() {}
  public static getInstance(): ManifestClient {
    if (!ManifestClient.instance)
      ManifestClient.instance = new ManifestClient();
    return ManifestClient.instance;
  }
  async getManifest() {
    return this.cli.runSync("getManifest");
  }
}
