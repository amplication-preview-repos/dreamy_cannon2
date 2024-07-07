import { InputJsonValue } from "../../types";

export type UserPreferencesCreateInput = {
  preferences?: InputJsonValue;
  userId?: string | null;
};
