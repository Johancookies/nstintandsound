import Contact from "../assets/icons/contact.svg";
import Menu from "../assets/icons/menu.svg";

function Home() {
    return (
        <main className="flex flex-col relative w-full min-h-screen">
            {/* nav */}
            <nav className="flex items-center justify-between p-6 nav-bg w-screen absolute z-50">
                <button className="w-6 h-6 [&>*]:fill-white"><Menu /></button>
                <span className="font-sunkids text-white text-2xl cursor-pointer">NewStyle</span>
                <button className="w-6 h-6 [&>*]:fill-white"><Contact /></button>
            </nav>
            {/* bg video */}
            <section className="h-screen relative">
                <video muted loop autoPlay>
                    <source src="https://www.dropbox.com/scl/fi/bkwfxqzn0yw2g3dqlenyl/white.mp4?rlkey=xh6zpwg2mh5u07qd5gi7ukzyb&st=pbrxur7i&raw=1" type="video/mp4" />
                </video>
                {/* video content */}
                <div className="absolute bottom-[6rem] px-10 z-50 md:px-20 flex flex-col items-start gap-6">
                    <h1 className="font-lemonmilk-regular text-5xl sm:text-7xl text-white md:max-w-[75%]">
                        Upgrade Your Ride with <span className="text-[#9e6eac] underline">the Best </span> Window Tinting in Miami, FL!
                    </h1>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-[#743089] text-white">Learn More</button>
                        <button className="px-6 py-3 border border-white text-white">Contact Us</button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full video-bg h-1/2" />
            </section>

            {/* about */}
            <section className=" relative bg-black">
                <div className="flex flex-col p-10 gap-2 tex text-center">
                    <h3 className="font-lemonmilk-regular text-[#9e6eac] text-xs">DISCOVER</h3>
                    <h2 className="font-lemonmilk-regular text-white text-2xl">OUR SERVICES</h2>
                </div>
                <div className="flex gap-3 py-20">
                    <div className="flex flex-col px-40 gap-2">
                        <div className="w-[338px] h-[450px] bg-red-500"></div>
                        <h4 className=" text-[#9e6eac] text-xs">Car Window Tint</h4>
                        <h4 className=" text-white">Car Window Tint</h4>
                    </div>
                </div>
            </section>

            <section className="h-[10vh] relative bg-white pb-40">
            </section>

        </main>
    )
}

export default Home;
