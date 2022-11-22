import { Timeline } from "@mantine/core";
import { Check } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import useGetRecipeChangelog from "~/libs/apis/useGetRecipeChangelog";

export default function RecipeChangelogPage() {
    const { recipeId } = useParams();

    const { changelog } = useGetRecipeChangelog(recipeId);
    const { recipe } = useGetRecipe(recipeId);

    return (
        <div className="mx-auto max-w-2xl">
            <div className="mt-8 bg-primary-300 px-12 py-6 shadow-md">
                <h1 className="mb-4 text-3xl font-bold">Changelog</h1>
                <div>
                    <Timeline bulletSize={24} lineWidth={4} active={changelog.length} color="dark">
                        {changelog.map((item) => (
                            <Timeline.Item
                                key={item.id}
                                title={
                                    <Link
                                        to={`/recipes/${recipeId}/changelog/${item.id}`}
                                        className="underline-offset-2 hover:underline"
                                    >
                                        <span>{item.message}</span>
                                    </Link>
                                }
                                color="gray"
                                bullet={<Check weight="fill" size={16} />}
                            >
                                <p className="text-gray-500">
                                    <Link to={`/${recipe?.user.username}`}>
                                        <span className="font-medium">{recipe?.user.name}</span>
                                    </Link>
                                    <span> updated 1 hour ago</span>
                                </p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}
