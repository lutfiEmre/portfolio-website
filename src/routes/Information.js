import Hover3D from "./hover3D";

import { motion } from "framer-motion"
const Information = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    let myHover3D = new Hover3D(".card"); // Yep! That's it.

    return(
        <motion.div variants={item} className="card flex w-full h-full justify-center items-center">
            <motion.div className={' md:w-[555px] w-[300px] sm:w-[450px] sm:h-[450px] md:h-[390px] mt-5 rounded-[15px] ml-2 bg-light-bg3 dark:bg-dark-bg3 border-[2.05px] border-dashed border-border1 pl-[20px] pr-[5px] pb-[25px]'}>
                <h2 className={'font-text5 pt-6 pb-4  text-2xl text-light-text2 dark:text-dark-text1'}>Information</h2>
                <h3 className={'font-text6 text-light-text3 dark:text-dark-text2 sm:w-[420] md:w-[530px] text-m'}>
                    I am a self-taught programmer from Mersin, Turkey. Currently, I am a software engineering student at university. I have surpassed the limits of learning and I am someone who enjoys acquiring new knowledge and constantly improving myself. I enjoy watching TV series and movies, and music is deeply ingrained in my soul. I like to read books that involve science fiction, psychology, and mystery. In my free time, I engage in pixel art, creating 2D characters and worlds, allowing my imagination to run wild. Currently, I'm currently working as a
                    <span className={'font-bold text-outtext5 dark:text-dark-outtext5'}> Technical Support</span>
                    <span className={'font-extrabold text-outtext6 dark:text-dark-outtext6'}> at DataFex</span>
                </h3>
            </motion.div>
        </motion.div>

    )
}
export default Information