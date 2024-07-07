import { ContentIdeaCreateNestedManyWithoutTrendAnalysesInput } from "./ContentIdeaCreateNestedManyWithoutTrendAnalysesInput";

export type TrendAnalysisCreateInput = {
  contentIdeas?: ContentIdeaCreateNestedManyWithoutTrendAnalysesInput;
  keywords?: string | null;
  platform?: string | null;
};
