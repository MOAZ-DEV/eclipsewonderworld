import { NavBar } from "../components/NavBar.tsx";
import gphcx from "../assets/DesignRes/gphcx.png"
import TweenMax from "gsap";


import "./styling.scss";
import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer.tsx";
import { PNL } from "../components/PNL.tsx";

export const AboutEclipsesPage = (_props: any) => {
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
    return <div className="EclipseTypesPage ContentPage" ref={el => etp = el} onLoad={() => {
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
                <h3>All about</h3>
                <h3>eclipses</h3>
            </div>
            <div>
                <h5 className="HB24">
                    why eclipses are great for science ?</h5>

                <p className="BM14">
                    In addition to inspiring artists and musicians, eclipses have driven numerous scientific discoveries. For over a century, solar eclipses helped scientists decipher the Sun’s structure and explosive events, find evidence for the theory of general relativity, discover a new element, and much more.
                    NASA scientists still study eclipses to make new discoveries about the Sun, Earth, and our space environment. Total solar eclipses are particularly important because they allow scientists to see a part of the Sun’s atmosphere – known as the corona – which is too faint to see except when the bright light of the Sun’s surface is blocked.
                    Scientists use instruments called coronagraphs to block the Sun’s light in a manner similar to a total eclipse, but these instruments still struggle to reveal the region of the corona closest to the Sun, where many important processes occur.( Eclipses offer scientists a rare view of the sun in its totality. It is a unique opportunity to observe the effects of the solar corona. As the moon blocks out parts of the solar disk, the corona becomes more visible. Scientists study the solar corona from both the Earth's surface and with telescopes and spacecraft)</p>

                <h5 className="HB24">
                    what is an eclipse season?</h5>
                <p className="BM14">
                    An eclipse season is one of only two periods during each year when the Sun, Moon, and Earth are aligned, allowing eclipses to occur. Each season lasts about 35 days and repeats just short of every six months.</p>
                <h5 className="HB24">
                    Why are the total solar eclipses important?</h5>
                <p className="BM14">
                    Total solar eclipses are particularly important because they allow scientists to see a part of the Sun’s atmosphere known as the corona, which is too faint to see except when the bright light of the Sun’s surface is blocked. Total solar eclipses also provide an opportunity to study Earth’s atmosphere under uncommon conditions. In contrast to the global change in light that occurs every day at dusk and dawn, a solar eclipse changes the illumination of Earth and its atmosphere under a comparatively small region of the Moon’s shadow. This localized blocking of solar energy is useful for studying the Sun’s effects on our atmosphere, especially the upper atmosphere where the Sun’s energy creates a layer of charged particles called the ionosphere. Understanding this region is important because it hosts many low-Earth-orbiting satellites as well as communications signals (such as radio waves and the signals that make the Global Positioning System [GPS] work), and changes there can significantly impact our technology and communication systems.</p>
                <h5 className="HB24">
                    How do eclipses occur?</h5>
                <p className="BM14">
                    -A solar eclipse occurs when the Moon passes between the Sun and Earth, casting the Moon's shadow on Earth.  A solar eclipse can only happen during a New Moon. A Lunar eclipse occurs when the Sun casts Earth's shadow onto the Moon.  For this to happen, the Earth must be physically between the Sun and Moon with all three bodies lying on the same plane of orbit.  A lunar eclipse can only occur during a Full Moon and when the Moon passes through all or a portion of Earth's shadow.</p>
                <h5 className="HB24">
                    Why do only some people on Earth see an eclipse at a given time?</h5>
                <p className="BM14">
                    For an eclipse to be visible from a certain location on Earth, three things must be present:
                    1.	The eclipse must fall within that location's time zone.
                    2.	The moon must be in the right position relative to the sun and the Earth.
                    3.	The atmosphere must allow for the eclipse to be visible.
                    If all these three conditions are met, then the eclipse can be seen from that location. However, if even one of these conditions are not met, then the eclipse becomes invisible from that specific location. That is why people on earth cannot see the same eclipse at the same time.</p>
                <h5 className="HB24">
                    What causes the Sun, Moon, and Earth to align?</h5>

                <p className="BM14">
                    The Sun, Moon, and Earth are aligned when they are in a line with each other. This alignment is caused by the fact that the Earth makes one complete rotation on its axis every 24 hours, while the Moon orbits the Earth in about the same amount of time. When the Moon is at its closest point to the Earth, which is called perigee, its orbit is at its slowest, therefore the Moon appears to be stationary, creating an almost perfect alignment.
                    However, when the Moon is at its farthest point from the Earth, called apogee, its orbit is at its fastest, causing it to move away from</p>
                <h5 className="HB24">
                    How often do solar eclipses occur?</h5>
                <p className="BM14">
                    Solar eclipses occur approximately once every 18 months. However, each solar eclipse is a unique event with different locations, times, and durations. Different types of solar eclipses also have different frequencies. A total solar eclipse, for example, occurs only about once every 18 months, while a partial or annular solar eclipse occurs more frequently. The frequency of a solar eclipse depends on the alignment of the Earth, Moon, and Sun, and the path of the Moon's shadow on the Earth's surface.</p>
                <h5 className="HB24">
                    How often do lunar eclipses occur?</h5>
                <p className="BM14">
                    Lunar eclipses occur approximately twice a year, with some variation depending on the Moon's orbit and the Earth's orbit around the Sun. A lunar eclipse can occur only when the Moon is in conjunction or opposition with the Sun, and the Earth is located between the Sun and the Moon. In other words, the conditions must be just right for the Earth's shadow to fall on the Moon, causing a lunar eclipse. When a lunar eclipse occurs, the frequency of the next lunar eclipse is determined by the time it takes for the Earth to complete one orbit around the Sun and the Moon to complete one orbit around the Earth.</p>
                <h5 className="HB24">
                    What is the frequency of solar and lunar eclipses ?</h5>
                <p className="BM14">
                    In most calendar years there are two lunar eclipses; in some years one or three or none occur. Solar eclipses occur two to five times a year, five being exceptional; there last were five in 1935, and there will not be five again until 2206. The average number of total solar eclipses in a century is 66 for Earth as a whole.</p>
                <h5 className="HB24">
                    How do scientists know when and where eclipses will occur?</h5>
                <p className="BM14">
                    Scientists use orbital calculations to determine when and where eclipses will occur. They use orbital mechanics, which allows them to predict the exact positions of the Earth, Moon, and Sun, as well as the shadows they cast on one another. Scientists can use this information to predict the path of the Moon's shadow, which can be used to determine the exact location and time of an eclipse. Scientists can also use observations of past eclipses, astronomical instruments, and modeling to make even more accurate predictions about the location and timing of future eclipses.</p>
                <h5 className="HB24">
                    What is the difference between a lunar and solar eclipse?</h5>
                <p className="BM14">
                    A solar eclipse happens when the moon passes in between the earth and the sun.	A lunar eclipse happens when the earth passes in between the moon and the sun.
                    During a solar eclipse, the moon partially or fully hides the sun’s rays for a few minutes.	During a lunar eclipse, the earth’s shade partially or fully hides the moon for a brief period of time.
                    Happens once in 18 months.	Occurs two times in a year.
                    The three types of solar eclipses are total solar eclipse, partial solar eclipse, and annular solar eclipse.	The three types of lunar eclipses are total lunar eclipse, partial lunar eclipse and a penumbral lunar eclipse.
                    Solar eclipse is seen from few places only.	Lunar eclipses are spotted from many places.
                    Happens during a day	Occurs during nights
                    A solar eclipse happens on a new moon day.	A lunar eclipse happens on a full moon day.
                    It is not safe to see a solar eclipse through naked eyes. You need protective glasses to avoid any harm to the eyes.	It is perfectly safe to see a lunar eclipse with naked eyes. You do not need any protective covering to view it.</p>
                <h5 className="HB24">
                    Why do eclipse season occur approximately every six months (or twice a year)?</h5>
                <p className="BM14">
                    Eclipses occur approximately every six months because of the way the Earth, Moon, and Sun orbit around each other. The Earth rotates around its axis once every 24 hours, while the Moon orbits the Earth once every 29.5 days. During this 29.5-day orbit, there are times when the Moon passes between the Earth and the Sun, which is when solar eclipses occur. Additionally, the Moon's orbit is not exactly in the same plane as the Earth's orbit around the Sun. As a result, there are times when the Earth's shadow does not fall on the Moon, causing no lunar eclipse to occur. When all these factors come together, they create a situation where, approximately every 6 months, both a solar and lunar eclipse can occur.</p>
                <h5 className="HB24">
                    how to watch an eclipse safely?</h5>
                <p className="BM14">
                    Except for a specific and brief period of time during a total solar eclipse, you must never look directly at the Sun without proper eye protection, such as safe solar viewing glasses (eclipse glasses). Eclipse glasses are NOT the same as regular sunglasses; regular sunglasses are not safe for viewing the Sun.
                    During a total solar eclipse, you must wear your eclipse glasses (or use other solar filters) to view the Sun directly during the partial eclipse phase. You can only take your glasses off during the short time when the Moon completely obscures the Sun – known as the period of totality.
                    If you don’t have eclipse glasses, you can use an indirect viewing method, such as a pinhole projector, which projects an image of the Sun onto a nearby surface.</p>









            </div>
        </div>

        <PNL />
        <Footer />
    </div>;
}
