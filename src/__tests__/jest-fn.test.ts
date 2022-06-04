describe("jest fn()", () => {
  it("call test", () => {
    /** mock関数 */
    const mockFunction = jest.fn();
    /** mockFunction関数はmockプロパティを持っている */
    expect(mockFunction).toHaveProperty("mock");
    /** mockFunctionは一度もコールされていない */
    expect(mockFunction).not.toHaveBeenCalled();
    /** ①：引数にtestを入れるとundefinedを返す */
    expect(mockFunction("test")).toBe(undefined);
    /** ①のテストの引数は"test"である */
    expect(mockFunction).toHaveBeenCalledWith("test");
    /** ①のtestで1回コールされた */
    expect(mockFunction).toHaveBeenCalled();
  });

  it("return Hoge()", () => {
    /** 戻り値がHogeのmock関数 */
    const mockFunction = jest.fn().mockImplementation(() => "Hoge");
    /** 戻り値がHogeであることの確認 */
    expect(mockFunction()).toBe("Hoge");
  });

  it("Once return Hoge()", () => {
    /** 1回のコールに対する戻り値がHogeのmock関数 */
    const mockFunction = jest.fn().mockImplementationOnce(() => "Hoge");
    /** 1回目：戻り値がHogeであることの確認 */
    expect(mockFunction()).toBe("Hoge");
    /** 2回目：戻り値がundefinedになることを確認 */
    expect(mockFunction()).toBe(undefined);
  });
});
