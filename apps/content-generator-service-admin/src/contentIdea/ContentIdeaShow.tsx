import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTENTIDEA_TITLE_FIELD } from "./ContentIdeaTitle";
import { HOOK_TITLE_FIELD } from "../hook/HookTitle";
import { TRENDANALYSIS_TITLE_FIELD } from "../trendAnalysis/TrendAnalysisTitle";

export const ContentIdeaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Script"
          target="contentIdeaId"
          label="Scripts"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <ReferenceField
              label="ContentIdea"
              source="contentidea.id"
              reference="ContentIdea"
            >
              <TextField source={CONTENTIDEA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Hook" source="hook.id" reference="Hook">
              <TextField source={HOOK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
