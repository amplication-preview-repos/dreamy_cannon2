import { InputJsonValue } from "../../types";

export type UserPreferencesUpdateInput = {
  preferences?: InputJsonValue;
  userId?: string | null;
};
