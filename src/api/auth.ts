import axios from "./axios";

interface SignUpPayload {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

interface SignInPayload {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  nickname: string;
  profile: string;
  createdAt: string;
  updatedAt: string;
}

export async function signUp(payload: SignUpPayload): Promise<{ user: User }> {
  const response = await axios.post("/auth/signUp", payload);
  return { user: response.data.user };
}

export async function signIn(payload: SignInPayload): Promise<{ user: User }> {
  const response = await axios.post("/auth/signIn", payload);
  return { user: response.data.user };
}

export async function getMe(): Promise<User> {
  const response = await axios.get("/users/me");
  return response.data;
}
