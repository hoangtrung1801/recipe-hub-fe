import { ActionIcon, MultiSelect, Textarea } from "@mantine/core";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ingredientTransform from "~/libs/ingredientTransform";

const Instructions = ({ stepNo, onRemoveInstruction }) => {
    const { control, register, getValues } = useFormContext();
    const [ingredients, setIngredients] = useState([]);

    const onIngredientsFocus = () => {
        const ingredientsData = getValues("ingredients") || [];
        setIngredients(
            ingredientsData.map((ingredientData) => ingredientTransform.toString(ingredientData))
        );
    };
    // const { ingredients } = useContext(CreateRecipeContext);

    return (
        <div className="relative gap-6 space-y-4 rounded-lg bg-primary-300 shadow-sm">
            <div className="flex w-full items-center justify-between border-b-[3px] border-primary-200 px-6 py-4">
                <div>
                    {/* <span>{instruction.stepNo}</span> */}
                    <span className="text-xl font-semibold">{stepNo}</span>
                </div>
                <div>
                    <ActionIcon variant="transparent" onClick={() => onRemoveInstruction(stepNo)}>
                        <Trash className="text-xl text-dark-0" />
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col space-y-2 px-6 pb-6">
                <input
                    className="sr-only"
                    value={stepNo}
                    {...register(`instructions.${stepNo - 1}.stepNo`, { valueAsNumber: true })}
                />
                <div>
                    <Textarea
                        autosize
                        placeholder="Description of step"
                        minRows={2}
                        label="Description"
                        {...register(`instructions.${stepNo - 1}.description`)}
                    />
                </div>
                <div>
                    <Controller
                        control={control}
                        name={`instructions.${stepNo - 1}.ingredients`}
                        render={({ field: { value, onChange } }) => (
                            <MultiSelect
                                data={ingredients}
                                label="Ingredient in this step"
                                placeholder="Choose ingredients in this step"
                                onChange={(e) => onChange(e)}
                                value={value}
                                onFocus={onIngredientsFocus}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Instructions;
