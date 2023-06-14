import { motion } from "framer-motion"
import logojavascript from './img/logojavascript.svg'
import logohtml from './img/html-5.png'
import reactlogo from './img/react.svg'
import csslogo from './img/css.png'
import tailwindcss from './img/Microsoft.VisualStudio.Services.Icons.png'
import figmaicon from './img/Figma.svg'
import asepriteicon from './img/fc918daaaabaf72920a240177aa1b521ace8488d_2_192x192.png'
import photoshopicon from './img/photoshop-camera.png'
import flstudio from './img/flstudio.png'
import {useEffect, useState} from "react";

const Skills = () => {
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
    return(
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={'flex flex-col justify-center items-center mt-2'}>
            <motion.div variants={container} initial="hidden" animate="visible" className={'flex gap-[5.5rem] ml-2 mt-12 items-center flex-row relative'}>
                <motion.div className={'flex flex-col w-[200px] gap-16 h-full'}>
                    <motion.div
                        variants={item}
                        className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={logojavascript} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-yellow-400 w-[9.5rem] ml-14 mx-auto text-center'}>Javascript</h1>
                    </motion.div>
                    <motion.div variants={item}
                                className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={reactlogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-white w-[9.5rem] ml-12 mx-auto text-center'}>React</h1>
                    </motion.div>
                    <motion.div variants={item}   className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative"
                    >
                        <img src={csslogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-red-500 w-[9.5rem] ml-12 mx-auto text-center'}>CSS3</h1>
                    </motion.div>
                    <motion.div  variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={tailwindcss} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-purple-800 w-[9.5rem] ml-12 mx-auto text-center'}>TailwindCSS</h1>
                    </motion.div>
                    <motion.div variants={item}  className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  rounded-br-[25px] border-l-deneme border-b-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={logohtml} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-gray-800 w-[9.5rem] ml-12 mx-auto text-center'}>HTML5</h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={'flex flex-col w-[200px] gap-16 h-full'}>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={figmaicon} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-blue-900 w-[9.5rem] ml-10 mx-auto text-center'}>Figma</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={asepriteicon} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-red-200 w-[9.5rem] ml-10 mx-auto text-center'}>Aseprite</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] rounded-t-[25px]  border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={photoshopicon} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-stdarkblue w-[9.5rem] ml-12 mx-auto text-center'}>Photoshop</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] rounded-t-[25px] border-deneme  shadow-lg shadow-stcyanblue flex justify-center items-center relative">
                        <img src={flstudio} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-orange-500 w-[9.5rem] ml-12 mx-auto text-center'}>FL Studio</h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={'flex flex-col w-[200px] gap-16 h-full'}>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={logojavascript} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-yellow-400 w-[9.5rem] ml-14 mx-auto text-center'}>Typescript</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={reactlogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-white w-[9.5rem] ml-12 mx-auto text-center'}>React</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={csslogo} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-red-500 w-[9.5rem] ml-12 mx-auto text-center'}>CSS3</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={tailwindcss} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-purple-800 w-[9.5rem] ml-12 mx-auto text-center'}>TailwindCSS</h1>
                    </motion.div>
                    <motion.div variants={item} className="bg-stcyanblue w-[200px] h-[96px] border-b-[12px] border-l-[6px] rounded-tl-[25px]  border-l-deneme  rounded-br-[25px] border-strokeblue shadow-lg shadow-strokeblue flex justify-center items-center relative">
                        <img src={logohtml} className={'absolute w-12 h-12 opacity-100 left-2'} alt=""/>
                        <h1 className={'font-bold text-2xl text-gray-800 w-[9.5rem] ml-12 mx-auto text-center'}>HTML5</h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={item}
                    onClick={() => {altyazidegistir()}}
                    className={'skillsaltyazi select-none absolute -bottom-[13rem] mt-16 bg-stcyanblue w-full h-36 border-strokeblue rounded-t-[40px] border-b-[16px] flex flex-col justify-center items-center'}>
                    <h1 className={'text-bold text-2xl flex justify-center items-center text-center'}>
                        {altyazi.text1}
                    </h1>
                    <h2 className={'text-xl opacity-60'}>
                        {altyazi.text2}
                    </h2>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Skills