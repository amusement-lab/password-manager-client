import api from "~~/config/api";
import { LoginRequest, LoginResponse } from "~~/entities/user.entity";

export default class AuthRepository {
  static async login(
    loginData: LoginRequest
  ): Promise<LoginResponse | undefined> {
    return await api("/login", {
      method: "POST",
      body: loginData,
    });
  }
}
