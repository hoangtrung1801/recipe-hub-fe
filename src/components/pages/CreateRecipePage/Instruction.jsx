import { PenNibStraight, X } from "phosphor-react";
import { useState } from "react";
import Modal from "../../Modal";
import RecipePanel from "./RecipePanel";

const Instructions = ({ instruction, setInstruction, removeInstruction }) => {
    // const [instruction, setInstruction] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative grid grid-cols-1 gap-6 bg-primary-300 p-10 md:grid-cols-2">
            <div className="absolute right-5 top-5 flex flex-row gap-3">
                <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30">
                    <PenNibStraight size={32} weight="light" className="hover:cursor-pointer" />
                </span>
                <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 transition hover:bg-primary-500/30">
                    <X
                        size={32}
                        weight="light"
                        className="hover:cursor-pointer"
                        onClick={removeInstruction}
                    />
                </span>
            </div>
            <div>
                <label className="text-xl font-bold">Instruction</label>
                <textarea
                    className="h-[290px] w-full p-3 focus:outline-none"
                    value={instruction}
                    onChange={(e) => setInstruction(e.target.value)}
                ></textarea>
            </div>
            <RecipePanel isInstruction={true} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Instructions;
