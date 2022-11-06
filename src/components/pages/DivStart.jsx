import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeft, X } from "phosphor-react";
import { Fragment, useRef, useState } from "react";
import Slider from "react-slick";
import SlidersCompo from "./RecipePage/SlidersCompo";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};
const DivStart = () => {
    const ref = useRef({});
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>

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
                                <Dialog.Panel className="absolute inset-0 z-[100]   overflow-hidden bg-primary-200">
                                    <div>
                                        <div className="mx-20 mt-2">
                                            <div className="headerIngredients relative  flex border-b-[0.5px] border-black py-4 ">
                                                <div className=" headerIngredients_container grid grid-cols-[1fr,30fr,1fr]">
                                                    <div
                                                        className={`${
                                                            count < 1 ? "opacity-0" : "opacity-100"
                                                        }`}
                                                    >
                                                        <div
                                                            onClick={(ev) => {
                                                                previous(ev),
                                                                    count >= 1
                                                                        ? setCount(count - 1)
                                                                        : null;
                                                            }}
                                                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30"
                                                        >
                                                            <ArrowLeft className="h-6 w-6" />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`mt-2 ${
                                                            count < 1 ? "opacity-0" : "opacity-100"
                                                        }`}
                                                    >
                                                        <div className="tagPageIngredients flex items-center justify-center ">
                                                            <p className="text-base">{count}/4</p>
                                                        </div>
                                                    </div>

                                                    <div className="right-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                                                        <X
                                                            onClick={closeModal}
                                                            className="h-6 w-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ButtonContain absolute z-50">
                                                <button
                                                    onClick={(ev) => {
                                                        next(ev), setCount(count + 1);
                                                    }}
                                                    className="fixed top-[700px] h-[72px] w-[670px] bg-black text-center text-xl font-bold text-white hover:opacity-70 "
                                                >
                                                    Next Step
                                                </button>
                                            </div>
                                            <Slider ref={ref} {...settings}>
                                                {/* divs of Slider*/}
                                                <SlidersCompo />
                                                <SlidersCompo />
                                                <SlidersCompo />
                                            </Slider>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default DivStart;
