import logojavascript from '../imgs/logojavascript.svg'
import logohtml from '../imgs/html-5.png'
import reactlogo from '../imgs/react.svg'
import csslogo from '../imgs/css.png'
import tailwindcss from '../imgs/Microsoft.VisualStudio.Services.Icons.png'
import figmaicon from '../imgs/Figma.svg'
import asepriteicon from '../imgs/fc918daaaabaf72920a240177aa1b521ace8488d_2_192x192.png'
import photoshopicon from '../imgs/photoshop-camera.png'
import flstudio from '../imgs/flstudio.png'
import nextjs from '../imgs/image 5.svg'
import svelte from '../imgs/svelte-svgrepo-com.svg'
import typescript from '../imgs/typescript-official-svgrepo-com.svg'
import sass from '../imgs/scss2-svgrepo-com.svg'
import nodejs from '../imgs/nodejs-icon-svgrepo-com.svg'
import python from '../imgs/python-svgrepo-com.svg'
import illustrator from '../imgs/adobe-illustrator-svgrepo-com (1).svg'
import sketch from '../imgs/sketch-svgrepo-com.svg'
import Hover3D from "./hover3D";



const Skillstonew = () => {
    let myHover3D = new Hover3D(".card"); // Yep! That's it.
    return(
        <div className={'card w-full h-[350px] my-8 mb-16 flex flex-row justify-center items-start md:gap-16 noselect'}>
         <div className={'flex justify-center items-center sm:gap-12 gap-3  md:gap-16'}>
             <div className={'flex flex-col justify-center items-center gap-6'}>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website javascript" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={logojavascript} alt=""/>
                     <h1 aria-label={'EmreLutfi Javascript'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Javascript</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website react" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={reactlogo} alt=""/>
                     <h1 aria-label={'EmreLutfi React'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>React</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website typescript" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={typescript} alt=""/>
                     <h1 aria-label={'EmreLutfi TypeScript'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>TypeScript</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website css3" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={csslogo} alt=""/>
                     <h1 aria-label={'EmreLutfi CSS3'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>CSS3</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website sass" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={sass} alt=""/>
                     <h1 aria-label={'EmreLutfi SASS'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>SASS</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website html5" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={logohtml} alt=""/>
                     <h1 aria-label={'EmreLutfi HTML5'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>HTML5</h1>
                 </div>
             </div>
             <div className={'flex flex-col justify-center items-center  gap-6'}>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website tailwindcss" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={tailwindcss} alt=""/>
                     <h1 aria-label={'EmreLutfi TailwindCSS'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>TailwindCSS</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website nodejs" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={nodejs} alt=""/>
                     <h1 aria-label={'EmreLutfi NodeJS'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>NodeJS</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website nextjs" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={nextjs} alt=""/>
                     <h1 aria-label={'EmreLutfi nextJS'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>NextJS</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emre lutfi website svelte" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={svelte} alt=""/>
                     <h1 aria-label={'EmreLutfi Svelte'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Svelte</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website python" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={python} alt=""/>
                     <h1 aria-label={'EmreLutfi Python'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Python</h1>
                 </div>
             </div>
             <div className={'flex flex-col justify-center items-center gap-6'}>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emre lutfi website figma" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={figmaicon} alt=""/>
                     <h1 aria-label={'EmreLutfi Figma'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Figma</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emre lutfi website aseprite" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={asepriteicon} alt=""/>
                     <h1 aria-label={'EmreLutfi Aseprite'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Aseprite</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emre lutfi website photoshop" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={photoshopicon} alt=""/>
                     <h1 aria-label={'EmreLutfi Photoshop'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Photoshop</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emre lutfi website flstudio" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={flstudio} alt=""/>
                     <h1 aria-label={'EmreLutfi FL Studio'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>FL Studio</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emre lutfi website illustrator" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={illustrator} alt=""/>
                     <h1 aria-label={'Emre Lutfi Illustrator'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Illustrator</h1>
                 </div>
                 <div className={'w-[100px] md:w-[150px] sm:w-[100px] lg:w-[250px] sm:h-[55px] h-[55px] flex-col sm:flex-col py-2 md:sm:h-[55px] sm:flex-col py-2 md:h-[50px]  bg-light-bg3 dark:bg-dark-bg3 border-dashed border-[1.92px] border-border2  rounded-lg flex items-center md:flex-row px-2'}>
                     <img alt="emrelutfi website sketch" className={'w-5 md:w-6 sm:w-5 md:h-6 lg:w-9 lg:h-9'} src={sketch} alt=""/>
                     <h1 aria-label={'EmreLutfi Sketch'} className={'text-sm font-text20 md:text-md lg:text-2xl w-full flex items-center justify-center'}>Sketch</h1>
                 </div>
             </div>
         </div>
        </div>
    )
}
 export default Skillstonew