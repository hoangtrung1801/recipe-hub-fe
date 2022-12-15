import { Timeline } from "@mantine/core";
import { Check } from "phosphor-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetRecipeChangelogSpecific from "~/libs/apis/useGetRecipeChangelogSpecific";

export default function RecipeChangelogSpecificPage() {
    const { recipeId, changelogId } = useParams();

    const { changelog, isLoading: isLoadingChangelog } = useGetRecipeChangelogSpecific(
        recipeId,
        changelogId
    );

    return (
        <div className="mx-auto mt-12 max-w-2xl">
            <h1 className="mb-8">Changelog: {`"${changelog.message}"`}</h1>
            <div className="space-y-4">
                {!isLoadingChangelog &&
                    changelog.instructions.map((instruction) => (
                        <div
                            key={instruction.id}
                            className="flex space-x-6 rounded-md bg-primary-300 py-8 px-6"
                        >
                            <div className="">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500">
                                    <span className="text-xl font-medium">
                                        {instruction.stepNo}
                                    </span>
                                </div>
                            </div>
                            <div className="text-lg">
                                <p>{instruction.description}</p>
                            </div>
                        </div>
                    ))}

                {/* <Timeline bulletSize={24} lineWidth={4} active={changelog.length} color="dark">
                        {!isLoadingChangelog &&
                            changelog.map((item) => (
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
                                    <p className="text-gray-500">{} updated 1 hour ago</p>
                                </Timeline.Item>
                            ))}
                    </Timeline> */}
            </div>
        </div>
    );
}
