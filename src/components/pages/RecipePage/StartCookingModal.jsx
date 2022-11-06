import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeft, X } from "phosphor-react";
import { Fragment, useRef } from "react";
import Slider from "react-slick/lib/slider";
import SlidersCompo from "./SlidersCompo";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

const StartCookingModal = ({ isOpen, closeModal, stepNo, setStepNo }) => {
    const ref = useRef({});

    const nextStep = () => {
        ref.current.slickNext();
        setStepNo(stepNo + 1);
    };

    const prevStep = () => {
        ref.current.slickPrev();
        setStepNo(stepNo !== 1 ? stepNo - 1 : 1);
    };

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
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-500"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-500"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
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
                                                            {stepNo}
                                                            /4
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
                                            {/* divs of Slider*/}
                                            <SlidersCompo />
                                            <SlidersCompo />
                                            <SlidersCompo />
                                            <SlidersCompo />
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

export default StartCookingModal;
