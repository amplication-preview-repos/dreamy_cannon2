import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContentIdeaWhereUniqueInput } from "../contentIdea/ContentIdeaWhereUniqueInput";
import { HookWhereUniqueInput } from "../hook/HookWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ScriptWhereInput = {
  content?: StringNullableFilter;
  contentIdea?: ContentIdeaWhereUniqueInput;
  hook?: HookWhereUniqueInput;
  id?: StringFilter;
};
