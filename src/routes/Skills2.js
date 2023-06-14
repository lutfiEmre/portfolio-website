import { motion } from "framer-motion"
import logojavascript from '../imgs/logojavascript.svg'
import logohtml from '../imgs/html-5.png'
import reactlogo from '../imgs/react.svg'
import csslogo from '../imgs/css.png'
import tailwindcss from '../imgs/Microsoft.VisualStudio.Services.Icons.png'
import figmaicon from '../imgs/Figma.svg'
import asepriteicon from '../imgs/fc918daaaabaf72920a240177aa1b521ace8488d_2_192x192.png'
import photoshopicon from '../imgs/photoshop-camera.png'
import flstudio from '../imgs/flstudio.png'
import nextjs from '../imgs/nextjs-svgrepo-com.svg'
import svelte from '../imgs/svelte-svgrepo-com.svg'
import typescript from '../imgs/typescript-official-svgrepo-com.svg'
import sass from '../imgs/scss2-svgrepo-com.svg'
import nodejs from '../imgs/nodejs-icon-svgrepo-com.svg'
import {useEffect, useState} from "react";
import Hover3D from "./hover3D";

const Skillstwo = () => {
    const [altyazi, setAltyazi] = useState({
        text1: 'The process of learning is a lifelong journey for human beings.',
        text2: 'by Sydney J. Harris.'
    });

    const altyazidegistir = () => {
        if(altyazi.text2 === 'by Sydney J. Harris.'){
            setAltyazi({
                text1: 'When compared to what I have yet to learn, what I have learned is just the tip of the iceberg :)',
                text2: 'by EmreLutfi'
            });
        }else{
            setAltyazi({
                text1: 'The process of learning is a lifelong journey for human beings.',
                text2: 'by Sydney J. Harris.'
            });
        }
    }

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
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={'flex flex-col justify-center items-center '}>
            <motion.div variants={container} initial="hidden" animate="visible" className={'relative hidden sm:flex sm:flex  sm:gap-[0rem] md:gap-[1.5rem] lg:gap-[5.5rem] ml-2 mt- items-center flex-row relative'}>
                <motion.div className={'flex flex-col md:w-[150px] lg:w-[200px] gap-16 h-full absolute sm:top-6 right-20 -top-10 sm:right-40 md:right-60'}>
                    <motion.div
                        variants={item}
                        className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme dark:border-dark-bg2 border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={logojavascript} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-yellow-500 w-[9.5rem] ml-14 mx-auto text-center'}>Javascript</h1>
                    </motion.div>
                    <motion.div variants={item}
                                className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme dark:border-dark-bg2 border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={reactlogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-black dark:text-white w-[9.5rem] ml-12 mx-auto text-center'}>React</h1>
                    </motion.div>
                    <motion.div variants={item}   className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] dark:border-dark-bg2 border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative"
                    >
                        <img src={csslogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-red-500 w-[9.5rem] ml-12 mx-auto text-center'}>CSS3</h1>
                    </motion.div>
                    <motion.div  variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] dark:border-dark-bg2 border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={tailwindcss} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-xl text-purple-800 w-[9.5rem] ml-12 mx-auto text-center dark:text-pink-400'}>TailwindCSS</h1>
                    </motion.div>
                    <motion.div variants={item}  className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] dark:border-dark-bg2 border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={logohtml} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-gray-800 w-[9.5rem] ml-12 mx-auto text-center dark:text-white s'}>HTML5</h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={'flex flex-col md:w-[150px] lg:w-[200px] gap-28 sm:gap-24 z-30 h-full'}>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] dark:border-dark-bg2 rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={figmaicon} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-blue-900 w-[9.5rem] dark:text-blue-300 ml-10 mx-auto text-center'}>Figma</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] dark:border-dark-bg2 rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={asepriteicon} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-red-200 w-[9.5rem] ml-10 mx-auto text-center'}>Aseprite</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] dark:border-dark-bg2 rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={photoshopicon} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-stdarkblue w-[9.5rem] ml-12 mx-auto text-center'}>Photoshop</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] dark:border-dark-bg2 rounded-t-[25px] border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={flstudio} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-orange-500 w-[9.5rem] ml-12 mx-auto text-center'}>FL Studio</h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={'flex flex-col md:w-fit lg:w-[200px] gap-16 h-full absolute sm:top-6 left-20 -top-10 sm:left-40 md:left-60'}>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] dark:border-dark-bg2 border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={nextjs} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-yellow-400 w-[9.5rem] ml-14 mx-auto text-center'}>NextJS</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] dark:border-dark-bg2 border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={svelte} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-white w-[9.5rem] ml-12 mx-auto text-center'}>Svelte</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] dark:border-dark-bg2 border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={sass} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-red-500 w-[9.5rem] ml-12 mx-auto text-center'}>SASS</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] dark:border-dark-bg2 rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={typescript} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-purple-800 w-[9.5rem] ml-12 mx-auto text-center'}>Typescript</h1>
                    </motion.div>
                    <motion.div variants={item} className="z-20 card bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] dark:border-dark-bg2 rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={nodejs} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-gray-800 w-[9.5rem] ml-12 mx-auto text-center dark:text-green-400'}>NodeJS</h1>
                    </motion.div>
                </motion.div>

            </motion.div>
            <div className={'w-full h-full sm:hidden '}>
                <motion.div variants={item} className="z-20 card bg-stcyanblue w-full h-full gap-12 py-6  border-b-[12px] dark:border-dark-bg2 rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex flex-col justify-center items-center relative">
                <div>
                    <img src={logojavascript} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                    <h1 className={'font-bold text-2xl text-blue-900 w-[9.5rem] dark:text-blue-300 ml-10 mx-auto text-center'}>Javascript</h1>
                </div>
                    <div>
                        <img src={reactlogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-blue-900 w-[9.5rem] dark:text-blue-300 ml-10 mx-auto text-center'}>React</h1>
                    </div>

                </motion.div>
            </div>

        </motion.div>
    )
}

export default Skillstwo