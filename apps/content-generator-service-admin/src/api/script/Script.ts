import { ContentIdea } from "../contentIdea/ContentIdea";
import { Hook } from "../hook/Hook";

export type Script = {
  content: string | null;
  contentIdea?: ContentIdea | null;
  createdAt: Date;
  hook?: Hook | null;
  id: string;
  updatedAt: Date;
};
