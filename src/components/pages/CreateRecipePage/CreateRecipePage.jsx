import { useState } from "react";
import Button from "../../buttons/Button";
import Input from "../../Input";
import { RecipleCategory } from "../ProfilePage/ProfilePage";
import Instructions from "./Instruction";
import RecipePanel from "./RecipePanel";

const CreateRecipePage = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState([]);
    const [instruction, setInstruction] = useState("");
    // cook time
    const [prep, setPrep] = useState(0);
    const [chill, setChill] = useState(0);
    const [cookT, setCookT] = useState(0);
    const totalTime = prep + chill + cookT; //
    // nutrition
    const [calories, setCalories] = useState(0);
    const [fiber, setFiber] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [sugar, setSugar] = useState(0);

    // image
    const [imageRecipe, setImageRecipe] = useState("/profile.jpg");

    const inputArray = [
        {
            state: name,
            setState: setName,
            placeHolder: "Your name",
            label: "Name",
            isVertical: true,
        },
        {
            state: description,
            setState: setDescription,
            placeHolder: "Discription",
            label: "Discription",
            isVertical: true,
        },
    ];

    const numberInput = [
        {
            state: prep,
            setState: setPrep,
            placeHolder: "Prep time",
            label: "Prep",
            isVertical: true,
        },
        {
            state: chill,
            setState: setChill,
            placeHolder: "Chill time",
            label: "Chill",
            isVertical: true,
        },
        {
            state: cookT,
            setState: setCookT,
            placeHolder: "Cook time",
            label: "Cook time",
            isVertical: true,
        },
        {
            state: calories,
            setState: setCalories,
            placeHolder: "Calories",
            label: "Calo",
            isVertical: true,
        },
        {
            state: fiber,
            setState: setFiber,
            placeHolder: "Fiber",
            label: "Fiber",
            isVertical: true,
        },
        {
            state: protein,
            setState: setProtein,
            placeHolder: "Protein",
            label: "Protein",
            isVertical: true,
        },
        {
            state: carbs,
            setState: setCarbs,
            placeHolder: "Carbs",
            label: "Carbs",
            isVertical: true,
        },
        {
            state: fats,
            setState: setFats,
            placeHolder: "Fats",
            label: "Fats",
            isVertical: true,
        },
        {
            state: sugar,
            setState: setSugar,
            placeHolder: "Sugar",
            label: "Sugar",
            isVertical: true,
        },
    ];

    const addInstructions = () => {
        const newItem = {
            value: instruction,
            setInstruction: setInstruction,
            id: Math.floor(Math.random() * 1000),
            removeInstruction: removeInstruction,
        };

        setInstructions((prev) => [...prev, newItem]);
    };

    const removeInstruction = (id) => {
        const removed = instructions.filter((x) => x.id !== id);
        setInstructions(removed);
        console.log(removed);
        // console.log('remove id:', );
    };

    const onSubmit = () => {
        console.log({
            name,
            description,
            instructions,
            cookTime: {
                prep,
                chill,
                cookT,
                totalTime,
            },
            nutrition: {
                calories,
                fiber,
                protein,
                carbs,
                fats,
                sugar,
            },
        });
    };

    return (
        <div className="container">
            <h1 className="mt-5 text-4xl font-extrabold">Create your own recipe</h1>
            <form onSubmit={onSubmit}>
                {/* Input name, description */}
                {/* */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
                    <div className="mt-3 flex flex-col gap-3 ">
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-3 space-y-px">
                                {inputArray.map((item, index) => (
                                    <Input {...item} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col">
                                <RecipleCategory />
                            </div>
                        </div>
                        <div className="bg-primary-300 p-5 pb-7">
                            <RecipePanel isInstruction={false} />
                        </div>
                    </div>
                    {/* set avatar */}
                    <div className="flex flex-col justify-between gap-3">
                        <div className="flex flex-col gap-3">
                            <div className="flex h-[220px] items-center justify-center">
                                {imageRecipe ? (
                                    <img
                                        alt="recipe-avatar"
                                        src={imageRecipe}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <h1 className="text-center font-semibold">Your image photo</h1>
                                )}
                            </div>
                            <Button variant="dark">
                                <label className="w-full hover:cursor-pointer">
                                    Upload
                                    <input type={"file"} className="hidden" />
                                </label>
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                            {numberInput.map((item, index) => (
                                <Input key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* instruction step */}
                <div className="">
                    {instructions.map((item, index) => (
                        <div key={index} className="relative mt-5">
                            <Instructions key={index} {...item} />
                        </div>
                    ))}
                </div>
                <div className="mt-5 flex flex-col items-center justify-center gap-6 bg-primary-300 p-10">
                    <h1 className="text-xl font-semibold">Add your Instructions</h1>
                    <Button onClick={() => addInstructions()} variant="dark">
                        Add
                    </Button>
                </div>
                <Button variant="dark" className="mt-5" type="button" onClick={() => onSubmit()}>
                    Create
                </Button>
            </form>
        </div>
    );
};

export default CreateRecipePage;
