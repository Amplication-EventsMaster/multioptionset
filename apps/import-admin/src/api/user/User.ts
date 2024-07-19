import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  password: string;
  roles: JsonValue;
  colors?: Array<"Red" | "Blue" | "Yellow">;
};
