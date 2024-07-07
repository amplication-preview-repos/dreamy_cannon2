import { Script } from "../script/Script";

export type Hook = {
  createdAt: Date;
  id: string;
  scripts?: Array<Script>;
  text: string | null;
  updatedAt: Date;
};
