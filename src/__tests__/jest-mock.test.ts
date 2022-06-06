import axios from "axios";
import Users from "../modules/users";

jest.mock("axios");

const axiosMock = axios as jest.Mocked<typeof axios>;

it("should fetch users", async () => {
  const usersMock = [{ name: "testUser" }];

  /** モックしたaxiosのgetメソッドをコールした時の返り値を設定 */
  axiosMock.get.mockResolvedValue({ data: usersMock });
  /** axiosのgetを使用して成功した時の返り値は上記で設定したモックと同じ */
  await expect(Users.all()).resolves.toEqual(usersMock);
});
