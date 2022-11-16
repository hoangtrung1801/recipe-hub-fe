import { ActionIcon, MultiSelect, Textarea } from "@mantine/core";
import { Trash } from "phosphor-react";
import { Controller } from "react-hook-form";

const Instructions = ({ control, register, stepNo, onRemoveInstruction }) => {
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
                                data={["a", "b", "c"]}
                                label="Ingredient in this step"
                                placeholder="Choose ingredients in this step"
                                onChange={(e) => onChange(e)}
                                value={value}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Instructions;
