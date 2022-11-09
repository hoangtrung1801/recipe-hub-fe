import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import signUp from "~/libs/apis/signUp";
import constants from "~/libs/constants";
import Button from "../buttons/Button";
import Input from "../Input";

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm();

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const response = await signUp(data);
        if (response.status === constants.responseStatus.SUCCESS) {
            navigate("/");
        } else {
            console.log(formErrors);
            setErrors((errors) => [response.message, ...errors]);
            console.error(response);
        }
    };

    useEffect(() => {
        console.log(formErrors);
    }, [formErrors]);

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h1 className="text-center text-4xl font-bold">RecipeHub</h1>
                    <h2 className="mt-6 text-center text-xl font-semibold tracking-tight text-gray-900">
                        Register
                    </h2>
                    <p className="mt-3 text-center text-dark-1">
                        Enter your information to register
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="flex flex-col gap-3 -space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Username
                            </label>
                            <Input
                                name="username"
                                id="username"
                                placeholder={"Username"}
                                {...register("username")}
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
                                {...register("password")}
                            />
                        </div>

                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Your name
                            </label>
                            <Input name="name" placeholder={"Your name"} {...register("name")} />
                        </div>

                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Your phone
                            </label>
                            <Input
                                name="phone"
                                placeholder={"Your phone"}
                                type="phone"
                                {...register("phone")}
                            />
                        </div>

                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Your address
                            </label>
                            <Input
                                name="address"
                                placeholder={"Your address"}
                                {...register("address")}
                            />
                        </div>
                    </div>
                    <div>
                        {errors.length > 0 && (
                            // <p className="text-xs text-red-500">Username is required</p>
                            <p className="text-xs text-red-500">{errors[0]}</p>
                        )}
                    </div>
                    <div>
                        <Button variant="primary" type="submit" className="w-full">
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
