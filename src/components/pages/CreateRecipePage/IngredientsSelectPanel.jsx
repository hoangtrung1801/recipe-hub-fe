import { ActionIcon, Select, TextInput } from "@mantine/core";
import { X } from "phosphor-react";
import { useState } from "react";
import { useEffect } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import Button from "~/components/buttons/Button";
import ingredientsData from "~/libs/ingredientsData";

// const ingredients = [
//     {
//         name: "Mushrooms",
//         amount: 200,
//         unit: "g",
//         // detail: 'sliced'
//     },
//     {
//         name: "Spinach",
//         amount: 60,
//         unit: "g",
//         // detail: 'sliced'
//     },
//     {
//         name: "Garlic cloves",
//         amount: 2,
//         unit: "",
//         // detail: 'sliced'
//     },
//     {
//         name: "Olive oil",
//         amount: 1,
//         unit: "tbsp",
//         // detail: 'sliced'
//     },
//     {
//         name: "Olive oil 2",
//         amount: 1,
//         unit: "tbsp",
//         // detail: 'sliced'
//     },
//     {
//         name: "Olive oil 3",
//         amount: 1,
//         unit: "tbsp",
//         // detail: 'sliced'
//     },
// ];

const unitOfIngredients = ["g", "kg", "ml", "l", "tbsp", "none"];

const IngredientsSelectPanel = ({ defaultIngredients = [] }) => {
    const { control, setValue, getValues } = useFormContext();

    const { fields, append, remove, replace } = useFieldArray({ control, name: "ingredients" });

    const [ingredients, setIngredients] = useState(ingredientsData);
    const [units, setUnits] = useState(unitOfIngredients);

    const onAddIngredient = () => {
        append({
            name: null,
            amount: null,
            unit: null,
        });
    };

    const onRemoveIngredient = (index) => {
        remove(index);
    };

    useEffect(() => {
        replace(defaultIngredients);
    }, []);

    return (
        <div className="flex h-96 max-h-96 w-full flex-col space-y-4">
            <div>
                <h3 className="-mb-1 text-lg font-medium">Ingredients</h3>
                <span className="text-sm italic text-gray-500">Ingredients is something</span>
            </div>
            <div className="w-full flex-1 space-y-2 overflow-y-auto">
                {fields.map((item, index) => (
                    <div className="flex space-x-2" key={item.id}>
                        <div className="basis-1/2">
                            <Controller
                                control={control}
                                name={`ingredients.${index}.name`}
                                render={({ field: { value, onChange } }) => (
                                    <Select
                                        data={ingredients}
                                        placeholder="Ingredient"
                                        onChange={(e) => onChange(e)}
                                        value={value}
                                        className="capitalize"
                                        searchable
                                        creatable
                                        getCreateLabel={(query) => `+ Create ${query}`}
                                        onCreate={(query) => {
                                            const item = { value: query, label: query };
                                            setIngredients((current) => [...current, query]);
                                            return item;
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="flex-1">
                            <TextInput
                                placeholder="Amount"
                                type={"number"}
                                {...control.register(`ingredients.${index}.amount`, {
                                    valueAsNumber: true,
                                })}
                            />
                        </div>
                        <div className="flex-1">
                            <Controller
                                control={control}
                                name={`ingredients.${index}.unit`}
                                render={({ field: { value, onChange } }) => (
                                    <Select
                                        data={units}
                                        placeholder="Unit"
                                        value={value}
                                        onChange={(e) => onChange(e)}
                                        nothingFound="Nothing found"
                                        searchable
                                        creatable
                                        getCreateLabel={(query) => `+ Create ${query}`}
                                        onCreate={(query) => {
                                            const item = { value: query, label: query };
                                            setUnits((current) => [...current, query]);
                                            return item;
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="my-auto">
                            <ActionIcon
                                variant="transparent"
                                onClick={() => onRemoveIngredient(index)}
                            >
                                <X />
                            </ActionIcon>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Button variant="dark" className="px-12" onClick={onAddIngredient}>
                    Add ingredient
                </Button>
            </div>
        </div>
    );
};

export default IngredientsSelectPanel;
