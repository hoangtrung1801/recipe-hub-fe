import { useState } from "react";
import Button from "../buttons/Button";
import Modal from "../Modal";

const ComponentsPage = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="mt-16 space-y-8">
            <h1 className="text-4xl font-bold tracking-wide">Components</h1>
            <section>
                <h3 className="text-2xl font-medium">Colors</h3>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-50 text-black">
                        50
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 text-black">
                        100
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-200 text-black">
                        200
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-300 text-black">
                        300
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-400 text-black">
                        400
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-500 text-black">
                        500
                    </div>
                    <div className="bg-primary-600 flex h-10 w-10 items-center justify-center rounded text-white">
                        600
                    </div>
                    <div className="bg-primary-700 flex h-10 w-10 items-center justify-center rounded text-white">
                        700
                    </div>
                    <div className="bg-primary-800 flex h-10 w-10 items-center justify-center rounded text-white">
                        800
                    </div>
                    <div className="bg-primary-900 flex h-10 w-10 items-center justify-center rounded text-white">
                        900
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-medium">Button</h3>
                <div className="flex flex-wrap gap-2">
                    <Button>Button</Button>
                    <Button variant="outline">Button outline</Button>
                    <Button variant="light">Button light</Button>
                    <Button variant="ghost">Button ghost</Button>
                    <Button variant="dark">Button dark</Button>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-medium">Modal</h3>
                <div className="">
                    <Button onClick={() => setOpenModal(true)}>
                        Open modal
                    </Button>
                    <Modal
                        isOpen={openModal}
                        setIsOpen={setOpenModal}
                        title={"Title modal"}
                    >
                        Body modal
                    </Modal>
                </div>
            </section>
        </div>
    );
};

export default ComponentsPage;
