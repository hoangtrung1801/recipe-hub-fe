import Button from "../buttons/Button";
import Avatar from "react-avatar-edit";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const UpdateProfile = () => {
    const img =
        "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/291608761_1438709426556013_2250799276497985239_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3Cb_2LLgrZoAX_6kL--&tn=3-czYbbayq7b9asX&_nc_ht=scontent.fdad4-1.fna&oh=00_AT8PFHbQPovoWXxSr7vmSNu8mAbnsVQ51GOfzalL5_R37g&oe=63500304";

    const [isOpen, setIsOpen] = useState(false);
    const [avatar, setavatar] = useState(null);
    const [fileSize, setFileSize] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const onCrop = (view) => {
        setavatar(view);
        setFileSize([view]);
    };

    const onClose = () => {
        setavatar(null);
        setFileSize([]);
    };

    const saveImg = () => {
        // eslint-disable-next-line no-console
        setFileSize([]);
        setIsOpen(false);
    };

    // check size
    const onBeforeFileLoad = (file) => {
        if (file.target.files[0].size > 71680) {
            alert("Exceed size");
            file.target.value = "";
        }
        if (file.target.files[0].size > 0) {
            // arr.push(file)
        }
    };

    return (
        <div className="container">
            <form>
                <div className="mt-3 flex flex-col-reverse gap-3 md:flex-row">
                    <div className="py-2 md:w-3/4 md:pr-10">
                        <h1 className="text-4xl font-bold ">Public Profile</h1>
                        <div className="w-full space-y-8">
                            <input type="hidden" name="remember" value="true" />
                            <div className="flex flex-col gap-3 -space-y-px ">
                                <div>
                                    <label>Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <p className="max-w-[500px] text-[#9ba6b0]">
                                        Your name may appear around GitHub where
                                        you contribute or are mentioned. You can
                                        remove it at any time.
                                    </p>
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input
                                        name="text"
                                        type="text"
                                        autoComplete="email"
                                        className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder="Phone number"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label>Address</label>
                                    <input
                                        name="text"
                                        type="text"
                                        autoComplete="email"
                                        className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder="Your address"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label>Bio</label>
                                    <textarea
                                        className="relative block h-[90px] w-full appearance-none border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                                        placeholder="Your Bio . . ."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] p-2 py-2">
                        <div className="relative w-full overflow-hidden">
                            <img
                                className="mx-auto h-full w-full rounded-full border-2"
                                // set image
                                src={avatar ? avatar : img}
                                alt="Avatar"
                            />
                            <Button
                                onClick={() => setIsOpen(true)}
                                className="absolute left-3 bottom-5 bg-primary-500"
                                variant="primary"
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
                <Button
                    className="mt-5"
                    variant="primary"
                    onClick={() =>
                        // eslint-disable-next-line no-console
                        console.log({
                            name,
                            phone,
                            address,
                            avatar,
                        })
                    }
                >
                    Save
                </Button>
            </form>
            <EditAvaModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClose={onClose}
                onCrop={onCrop}
                onBeforeFileLoad={onBeforeFileLoad}
                saveImg={saveImg}
                fileSize={fileSize}
            />
        </div>
    );
};

export default UpdateProfile;

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
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => setIsOpen(false)}
                >
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
                                            <Button
                                                variant="primary"
                                                onClick={saveImg}
                                            >
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
