import { mainServer } from "../src/infrastructure/http/server.ts";

describe("Anime API", () => {
  test("should works", async () => {
    const data = await mainServer
      .handle(new Request("http://localhost:3000/anime/home"))
      .then((res) => res.json());
    expect(data).toBeArray();
    expect(data).toHaveLength(20);
    expect(data[0]).toHaveProperty("name");
  });
});
 