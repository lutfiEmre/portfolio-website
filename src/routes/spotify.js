
import spotion from '../imgs/spotilist.png'
import './spotify.css'
import nomusic from '../imgs/nomusic.jpg'

import { motion } from "framer-motion"
import {useContext, useEffect, useState} from "react";
import StoreContext from "../StoreContext";

const Spotify = () => {
    const {musicon,setMusicon,durum,setDurum} = useContext(StoreContext)
    const [name,setName] = useState('')
    const [artist,setArtist] = useState('')
    const [status,setStatus] = useState('')
    const [resim,setResim] = useState('')
    const [track,setTrack] = useState('')
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await fetch('https://api.lanyard.rest/v1/users/445893185164541962');
            const data = await response.json();
            if(data.data.discord_status === 'dnd' || 'online'){
                setDurum(true)
            }
            if(data.data.discord_status === 'offline'){
                setDurum(false)
            }
            if(data.data.listening_to_spotify){
                setStatus(true)
                setMusicon(true)
                setName(data.data.spotify.song)
                setArtist(data.data.spotify.artist)
                setResim(data.data.spotify.album_art_url)
                setTrack(data.data.spotify.track_id)
            }else{
                setStatus(false)
                setMusicon(false)
            }
        }, 1000)
        return () => clearInterval(interval);
    }, );
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    const selam = true;


    return(
        <a target={"_blank"} href={`${track ? `https://open.spotify.com/track/${track}` : '' }`}>
            <motion.div className={'spotifymains lg:mt-12 md:mt-3 h-20 sm:h-24 lg:w-[800px] sm:w-[620px] w-[350px] md:w-[760px] bg-white rounded-xl flex flex-row relative group cursor-pointer'}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            y: { type: "spring", stiffness: 100 },
                            opacity: { duration: 0.2 }
                        }}>
                <motion.div  variants={item} className={'pl-8 pt-2 h-24 overflow-hidden max-w-[60%]'}>
                    {name ? (<h1 className={'font-bold capitalize text-light-text4 dark:text-green-800 text-[18px] sm:text-[25px]  whitespace-nowrap relative flex justify-start items-center'}>
                        {artist}
                    </h1>) : <h1 className={'font-bold text-green-500 text-[] whitespace-nowrap relative dark:text-dark-text3 flex justify-start items-center'}>
                        not listening to anything right now
                    </h1>}


                    <h2 className={'font-bold italic whitespace-nowrap text-[14px] w-full max-w-[600px] text-m'}>{name ? <div className={'text-white dark:text-dark-bg2'}>{name} {isHovered ? <div className={'-mt-1 text-sm text-red-400'}><span className={'text-pink-400'}>click me</span> to access the song (SPOTIFY)</div> : <div className={'-mt-1 text-sm text-dark-outtext6'}>· listening now</div>}</div> :
                        <div className={'text-xl text-white dark:text-black'}>tell him to listen to something</div>}</h2>
                </motion.div>
                <motion.div  variants={item} className={'flex flex-row'}>
                    <img className={' h-24 ml-2 relative spotifylogs transition duration-300 ease-in-out'} src={spotion} alt=""/>
                    <div className={'absolute -mt-10 sm:h-24 h-20'}>
                        <div className={`${status ? 'music ml-14 mt-8 delay1 transition duration-300 ease-in-out' : 'hidden'} `}>
                            <i className={'fas fa-music'}></i>
                        </div>
                        <div className={`${status ? 'music ml-5  delay2 transition duration-300 ease-in-out' : 'hidden'} `}>
                            <i className={'fas fa-music'}></i>
                        </div>
                        <div className={`${status ? 'music ml-[2.5rem] delay3 transition duration-300 ease-in-out' : 'hidden'}`}>
                            <i className={'fas fa-music'}></i>
                        </div>
                    </div>
                    <div className={'w-[50px] h-32 rounded-2xl overflow-hidden'}>
                        {resim ? (<img className={'musicphoto object-cover -mr-12 sm:w-[250px] w-[120px] rounded-2xl absolute h-32 -top-4 right-0 group-hover:scale-110 transition duration-300 ease-in-out'} src={resim} alt=""/>) :
                            <img className={'musicphoto object-cover sm:w-[250px] w-[100px]  rounded-2xl absolute h-32 -top-4 -right-6 group-hover:scale-125 transition duration-300 ease-in-out'} src={nomusic} alt=""/>}
                    </div>

                </motion.div>
            </motion.div>
        </a>
    )
}

export default Spotify