import Button from "../buttons/Button";
import React, { useState } from "react";
import EditAvaModal from "../AvatarModal";
import InputComponent from "../InputComponent";

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
                        <InputComponent
                            name={name}
                            setName={setName}
                            address={address}
                            setAddress={setAddress}
                            phone={phone}
                            setPhone={setPhone}
                        />
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
