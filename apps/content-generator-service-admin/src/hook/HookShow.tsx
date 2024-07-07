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

import { CONTENTIDEA_TITLE_FIELD } from "../contentIdea/ContentIdeaTitle";
import { HOOK_TITLE_FIELD } from "./HookTitle";

export const HookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Script" target="hookId" label="Scripts">
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
