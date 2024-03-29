import { Image } from "@mantine/core";

export default function HomeBanner() {
    return (
        <div>
            <div className="home-page__banner relative">
                <div className="max-h-[calc(100vh-80px)]">
                    <Image
                        src="https://images.prismic.io/stryve/d697919f-3a89-46a5-a743-82350add036e_masthead.png?auto=compress,format&w=1280"
                        withPlaceholder
                    />
                </div>
                <div className="home-page__banner-text  absolute inset-0 mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center space-y-4 overflow-hidden text-center">
                    <h1 className="text-center">Tasty plant - based recipes & more</h1>
                    <h3 className="hidden font-light md:block">
                        Discover some tasty plant - based recipes🥙 explore topics around physical🚵‍♂️
                        & mental health🧠 all whilst trying to look after our planet🌍
                    </h3>
                </div>
            </div>
        </div>
    );
}
