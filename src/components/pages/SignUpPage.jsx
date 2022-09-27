import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h1 className="text-center text-4xl font-bold">Stryve</h1>
                    <h2 className="mt-6 text-center text-xl font-semibold tracking-tight text-gray-900">
                        Register
                    </h2>
                    <p className="mt-3 text-center text-dark-1">
                        Enter your information to register
                    </p>
                </div>
                <form
                    className="mt-8 space-y-6"
                    action="#"
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="hidden" name="remember" value="true" />
                    <div className="flex flex-col gap-3 -space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                First Name
                            </label>
                            <input
                                name="firstname"
                                type="text"
                                autoComplete="email"
                                className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                placeholder="First name"
                                {...register("firstname", { required: true })}
                            />
                        </div>
                        {errors.firstname?.type === "required" && (
                            <p className="text-xs text-red-500">
                                First name is required
                            </p>
                        )}
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Last Name
                            </label>
                            <input
                                name="lastname"
                                type="text"
                                autoComplete="email"
                                className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                placeholder="Last name"
                                {...register("lastname", { required: true })}
                            />
                        </div>
                        {errors.lastname?.type === "required" && (
                            <p className="text-xs text-red-500">
                                Last name is required
                            </p>
                        )}
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="text"
                                autoComplete="email"
                                className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                placeholder="Email address"
                                {...register("email", {
                                    required: true,
                                    pattern: /^\S+@\S+$/i,
                                })}
                            />
                        </div>
                        {errors.email?.type === "required" && (
                            <p className="text-xs text-red-500">
                                Email is required
                            </p>
                        )}
                        {errors.email?.type === "pattern" && (
                            <p className="text-xs text-red-500">
                                Invalid email syntax
                            </p>
                        )}
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="relative block w-full appearance-none rounded-none border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        {errors.password?.type === "required" && (
                            <p className="text-xs text-red-500">
                                Password is required
                            </p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center  border border-transparent bg-primary-300 py-2 px-4 text-sm font-medium text-dark-0 hover:bg-primary-500 focus:outline-none focus:ring-2  focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
