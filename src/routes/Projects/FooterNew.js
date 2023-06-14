import tus from "./Keyboard button.png";
import button from "./Power button.png";


const FooterNew = () => {
    return(
        <div className="projectfooter mt-10  mb-5 w-screen md:w-full h-full flex justify-center items-center">
            <div className="footer-item1 w-[350px] sm:w-full w-[350px]  h-[100px]  px-6">
                <div className="ipp flex justify-center items-center h-[120%] font-text9">
                    <img className={''} id={"tus"} src={tus} alt="" />
                    When compared to what I have yet to learn,
                    what I have learned is just the tip of the iceberg :)
                    <img id={"button"} src={button} alt="" />
                </div>
            </div>
            <div className="footer-item2 md:w-full w-[350px]  sm:w-[130%] h-[100px]"></div>
            <div className="footer-item3 md:w-full w-[350px]   sm:w-[130%] h-[100px]"></div>
        </div>
    )
}
export default FooterNew