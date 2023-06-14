import uiproject from "../imgs/uiproject.png";
import proje1 from '../imgs/ek/Frame 11.png'
import proje2 from '../imgs/ek/Frame 12.png'
import proje3 from '../imgs/ek/Frame 13.png'
import proje4 from '../imgs/ek/Frame 14.png'
import proje5 from '../imgs/ek/Frame 15.png'
import proje6 from '../imgs/ek/Frame 16.png'
import proje7 from '../imgs/ek/Frame 17.png'

import slayer from "../imgs/Group 70.png";
import Hover3D from "./hover3D";


const Uiuxproject = () => {
    let myHover3D = new Hover3D(".card"); // Yep! That's it.
    return(
        <div className="card w-full noselect">
        <div className={'md:p-5 md:gap-2 w-full h-[414px] bg-light-bg3 dark:bg-dark-bg3 border-border1 border-dashed border-[1.92px] rounded-[14px] flex items-center justify-center flex-col'}>
            <div className={'w-full h-44 flex justify-center items-center flex-row sm:gap-8 px-12 md:gap-10'}>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img className={'sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje1} alt=""/>
                    <h2 className={'font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Redbull Design</h2>
                    <h2 className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}></h2>
                </div>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img className={'sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje2} alt=""/>
                    <h2 className={'font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Mustang Design</h2>
                    <h2 className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}></h2>
                </div>
                <div className={'flex flex-col  justify-center items-center w-fit'}>
                    <img className={'sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje3} alt=""/>
                    <h2 className={'font-text17 w-[100px] mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Login Page</h2>
                    <h2 className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}></h2>
                </div>
            </div>
            <div className={'w-full h-44 flex justify-center items-center flex-row sm:gap-8 px-12 md:gap-10'}>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img className={'sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje6} alt=""/>
                    <h2 className={'w-[105px] font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Heart Rate</h2>
                    <h2 className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}>App</h2>
                </div>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img className={'sm:w-[100px] md:w-full  sm:h-[90px] md:h-[120px]'} src={proje4} alt=""/>
                    <h2 className={'w-[105px] font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>E-Commerce</h2>
                    <h2 className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}>Shop</h2>
                </div>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img className={'sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje5} alt=""/>
                    <h2 className={'w-[105px] font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Fast Typing</h2>
                    <h2 className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}>Website</h2>
                </div>
            </div>
        </div>
        </div>

    )
}
export default Uiuxproject;