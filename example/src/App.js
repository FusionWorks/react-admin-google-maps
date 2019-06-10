import React from 'react';
import { Admin, Resource } from 'react-admin';
import { EntityCreate, EntityEdit, EntityList, EntityShow } from './entities/WithSingleMarker';
import { CreateEntity, EditEntity, ListEntity, ShowEntity } from './entities/WithMultipleMarkers';
import jsonRestProvider from 'ra-data-fakerest';
import data from './mocks/data';


const dataProvider = jsonRestProvider(data, true);
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="singleMarker" list={EntityList} create={EntityCreate} edit={EntityEdit}  show={EntityShow}/>
    <Resource name="multipleMarkers" list={ListEntity} create={CreateEntity} edit={EditEntity} show={ShowEntity}/>
  </Admin>
);

export default App;