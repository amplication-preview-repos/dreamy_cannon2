import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScriptTitle } from "../script/ScriptTitle";
import { TrendAnalysisTitle } from "../trendAnalysis/TrendAnalysisTitle";

export const ContentIdeaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
