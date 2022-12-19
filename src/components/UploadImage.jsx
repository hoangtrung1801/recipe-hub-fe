import { FileButton, Image } from "@mantine/core";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import clsxm from "~/libs/clsxm";
import Button from "./buttons/Button";

export default function UploadImage({
    isCircle = false,
    height = 400,
    width = "400",
    attributeName,
    imageUrl,
}) {
    const { setValue } = useFormContext();
    const [image, setImage] = useState(null);

    const onSubmitFile = (file) => {
        file && setImage(file);
        // file && setValue("imageUrl", URL.createObjectURL(file));
        file && setValue(attributeName, file);
    };
    return (
        <div className="relative min-h-[400px] w-full items-center justify-center">
            <Image
                width={width}
                height={height}
                src={image ? URL.createObjectURL(image) : imageUrl || null}
                alt="Image"
                withPlaceholder
                className={clsxm(isCircle ? "overflow-hidden rounded-full" : "", "mx-auto")}
            />
            <div className="mt-2 flex justify-center">
                <FileButton onChange={onSubmitFile} className="w-full">
                    {(props) => (
                        <Button {...props} variant="dark" className="w-full">
                            Upload image
                        </Button>
                    )}
                </FileButton>
            </div>
            {/* <input
                type="file"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={onSubmitFile}
                value={file}
            /> */}
        </div>
    );
}
