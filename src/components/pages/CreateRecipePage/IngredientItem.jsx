/* eslint-disable no-unused-vars */
import { Minus, Plus } from "phosphor-react";
import React from "react";

const IngredientItem = ({ name, amount, unit, addItem, removeItem }) => {
    const onClick = (e) => {
        e.preventDefault();
        addItem({
            id: Math.floor(Math.random() * 1000),
            name,
            amount,
            unit,
        });
    };

    return (
        <div
            key={name}
            className="flex items-center space-x-4 hover:cursor-pointer"
            onClick={onClick}
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-300">
                <div className="w-8">
                    <div className="relative w-full pb-[100%]">
                        <img
                            className="absolute"
                            // className="absolute inset-0 h-full w-full rounded-full bg-primary-300 object-cover"
                            src="https://images.prismic.io/stryve/524c02ef-dac8-4f80-9525-db802bd59463_mushrooms-removebg-preview.png?auto=compress,format&fm=webp&lossless=false&q=75&w=64"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-1 items-center text-lg">
                <div className="flex-1">
                    <p className="">{name}</p>
                </div>
                <div>
                    <p>{`${amount}${unit}`}</p>
                </div>
            </div>
            <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary-500 transition hover:cursor-pointer hover:bg-primary-500/30">
                <Minus size={14} onClick={removeItem} />
            </div>
        </div>
    );
};

export default IngredientItem;
