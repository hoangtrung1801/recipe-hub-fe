import IngredientsComponent from "./AboutComponent/IngredientsComponent";
import Counter from "../Counter";
import { ArrowLeft, X } from "phosphor-react";

const ingredients = [
    {
        text: "Penne pasta",
        linkImg:
            "https://images.prismic.io/stryve/3353d388-4d05-4eb1-b2b4-d5c12918c5fd_penne-pasta-removebg-preview.png?auto=compress,format&q=65",
        amount: 400,
        unit: "g",
    },
    {
        text: "Butter beans",
        linkImg:
            "https://images.prismic.io/stryve/23793658-53e0-400d-bbb8-a88244a961ae_butter-beans-removebg-preview.png?auto=compress,format&q=65",
        amount: 250,
        unit: "g",
    },
    {
        text: "Cherry tomatoes",
        linkImg:
            "https://images.prismic.io/stryve/45b46988-4576-40b8-8cf5-798801b038c1_cherry-tomatoes-removebg-preview.png?auto=compress,format&q=65",
        amount: 200,
        unit: "g",
    },
    {
        text: "Rocket",
        linkImg:
            "https://images.prismic.io/stryve/f95fb30f-51a2-4109-ac92-13058cf49c25_rocket-removebg-preview.png?auto=compress,format&q=65",
        amount: 60,
        unit: "g",
    },
    {
        text: "Walnuts",
        linkImg:
            "https://images.prismic.io/stryve/e492ba31-7158-40d0-b28a-c83d3a8e8bb8_walnuts-removebg-preview.png?auto=compress,format&q=65",
        amount: 40,
        unit: "g",
    },
    {
        text: "Spinach",
        linkImg:
            "https://images.prismic.io/stryve/1f49ddfd-eee8-481f-aaaf-7cc8f7eccaed_spinach-removebg-preview.png?auto=compress,format&q=65",
        amount: 30,
        unit: "g",
    },
    {
        text: "Basil",
        linkImg:
            "https://images.prismic.io/stryve/bf3ed51d-8229-4ef7-ba00-18ae31100cdd_basil-removebg-preview.png?auto=compress,format&q=65",
        amount: 30,
        unit: "g",
    },
    {
        text: "Garlic cloves",
        linkImg:
            "https://images.prismic.io/stryve/4f5e5727-6087-48d7-af5c-a6c2f983b412_garlic-removebg-preview.png?auto=compress,format&q=65",
        amount: 2,
        unit: "",
    },
    {
        text: "Nutritional yeast",
        linkImg:
            "https://images.prismic.io/stryve/12b52d89-40a4-4d3a-a2db-db670098ba17_nutritional-yeast.png?auto=compress,format&q=65",
        amount: 2,
        unit: "tbsp",
    },
    {
        text: "Lemon juice",
        linkImg:
            "https://images.prismic.io/stryve/cedc7a7e-df40-4a13-bbe8-7b5d6f25975d_lemon-removebg-preview.png?auto=compress,format&q=65",
        amount: "1/2",
        unit: "",
    },
    {
        text: "Sea salt",
        linkImg:
            "https://images.prismic.io/stryve/a8e2ef2e-a333-4f4b-845a-db880a4ebf8f_sea-salt-removebg-preview.png?auto=compress,format&q=65",
        amount: 2,
        unit: "tsp",
    },
    {
        text: "Black pepper",
        linkImg:
            "https://images.prismic.io/stryve/f2f9fa65-2f06-4c57-b3ee-302e408cf1bd_black-pepper-removebg-preview.png?auto=compress,format&q=65",
        amount: 2,
        unit: "tsp",
    },
    {
        text: "Olive oil",
        linkImg:
            "https://images.prismic.io/stryve/81d8f794-ef83-42e7-a182-59f745b117d2_olive-oil.png?auto=compress,format&q=65",
        amount: 2,
        unit: "tbsp",
    },
];
const DivStart = () => {
    // {h-[740px] w-[90%]  ml-[-120px] z-[100] absolute top-0}
    return (
        <div className=" fixed left-0  top-0  z-[100]  mx-32 bg-primary-200 ">
            <div className="headerIngredients mt-4 flex border-b-[0.5px] border-black py-4">
                <div className="headerIngredients_container grid grid-cols-[1fr,30fr,1fr]">
                    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                        <ArrowLeft className="h-6 w-6" />
                    </div>
                    <div className="tagPageIngredients flex items-center justify-center">
                        <p className="text-base">1/4</p>
                    </div>
                    <div className="right-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-400 transition-colors hover:bg-primary-400/30">
                        <X className="h-6 w-6" />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-full overflow-hidden">
                <div className="slider-container justify-between text-center">
                    <div className="containerCookingItem slide  grid h-full  w-full origin-[center_center] scale-100 snap-center grid-cols-2 justify-center border-black     ">
                        <div className="containerCookingItem_left border-r-[1px] border-black ">
                            <div className="containerCookingItem_left content flex flex-col pt-[32px] pr-[32px] pb-[107px]  text-left ">
                                <h1 className="mt-14 mb-5 text-7xl font-medium">
                                    Get Ready
                                </h1>
                                <p className="text-xl">
                                    Before you start cooking, get everything
                                    ready – chop, drain, rinse your ingredients!
                                </p>
                                <div className="servesArea mt-7 flex flex-row  items-center ">
                                    <p className="mr-3 text-lg">Serves </p>
                                    <Counter />
                                </div>
                                <button className="fixed top-[650px] h-[72px] w-[640px] bg-black text-center text-xl font-bold text-white hover:opacity-70 ">
                                    Next Step
                                </button>
                            </div>
                        </div>
                        <div className="containerCookingItem_right overflow-hidden overflow-x-auto ">
                            <div className="h-[760px] overflow-y-scroll">
                                <div className="cookingIngredients ml-11 mt-16 flex flex-col font-medium">
                                    <div className="cookingIngredients_header flex flex-row">
                                        <h1 className="text-3xl">
                                            Ingredients
                                        </h1>
                                    </div>
                                    <div className="cookingIngredients_ul py-[32px]">
                                        <ul>
                                            {ingredients.map((ingredient) => (
                                                <div key={ingredient.text}>
                                                    <IngredientsComponent
                                                        card={ingredient}
                                                    />
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DivStart;
