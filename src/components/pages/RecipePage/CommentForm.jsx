const CommentForm = ({ comments }) => {
    console.log(comments);
    return (
        <div>
            <div className="z-50 mx-auto mt-20 mb-4 flex max-w-[95%] flex-col  items-center justify-center shadow-lg">
                <form className="w-full  rounded-lg bg-primary-300 px-4 pt-2">
                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <h2 className="px-4 pt-3 pb-2 text-lg text-gray-800">Add your comment</h2>
                        <div className="mb-2 mt-2 w-full px-3 md:w-full">
                            <textarea
                                className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 py-2 px-3 font-medium leading-normal placeholder-gray-700 focus:bg-white focus:outline-none"
                                name="body"
                                placeholder="Type Your Comment"
                                required
                            ></textarea>
                        </div>
                        <div className="flex w-full items-start px-3  md:w-full">
                            <div className="mr-auto flex w-1/2 items-start px-2 text-gray-700">
                                <p className="pt-px text-xs md:text-sm ">
                                    The comment will show up below here !
                                </p>
                            </div>
                            <div className="-mr-1">
                                <input
                                    type="submit"
                                    className="mr-1 cursor-pointer rounded-lg border border-gray-400 bg-primary-200 py-1 px-4 font-medium tracking-wide text-gray-700 hover:bg-gray-100"
                                    value="Post Comment"
                                />
                            </div>
                        </div>
                    </div>

                    <CommentPost comments={comments.comments} />
                </form>
            </div>
        </div>
    );
};
const CommentPost = ({ comments }) => {
    return (
        <div>
            <section className="min-w-screen  flex w-auto  items-start justify-center bg-primary-300 antialiased">
                <div className="container my-5 mx-11 px-0">
                    {/* user comment popup */}
                    {/* dung map (co the co nhieu comment tu comment popup) */}
                    {comments.map((comment, key) => (
                        <CommentPopup key={comment.id} comment={comment} />
                    ))}
                </div>
            </section>
        </div>
    );
};

const CommentPopup = ({ comment }) => {
    return (
        <div className="mx-auto my-3 w-full flex-col border-b-2 border-r-2 border-gray-200 bg-primary-200 py-4 sm:rounded-lg sm:px-4 sm:py-4 sm:shadow-sm md:px-4 ">
            <div className="flex flex-row">
                <img
                    className="h-12 w-12 rounded-full border-2 border-gray-300 object-cover"
                    alt="Noob master's avatar"
                    src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                />
                <div className="mt-1 flex-col">
                    <div className="flex flex-1 items-center px-4 font-bold leading-tight">
                        Vinh
                        {/* {comment?.user.name} */}
                    </div>
                    <div className="ml-2 flex-1 px-2 text-sm font-medium leading-loose text-gray-600">
                        {comment.message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;
