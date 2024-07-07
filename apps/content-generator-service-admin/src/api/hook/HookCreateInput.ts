import { ScriptCreateNestedManyWithoutHooksInput } from "./ScriptCreateNestedManyWithoutHooksInput";

export type HookCreateInput = {
  scripts?: ScriptCreateNestedManyWithoutHooksInput;
  text?: string | null;
};
