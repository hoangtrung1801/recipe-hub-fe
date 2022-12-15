import { Modal, TextInput } from "@mantine/core";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SearchModal({ searchModal, setSearchModal }) {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSearch = (data) => {
        const { value } = data;
        navigate(`/recipes?q=${value}`);
        setSearchModal(false);
    };
    return (
        <Modal
            opened={searchModal}
            onClose={() => setSearchModal(false)}
            centered
            size={"lg"}
            withCloseButton={false}
            classNames={{
                modal: "p-0",
            }}
        >
            <div className="rounded-lg bg-primary-200 py-6 px-10">
                <form onSubmit={handleSubmit(onSearch)} className="space-y-6 text-center">
                    <div>
                        <h3 className="text-4xl font-semibold">Search</h3>
                    </div>
                    <div>
                        <TextInput rightSection={<MagnifyingGlass />} {...register("value")} />
                        <input type="submit" className="sr-only" />
                    </div>
                </form>
            </div>
        </Modal>
    );
}
