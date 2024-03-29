const request = require("supertest");
const { authorization } = require("../../../config");
const app = require("../../../app");
const {
  succeededScenariosForGet,
} = require("../mocks/SuccessTestCasesMock");

describe("Well succeeded Router test cases for Livros, Editoras and Autores", () => {
  test.each(succeededScenariosForGet)(
    "$title",
    async ({ path }) => {
      await request(app)
        .get(path)
        .set("Accept", "application/json")
        .set("Authorization", `${authorization}`)
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200);
    },
  );
});
