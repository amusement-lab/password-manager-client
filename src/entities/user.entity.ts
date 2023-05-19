export interface LoginRequest {
  username: string;
  key: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterRequest {
  username: string;
  key: string;
  name: string;
}
