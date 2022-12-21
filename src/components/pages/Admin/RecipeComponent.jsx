import {
    ArrayInput,
    ChipField,
    Datagrid,
    DateInput,
    Edit,
    ImageField,
    ImageInput,
    List,
    NumberField,
    NumberInput,
    SimpleForm,
    SimpleFormIterator,
    TextField,
    TextInput,
} from "react-admin";

export const RecipeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            {/* <DateField source="createdAt" />
            <DateField source="updatedAt" /> */}
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="numberOfFork" />
            <ChipField source="mode" />
            <ImageField source="imageUrl" />
            <TextField source="cookTime.id" />
        </Datagrid>
    </List>
);

export const RecipeEdit = (props) => {
    console.log(props);
    return (
        <Edit>
            <SimpleForm>
                {/* <TextInput source="id" /> */}
                {/* <DateInput source="createdAt" />
            <DateInput source="updatedAt" /> */}
                <TextInput source="name" />
                {/* <TextInput source="description" /> */}
                {/* <NumberInput source="numberOfFork" />
            <TextInput source="mode" />
            <ImageInput source="imageUrl" /> */}
                {/* <ArrayInput source="ingredients">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <TextInput source="name" />
                    <NumberInput source="amount" />
                    <TextInput source="unit" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="cookTime.id" />
            <TextInput source="nutrition.id" />
            <ArrayInput source="comments">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <DateInput source="createdAt" />
                    <DateInput source="updatedAt" />
                    <TextInput source="message" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="catalogs">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <DateInput source="createdAt" />
                    <DateInput source="updatedAt" />
                    <TextInput source="name" />
                    <TextInput source="description" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="user.id" />
            <ArrayInput source="stars">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <DateInput source="createdAt" />
                    <DateInput source="updatedAt" />
                    <TextInput source="username" />
                    <TextInput source="name" />
                    <TextInput source="phone" />
                    <TextInput source="address" />
                    <TextInput source="role" />
                    <TextInput source="description" />
                    <TextInput source="avatarUrl" />
                </SimpleFormIterator>
            </ArrayInput> */}
            </SimpleForm>
        </Edit>
    );
};
