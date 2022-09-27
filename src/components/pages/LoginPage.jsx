import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="text-center text-4xl font-bold">
                            Stryve
                        </h1>
                        <h2 className="mt-6 text-center text-xl font-semibold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        action=""
                        method="POST"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input type="hidden" name="remember" value="true" />
                        <div className="flex flex-col gap-3 -space-y-px ">
                            <div>
                                <label htmlFor="Email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                    placeholder="email"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                        validate: (value) => {
                                            return (
                                                value === "example@gmail.com"
                                            );
                                        },
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
                            {errors.email?.type === "validate" && (
                                <p className="text-xs text-red-500">
                                    Incorrect email
                                </p>
                            )}
                            <div>
                                <label htmlFor="Password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    className="relative block w-full appearance-none border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                        validate: (value) => {
                                            return value === "example";
                                        },
                                    })}
                                />
                            </div>
                            {errors.password?.type === "required" && (
                                <p className="text-xs text-red-500">
                                    Password is required
                                </p>
                            )}
                            {errors.password?.type === "validate" && (
                                <p className="text-xs text-red-500">
                                    Incorrect password
                                </p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium hover:text-dark-0"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center border border-transparent bg-primary-300 py-2 px-4 text-sm font-medium text-dark-0 hover:bg-primary-500 focus:outline-none focus:ring-2  focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginPage;
