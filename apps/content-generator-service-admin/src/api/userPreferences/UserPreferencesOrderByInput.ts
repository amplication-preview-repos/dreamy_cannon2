import { SortOrder } from "../../util/SortOrder";

export type UserPreferencesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  preferences?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
