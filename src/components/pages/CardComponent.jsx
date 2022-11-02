import UnderlineLink from "../links/UnderlineLink";
// const linkImage = "imgWrapper lg:h-[360px] md:h-[270px] h-[240px] bg-[url(https://images.prismic.io/stryve/338b523d-73cc-439a-acd0-d02eaff6ba7e_nutty-apple-date-porridge.png?auto=compress,format&fm=webp&lossless=false&q=75&w=375%20375w,%20https://images.prismic.io/stryve/338b523d-73cc-439a-acd0-d02eaff6ba7e_nutty-apple-date-porridge.png?auto=compress,format&fm=webp&lossless=false&q=75&w=450%20450w)] bg-cover bg-no-repeat bg-center";

const CardComponent = (props) => {
    const { card } = props;
    return (
        <div className="">
            <div className="article relative flex min-w-full cursor-pointer flex-col gap-3 overflow-hidden lg:mb-14">
                <div className="overflow-hidden">
                    <div
                        className={`${card.linkBg} duration-300 hover:scale-105`}
                    ></div>{" "}
                </div>{" "}
                <div className="textWrapper text-left text-xl font-medium lg:text-3xl">
                    <UnderlineLink multiline={true}>
                        {" "}
                        {card.text}{" "}
                    </UnderlineLink>{" "}
                </div>{" "}
                <div className="contentWrapper flex gap-3 text-sm">
                    <div className="flex items-center justify-center">
                        <img
                            className="mr-1 h-5 w-5"
                            src="https://img.icons8.com/windows/32/000000/clock--v1.png"
                        />
                        <span> 10 m </span>+{" "}
                    </div>{" "}
                    <div className="flex items-center justify-center">
                        <img
                            className="mr-1  h-5 w-5"
                            src="https://img.icons8.com/fluency-systems-regular/48/000000/leaf.png"
                        />
                        <span> 6 plants </span>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default CardComponent;
