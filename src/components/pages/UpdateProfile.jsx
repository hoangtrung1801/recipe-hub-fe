import Button from "../buttons/Button";
import React, { useState } from "react";
import EditAvaModal from "../AvatarModal";
import Input from "../Input";

const UpdateProfile = () => {
    const img = "/profile.jpg";

    const [isOpen, setIsOpen] = useState(false);
    const [avatar, setavatar] = useState(null);
    const [fileSize, setFileSize] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const inputArray = [
        {
            state: name,
            setState: setName,
            placeHolder: "Your name",
            label: "Name",
            isVertical: true,
        },
        {
            state: address,
            setState: setAddress,
            placeHolder: "Your Address",
            label: "Address",
            isVertical: true,
        },
        {
            state: phone,
            setState: setPhone,
            placeHolder: "Your Phone Number",
            label: "Phone",
            isVertical: true,
        },
    ];

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

    // const props = {
    //     state: name,
    //     setState: setName,
    //     placeHolder: "Your name",
    //     label: "Name",
    // };

    return (
        <div className="container">
            <form>
                <div className="mt-3 flex flex-col-reverse gap-3 md:flex-row">
                    <div className="py-2 md:w-3/4 md:pr-10">
                        <h1 className="text-4xl font-bold ">Public Profile</h1>
                        <div className="flex flex-col gap-3 -space-y-px ">
                            {inputArray.map((item, index) => (
                                <Input {...item} key={index} />
                            ))}
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
