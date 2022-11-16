import { MultiSelect, Select, Textarea, TextInput } from "@mantine/core";
import * as _ from "lodash";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useGetCatalogs from "~/libs/apis/useGetCatalogs";
import Button from "../../buttons/Button";
import CreateInstructionsPanel from "./CreateInstructionsPanel";
import IngredientsSelectPanel from "./IngredientsSelectPanel";

const modeInput = {
    label: "Mode",
    placeholder: "Pick one",
    data: [
        { value: "PUBLIC", label: "Public" },
        { value: "PRIVATE", label: "Private" },
    ],
    field: "mode",
};

const CreateRecipePage = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const { catalogs } = useGetCatalogs();

    const [selectedCatalogs, setSelectedCatalogs] = useState([]);
    const [ingredients, setIngredients] = useState([
        {
            id: _.uniqueId(),
            value: null,
            amount: null,
            unit: null,
        },
    ]);

    const dataCatalogs = useMemo(
        () =>
            catalogs.map((catalog) => ({
                ...catalog,
                value: catalog.id,
                label: _.capitalize(catalog.name),
            })),
        [catalogs]
    );

    // image
    const [imageRecipe, setImageRecipe] = useState("/profile.jpg");

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
            field: "cookTime",
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

    const onSubmit = (data) => {
        console.log(data);
    };

    // useEffect(() => {
    //     console.log(selectedCatalogs);
    // }, [selectedCatalogs]);

    return (
        <div className="container">
            <div>
                <h1 className="mt-5 text-3xl font-bold">New recipe</h1>
                <h1 className="text-sm italic">Create your own recipe</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 gap-y-4 md:grid-cols-2">
                    <div className="mt-3 flex flex-col gap-3 ">
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

                    {/* set avatar */}
                    <div className="flex flex-col justify-between gap-3">
                        <div className="flex flex-col gap-3">
                            <div className="flex h-[220px] items-center justify-center">
                                {imageRecipe ? (
                                    <img
                                        alt="recipe-avatar"
                                        src={imageRecipe}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <h1 className="text-center font-semibold">Your image photo</h1>
                                )}
                            </div>
                            <Button variant="dark">
                                <label className="w-full hover:cursor-pointer">
                                    Upload
                                    <input type={"file"} className="hidden" />
                                </label>
                            </Button>
                        </div>
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
                                        {...register(`cookTime.${cookTime.field}`)}
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
                                        {...register(`nutrition.${nutrition.field}`)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-full bg-primary-300 p-5">
                            <IngredientsSelectPanel control={control} />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <CreateInstructionsPanel control={control} register={register} />
                    </div>
                </div>

                <Button variant="dark" className="mt-5" type="submit">
                    Create
                </Button>
            </form>
        </div>
    );
};

export default CreateRecipePage;
