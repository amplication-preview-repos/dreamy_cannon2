import { ScriptCreateNestedManyWithoutContentIdeasInput } from "./ScriptCreateNestedManyWithoutContentIdeasInput";
import { TrendAnalysisWhereUniqueInput } from "../trendAnalysis/TrendAnalysisWhereUniqueInput";

export type ContentIdeaCreateInput = {
  description?: string | null;
  scripts?: ScriptCreateNestedManyWithoutContentIdeasInput;
  title?: string | null;
  trendAnalysis?: TrendAnalysisWhereUniqueInput | null;
};
