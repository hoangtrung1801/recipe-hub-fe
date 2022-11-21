import React, { useState } from "react";
import Button from "~/components/buttons/Button";
import EditAvaModal from "~/components/EditAvatarModal";
import Input from "~/components/Input";

const UpdateProfilePage = () => {
    const img = "/profile.jpg";

    const inputArray = [
        {
            state: name,
            setState: setName,
            placeHolder: "Your name",
            label: "Name",
        },
        {
            state: address,
            setState: setAddress,
            placeHolder: "Your Address",
            label: "Address",
        },
        {
            state: phone,
            setState: setPhone,
            placeHolder: "Your Phone Number",
            label: "Phone",
        },
    ];

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
            </form>
        </div>
    );
};

export default UpdateProfilePage;
