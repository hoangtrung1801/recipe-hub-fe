import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import postChangelogs from "~/libs/apis/postChangelogs";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import compareInstructions from "~/libs/compareInstructions";
import constants from "~/libs/constants";
import Button from "../buttons/Button";
import Input from "../Input";
import CreateInstructionsPanel from "./CreateRecipePage/CreateInstructionsPanel";
import IngredientsSelectPanel from "./CreateRecipePage/IngredientsSelectPanel";

export default function UpdateRecipePage() {
    const methods = useForm();
    const { handleSubmit, register } = methods;

    const { recipeId } = useParams();
    const navigate = useNavigate();

    const { recipe, isLoading } = useGetRecipe(recipeId);
    const { instructions, isLoading: isLoadingInstructions } = useGetCurrentInstructions(recipeId);

    if (isLoading || isLoadingInstructions) {
        return <div></div>;
    }

    const onSubmit = async (data) => {
        const { instructions: newInstructions } = data;
        const diffInstructions = compareInstructions(instructions, newInstructions);
        if (diffInstructions.length === 0) {
            console.error("Do not have change in this log");
            return;
        }

        data.instructions = diffInstructions;
        try {
            const response = await postChangelogs(recipeId, data);
            if (response.status === constants.responseStatus.SUCCESS) {
                navigate("..");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Update recipe</h1>
            <FormProvider {...methods}>
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                    {/* <div>
                        <IngredientsSelectPanel
                            defaultIngredients={}
                        />
                    </div> */}
                    <div>
                        <Input
                            label="Message"
                            placeholder="Your message in this log"
                            required
                            {...register("message", { required: true })}
                        />
                    </div>
                    <div>
                        <CreateInstructionsPanel defaultInstructions={instructions} />
                    </div>
                    <div>
                        <Button type="submit">Save changes</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
