import { ContentIdeaListRelationFilter } from "../contentIdea/ContentIdeaListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TrendAnalysisWhereInput = {
  contentIdeas?: ContentIdeaListRelationFilter;
  id?: StringFilter;
  keywords?: StringNullableFilter;
  platform?: StringNullableFilter;
};
