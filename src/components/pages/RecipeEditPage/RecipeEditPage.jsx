import { Select, Textarea, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "~/components/buttons/Button";
import UploadImage from "~/components/UploadImage";
import putRecipe from "~/libs/apis/putRecipe";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";

export default function RecipeEditPage() {
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const { recipe } = useGetRecipe(recipeId);
    // const { catalogs } = useGetCatalogs();

    // const dataCatalogs = useMemo(
    //     () =>
    //         catalogs.map((catalog) => ({
    //             value: catalog.id,
    //             label: _.capitalize(catalog.name),
    //         })),
    //     [catalogs]
    // );

    const [loading, setLoading] = useState(false);

    const methods = useForm({
        mode: "onBlur",
    });
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await putRecipe(recipe.id, data);

            if (response.status === constants.responseStatus.SUCCESS) {
                navigate(`/recipes/${recipe.id}`);
            } else {
                console.error(response.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (recipe) {
            setValue("name", recipe.name);
            setValue("description", recipe.description);
            setValue("mode", recipe.mode);
            // setValue(
            //     "catalogs",
            //     recipe.catalogs.map((catalog) => catalog.id)
            // );
        }
    }, [recipe]);

    useEffect(() => {
        if (!currentUser || !currentUser.recipes.some((recipe) => recipe.id === recipeId))
            navigate("..");
    }, [currentUser, recipeId]);

    return (
        <div className="container">
            <h1 className="mb-4 text-4xl font-bold">Edit recipe</h1>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <div className="py-2 md:w-3/4 md:pr-10">
                            <div className="flex flex-col space-y-4">
                                {/* <Textarea
                                            key={item.value}
                                            minRows={6}
                                            label={item.label}
                                            // defaultValue={
                                            //     currentUser !== undefined
                                            //         ? currentUser[item.value]
                                            //         : null
                                            // }
                                            placeholder="Your description"
                                            {...register(item.value)}
                                        /> */}

                                <TextInput label="Name" {...register("name")} />
                                <Textarea
                                    label="Description"
                                    minRows={6}
                                    {...register("description")}
                                />
                                <div className="flex items-center space-x-4">
                                    <Controller
                                        control={control}
                                        name="mode"
                                        render={({ field: { value, onChange } }) => (
                                            <Select
                                                label="Mode"
                                                data={constants.recipeMode}
                                                className="w-full basis-1/4"
                                                value={value}
                                                onChange={(e) => onChange(e)}
                                            />
                                        )}
                                    />

                                    {/* <Controller
                                        control={control}
                                        name="catalogs"
                                        className="flex-grow"
                                        render={({ field: { value, onChange } }) => (
                                            <MultiSelect
                                                data={dataCatalogs}
                                                label="Catalogs"
                                                placeholder="Choose ingredients in this step"
                                                onChange={(e) => onChange(e)}
                                                value={value}
                                            />
                                        )}
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="basis-[300px]">
                            <UploadImage
                                isCircle={true}
                                height={300}
                                width={300}
                                attributeName="image"
                                imageUrl={currentUser?.avatarUrl}
                            />
                        </div>
                    </div>
                    <Button variant="dark" type="submit" loading={loading}>
                        Save changes
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
}
