import { Printer } from "phosphor-react";
import { useCallback, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import RecipeComponentToPrint from "./RecipeComponentToPrint";

export default function PrintRecipe() {
    const componentRef = useRef(null);

    const printContent = useCallback(() => {
        return componentRef.current;
    }, [componentRef.current]);

    const handlePrint = useReactToPrint({
        content: printContent,
        documentTitle: "Print Recipe",
    });

    return (
        <>
            <div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30"
                onClick={handlePrint}
            >
                <Printer className="text-xl" />
            </div>
            <div className="hidden">
                <RecipeComponentToPrint ref={componentRef} />
            </div>
        </>
    );
}
