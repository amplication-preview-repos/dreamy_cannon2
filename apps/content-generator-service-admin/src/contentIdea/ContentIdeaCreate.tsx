import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScriptTitle } from "../script/ScriptTitle";
import { TrendAnalysisTitle } from "../trendAnalysis/TrendAnalysisTitle";

export const ContentIdeaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="scripts"
          reference="Script"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScriptTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
        <ReferenceInput
          source="trendAnalysis.id"
          reference="TrendAnalysis"
          label="TrendAnalysis"
        >
          <SelectInput optionText={TrendAnalysisTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
