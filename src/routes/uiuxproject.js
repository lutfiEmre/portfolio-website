
import proje1 from '../imgs/ek/Frame 11.png'
import proje2 from '../imgs/ek/Frame 12.png'
import proje3 from '../imgs/ek/Frame 13.png'
import proje4 from '../imgs/ek/Frame 14.png'
import proje5 from '../imgs/ek/Frame 15.png'
import proje6 from '../imgs/ek/Frame 16.png'



import Hover3D from "./hover3D";


const Uiuxproject = () => {
    let myHover3D = new Hover3D(".card"); // Yep! That's it.
    return(
        <div className="card w-full noselect">
        <div className={'md:p-5 md:gap-2 w-full h-[414px] bg-light-bg3 dark:bg-dark-bg3 border-border1 border-dashed border-[1.92px] rounded-[14px] flex items-center justify-center flex-col'}>
            <div className={'w-full h-44 flex justify-center items-center flex-row sm:gap-8 px-12 md:gap-10'}>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img alt="EmreLutfi Redbull Design Figma" className={'w-fit sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje1} alt="emrelutfi linkedin bionluk"/>
                    <h2 aria-label={'emre lutfi figma redbull design dribbble behance'} className={'font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Redbull Design</h2>
                    <h2 aria-label={'dribbble behance figma'}  className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}></h2>
                </div>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img alt="EmreLutfi Mustang Design Figma" className={'w-fit sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje2} alt="emrelutfi linkedin"/>
                    <h2 aria-label={'emre lutfi figma mustang design dribbble behance'}  className={'font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Mustang Design</h2>
                    <h2 aria-label={'figma dribbble behance'}  className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}></h2>
                </div>
                <div className={'flex flex-col  justify-center items-center w-fit'}>
                    <img alt="EmreLutfi Figma Login Page" className={'w-fit sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje3} alt="emrelutfi linkedin"/>
                    <h2 aria-label={'emre lutfi figma Login page dribbble behance'}  className={'font-text17 w-[100px] mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Login Page</h2>
                    <h2 aria-label={'emrelutfi figma bionluk'} className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}></h2>
                </div>
            </div>
            <div className={'w-full h-44 flex justify-center items-center flex-row sm:gap-8 px-12 md:gap-10'}>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img alt="Bionluk EmreLutfi" className={'w-fit sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje6} alt="emrelutfi bionluk"/>
                    <h2 aria-label={'emre lutfi figma heartrate design dribbble behance'}  className={'w-[105px] font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Heart Rate</h2>
                    <h2 aria-label={'bionluk emrelutfi'}  className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}>App</h2>
                </div>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img alt="EmreLutfi bionluk shop" className={'w-fit sm:w-[100px] md:w-full  sm:h-[90px] md:h-[120px]'} src={proje4} alt="emrelutfi bionluk"/>
                    <h2 aria-label={'emrelutfi bionluk e-commerce'}  className={'w-[105px] font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>E-Commerce</h2>
                    <h2 aria-label={'emrelutfi bionluk shop'}  className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}>Shop</h2>
                </div>
                <div className={'flex flex-col  justify-center items-center'}>
                    <img alt="EmreLutfi bionluk website" className={'w-fit sm:w-[100px] md:w-full sm:h-[80px] md:h-[120px]'} src={proje5} alt="emrelutfi bionluk"/>
                    <h2 aria-label={'emre lutfi fasttyping figma website'}  className={'w-[105px] font-text17  mt-2  md:text-xl sm:text-sm whitespace-nowrap md:w-[130px] text-center dark:text-white'}>Fast Typing</h2>
                    <h2 aria-label={'emre lutfi bionluk website'}  className={'font-text17 mt-0 md:text-xl sm:text-sm -mt-4 text-center dark:text-white'}>Website</h2>
                </div>
            </div>
        </div>
        </div>

    )
}
export default Uiuxproject;