import lnv from "../assets/DesignRes/lnv.mp4";
import "./styling.scss";

export const Footer = () => <footer>
    <div>
        <h3 className="HB24">
            This website made with team full with passion. Targeted to deliver knowledge to the young generation!</h3>
        <div className="wrap">
            <div className="video">
                <video src={lnv} autoPlay={true} playsInline={true} loop={true} controls></video>
                <h4 className="HR18">
                    Some eclipses could cause eye damage to us. Get know to it and learn how to avoid getting harm from it.</h4>
            </div>
            <ul>
                <li className="BR14"><a href="/eclipsewonderworld/eclipse_types">Eclipse Types</a></li>
                <li className="BR14"><a href="/eclipsewonderworld/about_eclipses_page">All About Eclipses</a></li>
                <li className="BR14"><a href="/eclipsewonderworld/resorces">Resorces</a></li>
            </ul>
        </div>
    </div>
    <div>
        <h6 className="BM12">
            @SpaceAppChallenge Project</h6>
        <h6 className="BM12">
            Last Updated: 29 September, 2023</h6>
    </div>
</footer>;