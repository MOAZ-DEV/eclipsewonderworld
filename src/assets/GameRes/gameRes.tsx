import se from "./Solar eclipse.jpg";
import le from "./PHOTO-2023-09-23-16-03-23.jpg";
import tse from "./Total lunar eclipse.jpg";
import ase from "./Annular solar eclipse.jpg";
import ple from "./Partial lunar eclipse.jpg";
import bse from "./PHOTO-2023-09-23-16-03-25 2.jpg";
import hse from "./Penumbral lunar eclipse.jpg";
 
const Res = [{
    code: "n1",
    letter: "A",
    case: "Total solar",
    details: "Rare celestial event causing darkness on Earth when the Moon passes between the Earth and the Sun, blocking out the Sun's light.",
    img: se
}, {
    code: "n2",
    letter: "B",
    case: "Partial lunar eclipse",
    details: "Celestial event that occurs when the Earth's shadow falls on the Moon, causing the Moon to appear red or orange.",
    img: ple
}, {
    code: "n3",
    letter: "C",
    case: "Total lunar",
    details: "Celestial event where the Moon completely covers the Sun from Earth, obscuring its light and revealing the Sun's corona.",
    img: tse
}, {
    code: "n4",
    letter: "D",
    case: "Annular solar eclipse",
    details: "Rare celestial event where the Moon passes in front of the Sun, but does not fully cover it, creating a ring-like effect around the shadow of the Moon.",
    img: ase
}, {
    code: "n5",
    letter: "E",
    case: "Partial solar eclipse",
    details: "Rare celestial event where the Moon partially obscures the Sun, creating a dark shadow or silhouette on the Sun's surface.",
    img: hse
}, {
    code: "n6",
    letter: "F",
    case: "Hybrid solar eclipse",
    details: "Rare astronomical event where the Moon's umbral and penumbral shadows create different zones, including the central zone where the Moon completely obscures the Sun, the penumbra zone where the Moon partially obscures the Sun, and the antumbra zone where the Moon partially obscures the Sun. This creates a unique and impressive astronomical event, providing an opportunity for observers to explore the science behind solar eclipses.",
    img: bse
}, {
    code: "n7",
    letter: "G",
    case: "Penumbral lunar eclipse",
    details: "Rare celestial event where the Moon passes through the outer shadow of the Earth, creating a partially obscured Sun.",
    img: le
},];

export default Res;