# @fusionworks/ra-google-maps-input

A simple map input for [react-admin](https://github.com/marmelab/react-admin) that uses [react-google-maps](https://github.com/tomchentw/react-google-maps) to set & show points on map.

# Install

Using npm: npm i @fusionworks/ra-google-maps-input

Using yarn: yarn add @fusionworks/ra-google-maps-input

# Usage

```jsx
import { Edit, SimpleForm, TextInput } from 'react-admin';
// import GMapInput component
import { GMapInput } from '@fusionworks/ra-google-maps-input';

// use GMapInput in Edit form
export const EntityEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <GMapInput
        source="coordinates"
        googleKey="<YOUR_GOOGLE_APP_KEY>"
      />
    </SimpleForm>
  </Edit>
);
```
You can also use that component to work also with multiple markers on map:

```jsx
import { Edit, SimpleForm, TextInput } from 'react-admin';
// import GMapInput component
import { GMapInput } from '@fusionworks/ra-google-maps-input';

// use GMapInput in Edit form with "multipleMarkers" prop
export const EntityEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <GMapInput
        source="coordinates"
        multipleMarkers
        googleKey="<YOUR_GOOGLE_APP_KEY>"
      />
    </SimpleForm>
  </Edit>
);
```

That component provides a prop that allows to use a search input to search for a specific location on map, and to put a marker on that location

```jsx
import { Edit, SimpleForm, TextInput } from 'react-admin';
// import GMapInput component
import { GMapInput } from '@fusionworks/ra-google-maps-input';

// use GMapInput in Edit form with "searchable" prop
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
```

Also, there exists an Field component, that can be used in Show Views

```jsx

import { Show, SimpleShowLayout, TextField } from 'ra-google-maps-input';
/// import GMapField component
import { GMapField } from 'ra-google-maps-input';

// use GMapField component in show View
export const ShowEntity = props => (
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
);
```


# Props

|Prop|Type|Description|Default|
|:---:|:---:|:---:|:---:|
|googleKey|**string**|the google aplication key for your map|
|source|**string**|source field in your resource model|
|multipleMarkers|**boolean**|source field in your resource model|**false**|
|searchable|**boolean**|adds a search input to your map|**false**|

For ```GMapField ``` ar aveilable just **source** and **googleKey** props

# Example
You can find an example of react-admin aplication that uses ```@fusionworks/ra-google-maps-input``` in ```/example``` directory of component github repository

To run this example you need to:
clone the repository, navigate in example folder, install dependencies, and run the app.

- ``` git clone git@github.com:FusionWorks/react-admin-google-maps.git && cd react-admin-google-maps```

- ``` cd example ```

- ``` npm i ``` or ``` yarn ```

- ```npm start ``` or ``` yarn start ```