import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import dataProvider from "@/Data/dataProvider";
import ExercicePostCreate from "@/components/Shared/Exercice/exercicePostCreate";


const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="exercice"   create={ExercicePostCreate}/>

</Admin>
);

export default AdminApp