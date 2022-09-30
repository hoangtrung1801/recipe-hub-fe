import { Minus, Plus } from "phosphor-react";

const Counter = () => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                <Minus />
            </div>
            <div>
                <span className="text-xl">0</span>
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                <Plus />
            </div>
        </div>
    );
};

export default Counter;
