import { mainServer } from "../src/infrastructure/http/server";

describe("Anime API", () => {
  test("should works", async () => {
    const data = await mainServer
      .handle(new Request("http://localhost:3000/anime/home"))
      .then((res) => res.json());
    expect(data.message).toBe("Welcome to Anime API");
  });
});
