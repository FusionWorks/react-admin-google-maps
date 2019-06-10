import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
  Show,
  SimpleShowLayout,
  EditButton,
} from 'react-admin';
import { GMapInput, GMapField } from '@fusionworks/ra-google-maps-input';

export const EntityList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EntityEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <GMapInput
        source="coordinates"
        searchable
        googleKey="<YOUR_GOOGLE_APP_KEY>"
      />
    </SimpleForm>
  </Edit>
);

export const EntityShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <GMapField
          source="coordinates"
          googleKey="<YOUR_GOOGLE_APP_KEY>"
        />
    </SimpleShowLayout>
  </Show>
)

export const EntityCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <GMapInput
        source="coordinates"
        searchable
        googleKey="<YOUR_GOOGLE_APP_KEY>"
      />
    </SimpleForm>
  </Create>
);