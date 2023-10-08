import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";

import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

import vid  from "../assets/DesignRes/lnv.mp4";

export const ResorcesPage = (_props: any) => {
    let gphcxel: gsap.TweenTarget = useRef<HTMLSpanElement>(null),
        intro: gsap.TweenTarget = useRef<HTMLSpanElement>(null),
        introimg: gsap.TweenTarget = useRef<HTMLSpanElement>(null),
        etp: gsap.TweenTarget = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        TweenMax.from(
            intro, { y: 300, opacity: 0 });
        TweenMax.to(
            intro, 1, { y: 0, opacity: 1 });
        TweenMax.from(
            introimg, 1, { scale: 2 });
        TweenMax.to(
            introimg, 3, { scale: 1 });
    }, [])
    return <div className="FamousEclipsesThroughoutHistory ContentPage" ref={el => etp = el} onLoad={() => {
        TweenMax.to(
            etp,
            {
                css: {
                    visibility: 'visible'
                },
            }
        );
    }}>
        <span ref={el => gphcxel = el} onLoad={() =>
            TweenMax.to(
                gphcxel, 1,
                {
                    css: { opacity: 1, rotate: 30, transition: "opacity .5s ease-in" }
                }
            )} className="gphcx">
            <img src={gphcx} alt="moon" loading="lazy" />
        </span>
        <NavBar />

        <div className="contentWrap">
            <div className="HB36">
                <h3>Resorces</h3>
            </div>
            <div>
                <h5 className="HB24">
Articles:</h5>
<a className="BM14" href="https://moon.nasa.gov/news/185/what-you-need-to-know-about-the-lunar-eclipse/#:~:text=The%20last%20total%20lunar%20eclipse,Moon%20passes%20into%20Earth's%20shadow">
                <p className="BM14">
What You Need to Know About the Lunar Eclipse – Moon: NASA Science
                </p>

                </a>
<a className="BM14" href="">
                </a>
<a className="BM14" href="">
                </a>
<a className="BM14" href="">
                </a>
               <video src={vid} controls autoPlay={true} playsInline={true} loop={true}></video>
             </div>
        </div>

        <PNL />
        <Footer />
    </div>;
}
