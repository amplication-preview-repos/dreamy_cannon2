import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ScriptTitle } from "../script/ScriptTitle";

export const HookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="scripts"
          reference="Script"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScriptTitle} />
        </ReferenceArrayInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
