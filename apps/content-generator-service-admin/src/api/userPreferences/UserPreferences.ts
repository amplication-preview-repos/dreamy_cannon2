import { JsonValue } from "type-fest";

export type UserPreferences = {
  createdAt: Date;
  id: string;
  preferences: JsonValue;
  updatedAt: Date;
  userId: string | null;
};
