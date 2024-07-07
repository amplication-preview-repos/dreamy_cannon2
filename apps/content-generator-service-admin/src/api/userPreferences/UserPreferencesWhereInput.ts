import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserPreferencesWhereInput = {
  id?: StringFilter;
  preferences?: JsonFilter;
  userId?: StringNullableFilter;
};
