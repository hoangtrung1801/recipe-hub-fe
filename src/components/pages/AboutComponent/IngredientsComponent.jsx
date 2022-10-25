const IngredientsComponent = (props) => {
    const { card } = props;
    return (
        <li className="list-none pt-7 ">
            <div>
                <div className="formIngredients grid grid-cols-[1fr_3fr_2fr] items-center ">
                    <div className="formIngredients_img h-12 w-12 rounded-full bg-primary-300 ">
                        <div className="formIngredients_imgMain mt-2  flex justify-center">
                            <img
                                className="h-[32px] w-[32px]"
                                src={card.linkImg}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="formIngredients_content ml-1 mr-2 text-left">
                        <div>
                            <span className="text-[22px] font-normal">
                                {card.text}
                            </span>
                        </div>
                    </div>
                    <div className="formIngredients_amount">
                        <span className="text-[22px] font-normal">
                            {card.amount}
                            {card.unit}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default IngredientsComponent;
