import Contact from "../assets/icons/contact.svg";
import Menu from "../assets/icons/menu.svg";

function Home() {
    return (
        <main className="flex flex-col relative w-screen min-h-screen overflow-x-hidden">
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
                <div className="absolute bottom-[4rem] md:bottom-[6rem] px-10 z-50 md:px-20 flex flex-col items-start gap-6">
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
            <section className="h-screen relative w-screen overflow-x-hidden">

            </section>

        </main>
    )
}

export default Home;
