export type LoginPayload = {
  email: string;
  password: string;
  remember?: boolean;
};

export type RegisterPayload = LoginPayload & {
  password_confirmation: string;
  phone: string;
  first_name: string;
  last_name: string;
};

export type Tokens = {
  apiToken: string;
  tokenType: string | "Bearer";
  expiresIn: number;
  userId: number;
};
