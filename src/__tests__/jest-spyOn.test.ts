import * as calc from "../modules/calc";

describe("jest.spuOn()", () => {
  it("Math random() return 1", () => {
    /** Math.random()をコールした時の戻り値は1に固定
     * Math,randomは0から1未満の数値を返すので、本来1はありえない
     */
    const spy = jest.spyOn(Math, "random").mockReturnValue(1);
    /** Math.random()が1であることを確認 */
    expect(Math.random()).toBe(1);
    /** jest.spyOn によって作成されたモックをオリジナルのものへ戻す。
     * これがないと他の箇所でMath.randomをコールするとエラーになる
     */
    spy.mockRestore();
  });

  it("appropriate Math random() return", () => {
    /** 戻り値が1以外になったことを確認 */
    expect(Math.random()).not.toBe(1);
    /** Math.random()が1未満であることを確認 */
    expect(Math.random()).toBeLessThan(1);
    /** Math.random()が0以上であることを確認 */
    expect(Math.random()).toBeGreaterThanOrEqual(0);
  });

  it("Date", () => {
    const mockDate = new Date("2022-01-01");
    /** 2022-01-01のDateモックを作成 */
    const spy = jest
      .spyOn(global, "Date")
      .mockImplementation(() => mockDate as unknown as string);
    /**今日のDateを取得しようとしても,mockDateが返される  */
    expect(new Date()).toEqual(mockDate);
    spy.mockRestore();
  });

  /** 引数の値を2倍にして返す関数のテスト */
  it("double", () => {
    /** doubleメソッドの返り値を4に設定 */
    const spy = jest.spyOn(calc, "double").mockImplementation(() => 4);
    /** 本来1を引数に取ると2が返ってくるが、上記でモックした4が返ってくる  */
    expect(calc.double(1)).toEqual(4);
    spy.mockRestore();
  });
});
