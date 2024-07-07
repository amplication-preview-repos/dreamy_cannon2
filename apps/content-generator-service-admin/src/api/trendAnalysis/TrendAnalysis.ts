import { ContentIdea } from "../contentIdea/ContentIdea";

export type TrendAnalysis = {
  contentIdeas?: Array<ContentIdea>;
  createdAt: Date;
  id: string;
  keywords: string | null;
  platform: string | null;
  updatedAt: Date;
};
