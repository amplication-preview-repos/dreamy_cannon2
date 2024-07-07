import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ContentIdeaTitle } from "../contentIdea/ContentIdeaTitle";

export const TrendAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contentIdeas"
          reference="ContentIdea"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContentIdeaTitle} />
        </ReferenceArrayInput>
        <TextInput label="Keywords" multiline source="keywords" />
        <TextInput label="Platform" source="platform" />
      </SimpleForm>
    </Edit>
  );
};
