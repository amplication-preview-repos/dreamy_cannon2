import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRENDANALYSIS_TITLE_FIELD } from "./TrendAnalysisTitle";

export const TrendAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Keywords" source="keywords" />
        <TextField label="Platform" source="platform" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ContentIdea"
          target="trendAnalysisId"
          label="ContentIdeas"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Title" source="title" />
            <ReferenceField
              label="TrendAnalysis"
              source="trendanalysis.id"
              reference="TrendAnalysis"
            >
              <TextField source={TRENDANALYSIS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
