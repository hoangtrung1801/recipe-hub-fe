/* eslint-disable no-console */
import { MultiSelect, Select, Textarea, TextInput } from "@mantine/core";
import * as _ from "lodash";
import { useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UploadImage from "~/components/UploadImage";
import postRecipe from "~/libs/apis/postRecipes";
import useGetCatalogs from "~/libs/apis/useGetCatalogs";
import constants from "~/libs/constants";
import Button from "../../buttons/Button";
import CreateInstructionsPanel from "./CreateInstructionsPanel";
import IngredientsSelectPanel from "./IngredientsSelectPanel";

const modeInput = {
    label: "Mode",
    placeholder: "Pick one",
    data: [
        { value: "PUBLIC", label: "PUBLIC" },
        { value: "PRIVATE", label: "PRIVATE" },
    ],
    field: "mode",
};

const CreateRecipePage = () => {
    const navigate = useNavigate();

    const methods = useForm();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    const { catalogs } = useGetCatalogs();

    const dataCatalogs = useMemo(
        () =>
            catalogs.map((catalog) => ({
                value: catalog.id,
                label: _.capitalize(catalog.name),
            })),
        [catalogs]
    );

    const cookTimeInputs = [
        {
            placeHolder: "Prep time",
            label: "Prep",
            field: "prep",
        },
        {
            placeHolder: "Chill time",
            label: "Chill",
            field: "chill",
        },
        {
            placeHolder: "Cook time",
            label: "Cook time",
            field: "cook",
        },
    ];

    const nutritionInputs = [
        {
            placeHolder: "Calories",
            label: "Calories",
            field: "calories",
        },
        {
            placeHolder: "Fiber",
            label: "Fiber",
            field: "fiber",
        },
        {
            placeHolder: "Protein",
            label: "Protein",
            field: "protein",
        },
        {
            placeHolder: "Carbs",
            label: "Carbs",
            field: "carbs",
        },
        {
            placeHolder: "Fats",
            label: "Fats",
            field: "fats",
        },
        {
            placeHolder: "Sugar",
            label: "Sugar",
            field: "sugar",
        },
    ];

    const onSubmit = async (data) => {
        if (errors.length > 0) {
            console.error(errors);
        }

        try {
            const response = await postRecipe(data);

            if (response.status === constants.responseStatus.SUCCESS) {
                // return redirect("/");
                return navigate("/");
            } else {
                console.error(response.message);
            }
            // console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container">
            <div>
                <h1 className="mt-5 text-3xl font-bold">New recipe</h1>
                <h1 className="text-sm italic">Create your own recipe</h1>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-3 grid grid-cols-1 gap-6 gap-y-4 md:grid-cols-2">
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-3 space-y-px">
                                    <div>
                                        <TextInput
                                            key={"name"}
                                            label="Name"
                                            placeholder={"Your name"}
                                            {...register("name")}
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            key={"description"}
                                            label={"Description"}
                                            placeholder={"Description of this recipe"}
                                            {...register("description")}
                                        />
                                    </div>

                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <Select
                                                label={modeInput.label}
                                                placeholder={modeInput.placeholder}
                                                data={modeInput.data}
                                                defaultValue={"PUBLIC"}
                                                {...register(modeInput.field)}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <Controller
                                                control={control}
                                                name="catalogs"
                                                render={({ field: { value, onChange } }) => (
                                                    <MultiSelect
                                                        data={dataCatalogs}
                                                        label="Catalogs"
                                                        placeholder="Choose ingredients in this step"
                                                        onChange={(e) => onChange(e)}
                                                        value={value}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AVATAR */}
                        <div className="flex">
                            <UploadImage attributeName={"image"} />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div>
                                    <h3 className="-mb-1 text-lg font-medium">Cook time</h3>
                                    <span className="text-sm italic text-gray-500">
                                        cook time is something
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                                    {cookTimeInputs.map((cookTime) => (
                                        <TextInput
                                            type="number"
                                            key={cookTime.label}
                                            label={cookTime.label}
                                            placeholder={cookTime.placeHolder}
                                            rightSection={
                                                <span className="text-sm text-slate-500">m</span>
                                            }
                                            {...register(`cookTime.${cookTime.field}`, {
                                                valueAsNumber: true,
                                            })}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3 className="-mb-1 text-lg font-medium">Nutrition</h3>
                                    <span className="text-sm italic text-gray-500">
                                        Nutrition is something
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                                    {nutritionInputs.map((nutrition) => (
                                        <TextInput
                                            type="number"
                                            key={nutrition.label}
                                            label={nutrition.label}
                                            placeholder={nutrition.placeHolder}
                                            rightSection={
                                                <span className="text-sm text-slate-500">g</span>
                                            }
                                            {...register(`nutrition.${nutrition.field}`, {
                                                valueAsNumber: true,
                                            })}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="h-full bg-primary-300 p-5">
                                <IngredientsSelectPanel />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <CreateInstructionsPanel />
                        </div>
                    </div>

                    <div className="mt-6 flex">
                        <Button variant="dark" className="ml-auto px-8 py-3" type="submit">
                            Create
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default CreateRecipePage;
