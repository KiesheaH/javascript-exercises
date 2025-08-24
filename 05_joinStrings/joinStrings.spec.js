const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Kieshea", () => {
    expect(values.firstName).toEqual("Kieshea");
  });
  test("lastName is Hepburn", () => {
    expect(values.lastName).toEqual("Hepburn");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 1987", () => {
    expect(values.birthYear).toEqual(1987);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Kieshea Hepburn and I am 38 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Kieshea Hepburn", () => {
    expect(values.fullName).toEqual("Kieshea Hepburn");
  });
  test("age is 38", () => {
    expect(values.age).toEqual(38);
  });
});
