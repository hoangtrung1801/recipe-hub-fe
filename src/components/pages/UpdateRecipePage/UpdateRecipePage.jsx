import { useState } from "react";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import postChangelogs from "~/libs/apis/postChangelogs";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import compareInstructions from "~/libs/compareInstructions";
import constants from "~/libs/constants";
import Button from "../../buttons/Button";
import Input from "../../Input";
import CreateInstructionsPanel from "../CreateRecipePage/CreateInstructionsPanel";

export default function UpdateRecipePage() {
    const methods = useForm();
    const { handleSubmit, register, setValue } = methods;

    const { recipeId } = useParams();
    const navigate = useNavigate();

    const { recipe, isLoading } = useGetRecipe(recipeId);
    const { instructions, isLoading: isLoadingInstructions } = useGetCurrentInstructions(recipeId);

    const [submitLoading, setSubmitLoading] = useState(false);

    if (isLoading || isLoadingInstructions) {
        return <div></div>;
    }

    const onSubmit = async (data) => {
        setSubmitLoading(true);

        console.log(data);
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
        } finally {
            setSubmitLoading(false);
        }
    };

    useEffect(() => {
        if (recipe) {
            setValue("ingredients", recipe.ingredients);
        }
    }, []);

    return (
        <div className="mt-12">
            <h1 className="mb-8">Update recipe {`"${recipe.name}"`}</h1>
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
                        <Button type="submit" loading={submitLoading}>
                            Save changes
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
