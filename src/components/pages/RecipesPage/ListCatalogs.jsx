import useGetCatalogs from "~/libs/apis/useGetCatalogs";
import clsxm from "~/libs/clsxm";

export default function ListCatalogs({ selectedCatalog, setSelectedCatalog }) {
    const { catalogs } = useGetCatalogs();

    return (
        <div className="sticky top-[80px] z-10">
            <div className="flex flex-col justify-center align-middle">
                <div className="w-full border-b-[1px] border-black">
                    <div className="bg-primary-200 py-2 ">
                        <ul className="left-auto m-0 flex justify-center space-x-4 p-0 font-normal">
                            <li
                                className="cursor-pointer items-center rounded-2xl bg-transparent py-4"
                                onClick={() => setSelectedCatalog(-1)}
                            >
                                <div
                                    className={clsxm(
                                        "rounded-3xl border-y-2 border-x-2 border-primary-400 py-2 px-3 text-sm",
                                        selectedCatalog === -1 && "bg-primary-500"
                                    )}
                                >
                                    <span className="text-md font-medium">All</span>
                                </div>
                            </li>

                            {catalogs.map((catalog) => (
                                <li
                                    className="cursor-pointer items-center  rounded-2xl bg-transparent py-4"
                                    onClick={() => setSelectedCatalog(catalog.name)}
                                    key={catalog.id}
                                >
                                    <div
                                        className={clsxm(
                                            "rounded-3xl border-y-2 border-x-2 border-primary-400 py-2 px-3 text-sm",
                                            catalog.name === selectedCatalog && "bg-primary-500"
                                        )}
                                    >
                                        <span className="text-md font-medium">
                                            {catalog.name.charAt(0).toUpperCase() +
                                                catalog.name.slice(1)}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
