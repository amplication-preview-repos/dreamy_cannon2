import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScriptListRelationFilter } from "../script/ScriptListRelationFilter";
import { TrendAnalysisWhereUniqueInput } from "../trendAnalysis/TrendAnalysisWhereUniqueInput";

export type ContentIdeaWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  scripts?: ScriptListRelationFilter;
  title?: StringNullableFilter;
  trendAnalysis?: TrendAnalysisWhereUniqueInput;
};
