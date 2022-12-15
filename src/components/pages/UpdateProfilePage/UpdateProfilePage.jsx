import { Textarea, TextInput } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "~/components/buttons/Button";
import UploadImage from "~/components/UploadImage";
import putUser from "~/libs/apis/putUser";
import constants from "~/libs/constants";
import useCurrentUserStore from "~/libs/stores/useCurrentUserStore";

const UpdateProfilePage = () => {
    const navigate = useNavigate();

    const currentUser = useCurrentUserStore((state) => state.currentUser);
    const fetchUser = useCurrentUserStore((state) => state.fetchUser);

    const [loading, setLoading] = useState(false);

    const methods = useForm({
        mode: "onBlur",
    });
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = methods;

    const inputArray = useMemo(
        () => [
            {
                label: "Name",
                value: "name",
            },
            {
                label: "Description",
                value: "description",
            },
            {
                label: "Address",
                value: "address",
            },
            {
                label: "Phone",
                value: "phone",
            },
        ],
        [currentUser, register]
    );

    const onSubmit = async (data) => {
        setLoading(true);
        const compareUserData = (userData, oldUserData) => {
            let diffData = {};
            Object.keys(userData).forEach((key) => {
                if (userData[key] !== oldUserData[key]) diffData[key] = userData[key];
            });
            return diffData;
        };

        try {
            const diffUserData = compareUserData(data, currentUser);
            const response = await putUser(currentUser.id, diffUserData);

            if (response.status === constants.responseStatus.SUCCESS) {
                await fetchUser();
                navigate(`/${currentUser.username}`);
            } else {
                console.error(response.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (currentUser) {
            setValue("name", currentUser?.name);
            setValue("description", currentUser?.description);
            setValue("address", currentUser?.address);
            setValue("phone", currentUser?.phone);
        }
    }, [currentUser]);

    return (
        <div className="container mt-12">
            <h1 className="mb-4 text-4xl font-bold">Public Profile</h1>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <div className="py-2 md:w-3/4 md:pr-10">
                            <div className="flex flex-col space-y-2">
                                {inputArray.map((item, index) =>
                                    item.label === "Description" ? (
                                        <Textarea
                                            key={item.value}
                                            minRows={6}
                                            label={item.label}
                                            // defaultValue={
                                            //     currentUser !== undefined
                                            //         ? currentUser[item.value]
                                            //         : null
                                            // }
                                            placeholder="Your description"
                                            {...register(item.value)}
                                        />
                                    ) : (
                                        <TextInput
                                            key={index}
                                            label={item.label}
                                            // defaultValue={
                                            //     currentUser !== undefined
                                            //         ? currentUser[item.value]
                                            //         : null
                                            // }
                                            {...register(item.value)}
                                        />
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
                    <Button variant="dark" type="submit" loading={loading}>
                        Save changes
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

export default UpdateProfilePage;
