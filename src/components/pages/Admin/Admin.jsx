import { Admin, ListGuesser, Resource } from "react-admin";
import { RecipeEdit, RecipeList } from "./RecipeComponent";
import dataProvider from "./dataProvider";

export default function AdminPage() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="recipes" list={RecipeList} edit={RecipeEdit} />
            <Resource name="users" list={ListGuesser} />
        </Admin>
    );
}
