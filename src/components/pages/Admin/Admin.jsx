import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import { RecipeCreate, RecipeList } from "./RecipeComponent";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

export default function AdminPage() {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth>
            <Resource name="recipes" list={RecipeList} edit={EditGuesser} create={RecipeCreate} />
            <Resource name="users" list={ListGuesser} />
            <Resource name="catalogs" list={ListGuesser} />
        </Admin>
    );
}
