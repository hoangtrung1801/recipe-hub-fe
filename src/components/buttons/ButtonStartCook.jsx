import * as React from "react";
import { Spinner } from "phosphor-react";
import clsxm from "~/libs/clsxm";

// const ButtonVariant = [
//     "primary",
//     "outline",
//     "ghost",
//     "light",
//     "dark",
// ];

// type ButtonProps = {
//     isLoading?: boolean;
//     isDarkBg?: boolean;
//     variant?: keyof typeof ButtonVariant;
// } & React.ComponentPropsWithRef<"button">;

const ButtonStartCook = React.forwardRef(
    (
        {
            children,
            className,
            disabled: buttonDisabled,
            isLoading,
            variant = "primary",
            isDarkBg = false,
            ...rest
        },
        ref
    ) => {
        const disabled = isLoading || buttonDisabled;

        return (
            <button
                //====================================================================================================================
                ref={ref}
                type="button"
                disabled={disabled}
                className={clsxm(
                    "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium",
                    "focus:outline-none focus:ring-4 focus:ring-primary-300 focus-visible:ring focus-visible:ring-primary-500",
                    "shadow-sm",
                    "transition-colors duration-75",
                    //#region  //*=========== Variants ===========
                    [
                        variant === "primary" && [
                            "bg-primary-500 text-dark-0",
                            // "border border-primary-600",
                            "hover:bg-primary-400 hover:text-dark-0",
                            "active:bg-primary-500",
                            "disabled:bg-primary-400 disabled:hover:bg-primary-400",
                        ],
                        variant === "outline" && [
                            "bg-transparent text-dark-0",
                            "border-[3px] border-primary-400",
                            "hover:bg-primary-400 active:bg-primary-100 disabled:bg-primary-100",
                            isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800",
                        ],
                        variant === "ghost" && [
                            "text-dark-0",
                            "shadow-none",
                            "hover:bg-primary-300 active:bg-primary-100 disabled:bg-primary-100",
                            isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800",
                        ],
                        variant === "light" && [
                            "rounded-md border border-transparent",
                            "bg-primary-300 text-dark-1 hover:bg-primary-400",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
                        ],
                        // variant === "lighter" && [
                        //     "text-dark bg-white ",
                        //     "border border-gray-300",
                        //     "hover:text-dark hover:bg-gray-100",
                        //     "active:bg-white/80 disabled:bg-gray-200",
                        // ],
                        variant === "dark" && [
                            "bg-gray-900 text-white",
                            "border border-gray-600",
                            "hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700",
                        ],
                    ],
                    //#endregion  //*======== Variants ===========
                    "disabled:cursor-not-allowed",
                    isLoading &&
                        "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
                    className
                )}
                {...rest}
            >
                {isLoading && (
                    <div
                        className={clsxm(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                            {
                                "text-white": ["primary", "dark"].includes(variant),
                                "text-black": ["light"].includes(variant),
                                "text-primary-500": ["outline", "ghost"].includes(variant),
                            }
                        )}
                    >
                        <Spinner className="animate-spin" />
                    </div>
                )}
                {children}
            </button>
        );
    }
);

export default ButtonStartCook;
