import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ContentIdeaTitle } from "../contentIdea/ContentIdeaTitle";

export const TrendAnalysisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
