
import stimage from '../imgs/Group 47.svg'
import Hover3D from "./hover3D";


const Skilss = () => {
    let myHover3D = new Hover3D(".card"); // Yep! That's it.
    return(
        <>
            <div className="card w-full">
            <div className={'sm:text-lg md:text-2xl lg:text-4xl pt-5  bg-light-bg3 w-full h-[555px] dark:bg-dark-bg3 dark:text-dark-text1 border-border1 border-dashed border-[1.92px] flex flex-col justify-start py-2 items-center'}>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>HTML</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>CSS</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>React</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>Javascript</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>TypeScript</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>TailwindCSS</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>SASS</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>Svelte</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>Bootstrap</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>Nodejs</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>NextJS</h2>

            </div>
            </div>
            <img className={'px-4 lg:w-fit sm:w-[150px] md:w-[250px]'} src={stimage} alt=""/>
            <div className="card w-full">
            <div className={'sm:text-lg md:text-2xl lg:text-4xl pt-5  bg-light-bg3 w-full h-[555px] dark:bg-dark-bg3 dark:text-dark-text1 border-border1 border-dashed border-[1.92px] flex flex-col justify-start py-2 items-center'}>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>Figma</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>Aseprite</h2>
                <h2 className={'font-text13 text-light-text2 dark:text-dark-text1'}>FL Studio</h2>

            </div>
            </div>
        </>

    )
}
export default Skilss