     import sampmusic from "../imgs/Rectangle 1059.png";
import {useEffect, useState} from "react";
import Hover3D from "./hover3D";


const SpotifyExtra = () => {

    let myHover3D = new Hover3D(".card"); // Yep! That's it.

    const [favoriteTracks,setFavoriteTracks] = useState([])
    const [accessToken, setAccessToken] = useState('');
    const [dataX,setDataX] = useState([])

    useEffect(() => {
        // Spotify erişim tokenını yenile
        refreshSpotifyToken();

        const timer = setInterval(() => {
            refreshSpotifyToken();
        }, 3600000); // 3600 saniye = 3600000 milisaniye

        return () => {
            // Komponentin temizlenmesi durumunda zamanlayıcıyı temizle
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        getSpotifyData();
        getFavoriteTracks();
        if (accessToken) {
            const interval = setInterval(() => {
                getSpotifyData();
                getFavoriteTracks();
            }, 5000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [accessToken]);


    const refreshSpotifyToken = async () =>             {
        const tokenUrl = process.env.REACT_APP_TOKEN_URL
        const clientId = process.env.REACT_APP_CLIENT_ID
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET
        const refreshToken = process.env.REACT_APP_REFRESH_TOKEN

        try {
            const response = await fetch(tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
                },
                body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
            });

            const data = await response.json();
            setAccessToken(data.access_token);
        } catch (error) {
            console.error('Error refreshing Spotify token:', error);
        }
    };

    const getSpotifyData = async () => {
        const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=4';

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setDataX(data)
            } else {
            }
        } catch (error) {
            console.error('Error getting Spotify data:', error);
        }
    };

    const getFavoriteTracks = async () => {
        const url = 'https://api.spotify.com/v1/me/tracks?limit=4';

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setFavoriteTracks(data.items);
            } else {
                console.error('Error getting favorite tracks:', response.status);
            }
        } catch (error) {
            console.error('Error getting favorite tracks:', error);
        }
    };



    return (
        <div className={'flex flex-row justify-between items-start md:gap-6 md:m-0 sm:mr-4   gap-5 sm:gap-0 md-[400px] lg:w-full '}>
            <div className={'flex flex-col items-center justify-center sm:scale-100  sm:w-[300px] md:w-full leading-3 gap-'}>
                <h2 className={'font-text14 md:text-2xl whitespace-nowrap lg:text-4xl text-sm text-light-text8 dark:text-white'}>LISTEN LAST MUSIC</h2>
                <h2 className={'font-text15 -mt-6 text-light-text6 '}>
                    (SPOTIFY)
                </h2>
                <h3 className={'font-text19 -mt-9 text-light-text6 mr-1 opacity-60'}>data changes instantly.</h3>
                <div className={'flex flex-col gap-6 sm:w-[290px] md:w-[350px]  '}>
                    {dataX.items ? dataX.items.map((item) => (
                        <div key={item.played_at} className={'card'}>
                            <a target={"_blank"} href={item.track.external_urls.spotify}>
                                <div className={'flex flex-col sm:flex-row justify-start w-[150px] sm:w-full sm:pt-0 items-end sm:h-[117px] bg-light-bg5 dark:bg-light-bg4 border-[10px] border-border3 dark:border-border4 rounded-[10px] overflow-hidden'}>
                                    <img className={'w-[150px] sm:w-[100px] md:w-[140px] md:min-w-[140px]'} src={item.track.album.images[0].url} alt=""/>
                                    <div className={'md:w-[180px] pb-[1.4rem] sm:pb-0 sm:w-[230px] w-[125px] h-full flex justify-center items-center flex-col'}>
                                        <h2 className={'font-text16 mt-3 w-[90%] break-words text-center text-light-text9 text-base dark:text-dark-text4'}>{item.track.name}</h2>
                                        <h2 className={'font-text17 mt-1 w-full text-center text-md text-white dark:text-dark-text5'}>{item.track.artists[0].name}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )) : 'Loading songs, please wait :;)'}
                </div>
            </div>
            <div className={'flex flex-col items-center justify-center sm:w-[300px] md:w-full leading-3 gap-0'}>
                    <h2 className={'font-text14 md:text-2xl whitespace-nowrap text-sm lg:text-4xl text-light-text8 dark:text-white '}>MY FAVORITE MUSIC</h2>
                    <h2 className={'font-text15 -mt-6 text-light-text6'}>
                        (SPOTIFY)
                    </h2>
                    <h3 className={'font-text19 -mt-9 text-light-text6 mr-1 opacity-60'}>data changes instantly.</h3>
                    <div className={'flex flex-col gap-6 sm:w-[290px] md:w-[350px] '}>
                        {favoriteTracks?
                            favoriteTracks.map((item) => (
                                <div className={'card'} key={item.played_at}>
                                    <a target={"_blank"} href={item.track.external_urls.spotify}>
                                        <div className={'flex flex-col sm:flex-row sm:w-full w-[150px] sm:pt-0 pt-4 justify-end items-end sm:h-[117px] bg-light-bg5 dark:bg-light-bg4 border-[10px] border-border3 dark:border-border4 rounded-[10px] overflow-hidden'}>
                                            <div className={'md:w-[180px] sm:pb-0 pb-4 sm:w-[230px] w-[110px] h-full flex justify-center items-center flex-col mr-2'}>
                                                <h2 className={'font-text16 w-[90%] break-words text-center text-light-text9 text-base dark:text-dark-text4'}>{item.track.name}</h2>
                                                <h2 className={'font-text17 mt-1 w-full text-center text-md text-white dark:text-dark-text5'}>{item.track.artists[0].name}</h2>
                                            </div>
                                            <img className={'w-[150px] sm:w-[100px] md:w-[140px] md:min-w-[140px] h-full'} src={item.track.album.images[0].url} alt=""/>
                                        </div>
                                    </a>
                                </div>
                            ))  : 'Loading songs, please wait :;)'}
                    </div>
                </div>
        </div>

    )
}
export default SpotifyExtra