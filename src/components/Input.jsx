import React from "react";

const Input = React.forwardRef(({ label, ...props }, ref) => {
    return (
        <React.Fragment>
            <div className="flex flex-col">
                <label>{label}</label>
                <input
                    ref={ref && ref}
                    className="relative  block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                    {...props}
                />
            </div>
        </React.Fragment>
    );
});

export default Input;
