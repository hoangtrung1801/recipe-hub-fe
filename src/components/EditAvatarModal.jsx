import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Avatar from "react-avatar-edit";
import Button from "./buttons/Button";

const EditAvaModal = ({
    isOpen,
    setIsOpen,
    onClose,
    onCrop,
    onBeforeFileLoad,
    saveImg,
    fileSize,
}) => {
    return (
        <React.Fragment>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Edit your profile picture
                                    </Dialog.Title>

                                    <div className="mt-5 flex justify-center">
                                        <Avatar
                                            width={300}
                                            height={300}
                                            onClose={onClose}
                                            onCrop={onCrop}
                                            onBeforeFileLoad={onBeforeFileLoad}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        {fileSize.length > 0 ? (
                                            <Button variant="primary" onClick={saveImg}>
                                                Save
                                            </Button>
                                        ) : (
                                            <Button variant="primary" disabled>
                                                Save
                                            </Button>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </React.Fragment>
    );
};
export default EditAvaModal;
