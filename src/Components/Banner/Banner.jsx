import BannerImage from "../../assets/banner.jpg";
function Banner(){

    return(
        <div className="w-full h-[25rem] relative">
            <img 
            src={BannerImage} 
            className="w-full h-full"
            />

            <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">
                    <div className="font-semibold text-5xl text-white">
                        Crypto Tracker
                    </div>

                    <div className="font-semibold text-sm text-white text-center">
                        Get all info about cryptocurrencies
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;