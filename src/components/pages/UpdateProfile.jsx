import Button from "../buttons/Button";

const UpdateProfile = () => {
    return (
        <div className="container">
            <form>
                <div className="mt-3 flex flex-col-reverse gap-3 md:flex-row">
                    <div className="py-2 md:w-3/4 md:pr-10">
                        <h1 className="text-4xl font-bold ">Public Profile</h1>
                        <div className="w-full space-y-8">
                            <input type="hidden" name="remember" value="true" />
                            <div className="flex flex-col gap-3 -space-y-px ">
                                <div>
                                    <label>Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder="Name"
                                    />
                                    <p className="max-w-[500px] text-[#9ba6b0]">
                                        Your name may appear around GitHub where
                                        you contribute or are mentioned. You can
                                        remove it at any time.
                                    </p>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        autoComplete="email"
                                        className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder="Email"
                                    />
                                    <p className="max-w-[500px] text-[#9ba6b0]">
                                        You have set your email address to
                                        private. To toggle email privacy, go to
                                        email settings and uncheck
                                    </p>
                                </div>
                                <div>
                                    <label>Bio</label>
                                    <input
                                        name="bio"
                                        type="text"
                                        autoComplete="bio"
                                        className="relative block h-[90px] w-full appearance-none border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] p-2 py-2 md:w-1/4">
                        <div className="w-full overflow-hidden">
                            <img
                                className="mx-auto h-full w-full rounded-full"
                                src="https://avatars.githubusercontent.com/u/94124019?v=4"
                                alt="Randy Robertson"
                            />
                        </div>
                    </div>
                </div>
                <Button className="mt-5" variant="primary">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default UpdateProfile;
