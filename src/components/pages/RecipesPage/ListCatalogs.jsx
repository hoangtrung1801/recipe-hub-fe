import useGetCatalogs from "~/libs/apis/useGetCatalogs";
import clsxm from "~/libs/clsxm";

export default function ListCatalogs({ selectedCatalogId, setSelectedCatalogId }) {
    const { catalogs } = useGetCatalogs();

    return (
        <div className="sticky top-[80px] z-50">
            <div className="flex flex-col justify-center align-middle">
                <div className="w-full border-b-[1px] border-black">
                    <div className="bg-primary-200 py-2 ">
                        <ul className="left-auto m-0 flex justify-center space-x-4 p-0 font-normal">
                            <li
                                className="cursor-pointer items-center rounded-2xl bg-transparent py-4"
                                onClick={() => setSelectedCatalogId(-1)}
                            >
                                <div
                                    className={clsxm(
                                        "rounded-3xl border-y-2 border-x-2 border-primary-400 py-2 px-3 text-sm",
                                        selectedCatalogId === -1 && "bg-primary-500"
                                    )}
                                >
                                    <span className="text-md font-medium">All</span>
                                </div>
                            </li>

                            {catalogs.map((catalog) => (
                                <li
                                    className="cursor-pointer items-center  rounded-2xl bg-transparent py-4"
                                    onClick={() => setSelectedCatalogId(catalog.id)}
                                    key={catalog.id}
                                >
                                    <div
                                        className={clsxm(
                                            "rounded-3xl border-y-2 border-x-2 border-primary-400 py-2 px-3 text-sm",
                                            catalog.id === selectedCatalogId && "bg-primary-500"
                                        )}
                                    >
                                        <span className="text-md font-medium">{catalog.name}</span>
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
