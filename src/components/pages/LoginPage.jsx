import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";
import Button from "../buttons/Button";
import Input from "../Input";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { constant } from "lodash";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors: formErrors },
    } = useForm();

    const navigate = useNavigate();
    const login = useCurrentUserStore((state) => state.login);
    const loginWithGoogle = useCurrentUserStore((state) => state.loginWithGoogle);
    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (currentUser) navigate("/");
    }, []);

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: constants.GOOGLE_CLIENT_ID,
                scope: "",
            });
        };
        gapi.load("client:auth2", initClient);
    });

    const onSubmit = async (data) => {
        const response = await login(data.username, data.password);
        if (response.status === constants.responseStatus.SUCCESS) {
            navigate("..");
        } else {
            setErrors((errors) => [response.message, ...errors]);
        }
    };

    const onLoginGoogleSuccess = async (resGoogle) => {
        console.log(resGoogle);
        const response = await loginWithGoogle(resGoogle);
        if (response.status === constants.responseStatus.SUCCESS) {
            navigate("..");
        } else {
            setErrors((errors) => [response.message, ...errors]);
        }
    };

    const onLoginGoogleFailure = (err) => {
        console.log("on login google failure", err);
    };

    return (
        <React.Fragment>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h1 className="text-center text-4xl font-bold">RecipeHub</h1>
                        <h2 className="mt-6 text-center text-xl font-semibold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="flex flex-col gap-3 -space-y-px ">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Username
                                </label>
                                <Input
                                    name="username"
                                    id="username"
                                    placeholder={"Username"}
                                    {...register("username", { required: true })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Password
                                </label>
                                <Input
                                    name="password"
                                    placeholder={"Password"}
                                    type="password"
                                    {...register("password", { required: true })}
                                />
                            </div>

                            {/* <div>
                                <label htmlFor="Email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    autoComplete="email"
                                    className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                        validate: (value) => {
                                            return value === "example@gmail.com";
                                        },
                                    })}
                                />
                            </div>
                            {errors.email?.type === "required" && (
                                <p className="text-xs text-red-500">Email is required</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="text-xs text-red-500">Invalid email syntax</p>
                            )}
                            {errors.email?.type === "validate" && (
                                <p className="text-xs text-red-500">Incorrect email</p>
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
                                    placeholder="Password"
                                    {...register("password", {
                                        required: true,
                                        validate: (value) => {
                                            return value === "example";
                                        },
                                    })}
                                />
                            </div>
                            {errors.password?.type === "required" && (
                                <p className="text-xs text-red-500">Password is required</p>
                            )}
                            {errors.password?.type === "validate" && (
                                <p className="text-xs text-red-500">Incorrect password</p>
                            )} */}
                        </div>

                        <div>
                            {errors.length > 0 && (
                                // <p className="text-xs text-red-500">Username is required</p>
                                <p className="text-xs text-red-500">{errors[0]}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input name="remember-me" type="checkbox" className="h-4 w-4" />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium hover:text-dark-0">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button variant="primary" type="submit" className="w-full">
                                Login
                            </Button>
                        </div>

                        <div className="flex items-center justify-center">
                            <span className="text-sm text-gray-500">or</span>
                        </div>
                        <div>
                            <GoogleLogin
                                clientId={constants.GOOGLE_CLIENT_ID}
                                buttonText="Login with Google"
                                onSuccess={onLoginGoogleSuccess}
                                onFailure={onLoginGoogleFailure}
                                cookiePolicy={"single_host_origin"}
                                className="flex w-full items-center justify-center"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginPage;
