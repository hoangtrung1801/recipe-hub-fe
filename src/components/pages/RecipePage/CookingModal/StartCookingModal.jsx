import { Dialog, Transition } from "@headlessui/react";
import { AspectRatio } from "@mantine/core";
import { ArrowLeft, X } from "phosphor-react";
import { useEffect } from "react";
import { Fragment, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import Counter from "~/components/Counter";
import useGetCurrentInstructions from "~/libs/apis/useGetCurrentInstructions";
import useGetRecipe from "~/libs/apis/useGetRecipe";
import IngredientBlock from "./IngredientBlock";
import InstructionSlide from "./InstructionSlide";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

const StartCookingModal = ({ isOpen, closeModal, stepNo, setStepNo }) => {
    const { recipeId } = useParams();

    const ref = useRef({});

    const { recipe } = useGetRecipe(recipeId);
    const { instructions } = useGetCurrentInstructions(recipeId);

    const nextStep = () => {
        if (!instructions) return;
        if (stepNo === instructions.length + 2) return;
        ref.current.slickNext();
        setStepNo(stepNo + 1);
    };

    const prevStep = () => {
        ref.current.slickPrev();
        setStepNo(stepNo !== 1 ? stepNo - 1 : 1);
    };

    useEffect(() => {
        console.log(instructions);
    }, [instructions]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-y-full"
                            enterTo="translate-y-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
                        >
                            <Dialog.Panel className="absolute inset-0 z-[100] overflow-hidden bg-primary-200">
                                <div className="px-20">
                                    <div className="">
                                        <div className="headerIngredients relative flex max-h-20 border-b-[0.5px] border-black py-4">
                                            <div className=" headerIngredients_container grid grid-cols-[1fr,30fr,1fr]">
                                                <div
                                                    onClick={() => prevStep()}
                                                    className={`duration-700 ease-out ${
                                                        stepNo <= 1 ? "opacity-0" : "opacity-100"
                                                    }`}
                                                >
                                                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                                                        <ArrowLeft className="h-6 w-6" />
                                                    </div>
                                                </div>
                                                <div
                                                    className={`mt-2 duration-700 ease-out ${
                                                        stepNo < 1 ? "opacity-0" : "opacity-100"
                                                    }`}
                                                >
                                                    <div className="tagPageIngredients flex items-center justify-center ">
                                                        <p className="text-base">
                                                            {stepNo}/{instructions?.length + 2}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div
                                                    className="right-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30"
                                                    onClick={closeModal}
                                                >
                                                    <X className="h-6 w-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ButtonContain absolute bottom-0 left-0 z-50 flex w-1/2 items-center justify-center p-8">
                                            <button
                                                onClick={() => nextStep()}
                                                className="h-16 w-full bg-black text-center text-xl font-bold text-white hover:opacity-70"
                                            >
                                                Next Step
                                            </button>
                                        </div>
                                        <Slider ref={ref} {...settings}>
                                            <InitCookingSlide recipe={recipe} />
                                            {instructions &&
                                                instructions.map((instruction) => (
                                                    <InstructionSlide
                                                        instruction={instruction}
                                                        key={instruction.id}
                                                    />
                                                ))}
                                            <DoneCookingSlide recipe={recipe} />
                                        </Slider>
                                        <div></div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const InitCookingSlide = ({ recipe }) => {
    return (
        <div className="h-full w-full">
            <div className="flex items-center justify-center text-center ">
                <div className="slider-container justify-between text-center">
                    <div className="containerCookingItem slide  grid h-full  w-full origin-[center_center] scale-100 snap-center grid-cols-2 justify-center border-black     ">
                        <div className="containerCookingItem_left border-r-[1px] border-black ">
                            <div className="containerCookingItem_left content ml-5 flex flex-col pt-[32px] pr-[32px] pb-[110px]  text-left ">
                                <h1 className="mt-14 mb-5 text-7xl font-medium">Get Ready</h1>
                                <p className="text-xl">
                                    Before you start cooking, get everything ready – chop, drain,
                                    rinse your ingredients!
                                </p>
                                <div className="servesArea mt-7 flex flex-row  items-center ">
                                    <p className="mr-3 text-lg">Serves </p>
                                    <Counter />
                                </div>
                            </div>
                        </div>
                        <div className="containerCookingItem_right max-h-[calc(100vh-80px)] overflow-y-auto">
                            <div className="">
                                <div className="cookingIngredients ml-11 mt-16 flex flex-col font-medium">
                                    <div className="cookingIngredients_header flex flex-row">
                                        <h1 className="text-3xl">Ingredients</h1>
                                    </div>
                                    <div className="cookingIngredients_ul flex-1 py-[32px]">
                                        <ul>
                                            {recipe?.ingredients.map((ingredient) => (
                                                <div key={ingredient.id}>
                                                    <IngredientBlock ingredient={ingredient} />
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DoneCookingSlide = ({ recipe }) => {
    return (
        <div className="h-full w-full">
            <div className="flex items-center justify-center">
                <div className="grid h-full w-full grid-cols-2">
                    <div className="containerCookingItem_left w-full border-r-[1px] border-black p-8">
                        <h2 className="text-3xl font-bold">All done!</h2>
                    </div>

                    <div className="containerCookingItem_right w-full overflow-y-auto p-8">
                        <AspectRatio ratio={7 / 9}>
                            <img src={recipe.imageUrl} className="h-full w-full" />
                        </AspectRatio>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartCookingModal;
