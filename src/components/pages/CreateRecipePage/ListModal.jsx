/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IngredientItem from "./IngredientItem";
import RecipeIngredients from "./IngredientsPanel";

const ingredients = [
    {
        name: "Mushrooms",
        amount: 200,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Spinach",
        amount: 60,
        unit: "g",
        // detail: 'sliced'
    },
    {
        name: "Garlic cloves",
        amount: 2,
        unit: "",
        // detail: 'sliced'
    },
    {
        name: "Olive oil",
        amount: 1,
        unit: "tbsp",
        // detail: 'sliced'
    },
    {
        name: "Olive oil 2",
        amount: 1,
        unit: "tbsp",
        // detail: 'sliced'
    },
    {
        name: "Olive oil 3",
        amount: 1,
        unit: "tbsp",
        // detail: 'sliced'
    },
];

const ListModal = ({ isOpen, setIsOpen, title, children, setIngredients }) => {
    function closeModal() {
        setIsOpen(false);
    }

    const addItem = (item) => {
        setIngredients((prev) => [...prev, item]);
        console.log(item.name);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded bg-white px-6 py-3 shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-center text-xl font-bold leading-6 text-gray-900"
                                >
                                    Ingredients
                                </Dialog.Title>
                                <div className="mt-2 max-h-[300px] space-y-3 overflow-y-auto px-6">
                                    {ingredients.map((ingredient) => (
                                        <IngredientItem
                                            key={ingredient.name}
                                            addItem={addItem}
                                            {...ingredient}
                                        />
                                    ))}
                                </div>

                                <div className="mt-4 flex justify-center">
                                    {/* <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            OK
                                        </button> */}
                                    <button onClick={closeModal}>OK</button>
                                    {/* <Button
                                        variant="light"
                                        onClick={closeModal}
                                    >
                                        OK
                                    </Button> */}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ListModal;
