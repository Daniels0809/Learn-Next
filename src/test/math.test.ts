import { sum, isEven, IVA } from "../helpers/utils";

describe("utils/math", () => {
  test("sum adds numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("IVA", () => {
    expect(IVA(100000)).toBe(119000);
    expect(IVA(10000)).toBe(11900);
  });

  test("isEven returns true for even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });
});
