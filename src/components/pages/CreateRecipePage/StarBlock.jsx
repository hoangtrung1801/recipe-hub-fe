import { Badge } from "@mantine/core";
import { Star } from "phosphor-react";
import { useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Button from "~/components/buttons/Button";
import postStar from "~/libs/apis/postStar";
import postUnstar from "~/libs/apis/postUnstar";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import useGetStars from "~/libs/apis/useGetStar";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";

export default function StarBlock() {
    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const { recipeId } = useParams();

    const { recipe } = useGetRecipe(recipeId);
    const { stars, mutate: starMutate } = useGetStars(recipeId);

    const [loading, setLoading] = useState(false);

    const isStarred = useMemo(() => {
        if (!stars || !currentUser) return false;
        return stars.some((userStarred) => userStarred.id === currentUser?.id);
    }, [stars]);

    const onClickStar = async () => {
        try {
            setLoading(true);
            if (isStarred) {
                // unstar
                const response = await postUnstar(recipe.id);
            } else {
                // star
                const response = await postStar(recipe.id);
            }
            await starMutate();
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Button variant="light" className="space-x-2" onClick={onClickStar} loading={loading}>
            <Star className="text-lg" weight={isStarred ? "fill" : "regular"} />
            <span>Star</span>
            <Badge className="text-dark -mb-[2px] border-0 bg-primary-200 px-2 text-dark-0">
                {stars?.length}
            </Badge>
        </Button>
    );
}
