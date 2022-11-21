import { Textarea } from "@mantine/core";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import UploadImage from "~/components/UploadImage";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";
import Button from "../../buttons/Button";
import EditAvaModal from "../../EditAvatarModal";
import Input from "../../Input";

const UpdateProfilePageOld = () => {
    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const methods = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const inputArray = [
        {
            label: "Name",
            placeHolder: "Your name",
            defaultValue: currentUser?.name,
            ...register("name"),
        },
        {
            label: "Description",
            placeHolder: "Your description",
            default: currentUser?.description,
            ...register("description"),
            isTextarea: true,
        },
        {
            placeHolder: "Your Address",
            label: "Address",
            defaultValue: currentUser?.address,
            ...register("address"),
        },
        {
            placeHolder: "Your Phone Number",
            defaultValue: currentUser?.phone,
            label: "Phone",
            ...register("phone"),
        },
    ];

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <h1 className="mb-4 text-4xl font-bold">Public Profile</h1>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <div className="py-2 md:w-3/4 md:pr-10">
                            <div className="flex flex-col space-y-2">
                                {inputArray.map((item, index) =>
                                    !item?.isTextarea ? (
                                        <Input {...item} key={index} />
                                    ) : (
                                        <Textarea {...item} key={index} minRows={6} />
                                    )
                                )}
                            </div>
                        </div>
                        <div className="basis-[300px]">
                            <UploadImage
                                isCircle={true}
                                height={300}
                                width={300}
                                attributeName="image"
                                imageUrl={currentUser?.avatarUrl}
                            />
                        </div>
                    </div>
                    <Button className="mt-5 px-8 py-4" variant="primary" type="submit">
                        Save changes
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

export default UpdateProfilePageOld;
