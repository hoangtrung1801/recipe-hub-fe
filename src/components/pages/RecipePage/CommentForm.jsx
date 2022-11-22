import { Image } from "@mantine/core";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Button from "~/components/buttons/Button";
import postComments from "~/libs/apis/postComments";
import useGetComments from "~/libs/apis/useGetComments";
import constants from "~/libs/constants";

const CommentForm = () => {
    const methods = useForm();
    const { register, handleSubmit, setValue } = methods;

    const { recipeId } = useParams();

    const { comments, mutate } = useGetComments(recipeId);

    const onSubmit = async (data) => {
        const { message } = data;
        try {
            const response = await postComments(recipeId, message);

            if (response.status === constants.responseStatus.SUCCESS) {
                setValue("message", "");
                alert("Comment successfull");
                mutate();
            } else {
                console.error(response?.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="z-50 mx-auto mt-20 mb-4 flex max-w-[95%] flex-col  items-center justify-center shadow-lg">
                <div className="w-full  rounded-lg bg-primary-300 px-4 pt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="-mx-3 mb-6 flex flex-wrap">
                            <div className="px-4 pt-3 pb-2 ">
                                <h2 className="text-lg font-semibold text-gray-800">Comments</h2>
                            </div>
                            <div className="mb-2 mt-2 w-full px-3 md:w-full">
                                <textarea
                                    className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 py-2 px-3 leading-normal placeholder-gray-700 focus:bg-white focus:outline-none"
                                    name="body"
                                    placeholder="Type Your Comment"
                                    required
                                    {...register("message", { required: true })}
                                ></textarea>
                            </div>
                            <div className="flex w-full items-start px-3  md:w-full">
                                <div className="mr-auto flex w-1/2 items-start px-2 text-gray-700">
                                    <p className="pt-px text-xs md:text-sm ">
                                        The comment will show up below here !
                                    </p>
                                </div>
                                <div className="-mr-1">
                                    <Button variant="dark" className="px-12" type="submit">
                                        Comment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <CommentPost comments={comments?.comments} />
                </div>
            </div>
        </div>
    );
};
const CommentPost = ({ comments }) => {
    return (
        <div>
            <div className="container my-5 mx-11 px-0">
                {/* user comment popup */}
                {/* dung map (co the co nhieu comment tu comment popup) */}
                {comments &&
                    comments.map((comment) => <CommentPopup key={comment.id} comment={comment} />)}
            </div>
        </div>
    );
};

const CommentPopup = ({ comment }) => {
    return (
        <div className="mx-auto my-3 w-full flex-col border-b-2 border-r-2 border-gray-200 bg-primary-200 py-4 sm:rounded-lg sm:px-4 sm:py-4 sm:shadow-sm md:px-4 ">
            <div className="flex flex-row">
                <div className="overflow-hidden rounded-full border-2 border-gray-300">
                    <Image
                        width={48}
                        height={48}
                        className=""
                        src={comment?.user.avatarurl || constants.avatarDefault}
                        withPlaceholder
                    />
                </div>
                <div className="mt-1 flex-col">
                    <div className="flex flex-1 items-center px-4 font-bold leading-tight">
                        {/* Vinh */}
                        {comment?.user.name}
                    </div>
                    <div className="ml-2 flex-1 px-2 text-sm font-medium leading-loose text-gray-600">
                        {comment?.message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;
