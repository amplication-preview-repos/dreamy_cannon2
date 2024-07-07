import { Script } from "../script/Script";
import { TrendAnalysis } from "../trendAnalysis/TrendAnalysis";

export type ContentIdea = {
  createdAt: Date;
  description: string | null;
  id: string;
  scripts?: Array<Script>;
  title: string | null;
  trendAnalysis?: TrendAnalysis | null;
  updatedAt: Date;
};
