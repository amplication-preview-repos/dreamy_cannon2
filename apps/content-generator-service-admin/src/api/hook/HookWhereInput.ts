import { StringFilter } from "../../util/StringFilter";
import { ScriptListRelationFilter } from "../script/ScriptListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HookWhereInput = {
  id?: StringFilter;
  scripts?: ScriptListRelationFilter;
  text?: StringNullableFilter;
};
