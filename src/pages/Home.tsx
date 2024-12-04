import HoverVideoPlayer from "react-hover-video-player";
import Contact from "../assets/icons/contact.svg";
import Menu from "../assets/icons/menu.svg";
import { CUSTOM_HEADLIGHTS_THUMBNAIL_URL, CUSTOM_HEADLIGHTS_URL, MAIN_VIDEO_URL } from "../utils/media";

function Home() {
    return (
        <main className="flex flex-col relative w-full min-h-screen">
            {/* nav */}
            <nav className="flex items-center justify-between p-6 nav-bg w-full absolute z-50">
                <button className="w-6 h-6 child:fill-white"><Menu /></button>
                <span className="font-sunkids text-white text-2xl cursor-pointer">NewStyle</span>
                <button className="w-6 h-6 child:fill-white"><Contact /></button>
            </nav>
            {/* bg video */}
            <section className="h-screen relative">
                <video className="main-video" muted loop autoPlay>
                    <source src={MAIN_VIDEO_URL} type="video/mp4" />
                </video>
                {/* video content */}
                <div className="absolute bottom-[6rem] px-10 z-50 md:px-20 flex flex-col items-start gap-6">
                    <h1 className="font-lemonmilk-regular text-5xl sm:text-7xl text-white md:max-w-[75%]">
                        Upgrade Your Ride with <span className="text-brand-main underline">the Best </span> Window Tinting in FLORIDA!
                    </h1>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-brand-main text-white">Learn More</button>
                        <button className="px-6 py-3 border border-white text-white">Contact Us</button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full video-bg h-1/2" />
            </section>

            {/* about */}
            <section className="px-10 relative bg-black">
                <div className="flex flex-col p-10 gap-2 text-center">
                    <h3 className="font-lemonmilk-regular text-brand-main text-xs">DISCOVER</h3>
                    <h2 className="font-lemonmilk-regular text-white text-2xl">OUR SERVICES</h2>
                </div>
                <div className="flex flex-col align-middle items-center gap-6 py-10 w-full">
                    <div className="flex flex-col gap-2">
                        <div className="max-w-[350px] max-h-[550px] overflow-hidden">
                            <HoverVideoPlayer
                                className="w-full h-full our-services-video"
                                videoSrc={CUSTOM_HEADLIGHTS_URL}
                                pausedOverlay={
                                    <img
                                        src={CUSTOM_HEADLIGHTS_THUMBNAIL_URL}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                }
                            />
                        </div>
                        <h4 className="font-lemonmilk-regular text-white">CUSTOM HEADLIGHTS</h4>
                    </div>
                </div>
            </section>

            <section className="h-[20vh] relative  pb-40"></section>

        </main>
    )
}

export default Home;
