import { ScriptUpdateManyWithoutContentIdeasInput } from "./ScriptUpdateManyWithoutContentIdeasInput";
import { TrendAnalysisWhereUniqueInput } from "../trendAnalysis/TrendAnalysisWhereUniqueInput";

export type ContentIdeaUpdateInput = {
  description?: string | null;
  scripts?: ScriptUpdateManyWithoutContentIdeasInput;
  title?: string | null;
  trendAnalysis?: TrendAnalysisWhereUniqueInput | null;
};
