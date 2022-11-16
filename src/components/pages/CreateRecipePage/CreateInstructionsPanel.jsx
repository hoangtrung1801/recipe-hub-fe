import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import Button from "~/components/buttons/Button";
import InstructionBlock from "./InstructionBlock";

export default function CreateInstructionsPanel({ control, register }) {
    const { append, fields, remove } = useFieldArray({ control, name: "instructions" });

    const onAddInstruction = () => {
        append({
            description: "",
            ingredients: [],
        });
    };

    const onRemoveInstruction = (stepNo) => {
        // console.log(stepNo);
        remove(stepNo - 1);
    };

    return (
        <div className="space-y-4">
            <div>
                <h3 className="-mb-1 text-lg font-medium">Instructions</h3>
                <span className="text-sm italic text-gray-500">Step-by-step</span>
            </div>
            <div>
                {fields.map((item, index) => (
                    <InstructionBlock
                        key={item.id}
                        register={register}
                        stepNo={index + 1}
                        onRemoveInstruction={onRemoveInstruction}
                        control={control}
                    />
                ))}
            </div>
            <div
                className="flex w-full cursor-pointer items-center justify-center bg-primary-300 py-6 hover:bg-primary-400"
                onClick={onAddInstruction}
            >
                <span className="text-lg font-medium underline decoration-2 underline-offset-4">
                    Add instruction
                </span>
            </div>
        </div>
    );
}
