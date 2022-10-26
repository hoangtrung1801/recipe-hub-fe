/* eslint-disable no-console */
import React, { useEffect } from "react";

const Input = (props) => {
    const { state, setState, placeHolder, label } = props;
    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <React.Fragment>
            <label>{label}</label>
            <input
                name="text"
                type="text"
                autoComplete="email"
                className="relative block w-full   appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                placeholder={placeHolder}
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </React.Fragment>
    );
};

export default Input;
