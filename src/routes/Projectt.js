import Hover3D from "./hover3D";


const Projectt = (props) => {
    let myHover3D = new Hover3D(".card"); // Yep! That's it.


    const {title, projectName, projectDesc,projectTag,extraProjectName} = props
    return(
            <div className={'card butonsgroup pl-6 md:pl-6  sm:pb-6 bg-light-bg3 relative lg:w-[421px] md:w-[370px] sm:h-[150%] sm:relative lg:scale-100 md:scale-100 whitespace-nowrap md:h-full dark:bg-dark-bg3 pb-20 rounded-[14px] border-[1.92px] border-dashed border-border1 sm:pl-[20px] md:pl-[34.5px]'}>
                <div className={'flex flex-row items-center gap-2'}>
                    <h1 aria-label={'EmreLutfi Project Title'} className={'text-light-text2 font-text7 text-2xl dark:text-dark-text1'}>
                        {title}
                    </h1>
                    <h2 aria-label={'EmreLutfi About github,medium,behance,dribbble'} className={'font-text8 text-light-text6 pr-8'}>{projectTag}</h2>
                    <div className={'butons cursor-pointer select-none bg-light-bg4 w-[166px]  hidden sm:absolute sm:bottom-6 md:bottom-0 sm:text-center md:relative  h-[34px] rounded-[20px] -ml-4 mr-12  md:flex justify-center items-center'}>
                        <h2 aria-label={'EmreLutfi Project Button'} className={'font-text13 px-4 sm:-mt-2 md:mt-0 text-white text-2xl dark:text-light-text8'}>
                            CLICK
                        </h2>
                    </div>
                </div>
                <h3 aria-label={'EmreLutfi Project Name'} className={'font-text9 text-light-text7 -mt-1 '}>{projectName}</h3>
                <h3 aria-label={'EmreLutfi Project altName'} className={'font-text9 text-light-text7 mt-1 '}>{extraProjectName}</h3>
                <h4 aria-label={'EmreLutfi Desc'} className={'font-text9 text-light-text2 w-full whitespace-pre-wrap text-xs pt-2 dark:text-dark-text1'}>
                    {projectDesc}
                </h4>
                <div aria-label={'EmreLutfi Project altButton'} className={'bg-light-bg4 w-[166px] cursor-pointer flex text-center absolute  bottom-4 left-10 md:hidden  sm:text-center h-[34px] rounded-[20px]   justify-center items-center'}>
                    <h2 className={'font-text13 select-none align-middle text-center  md:mt-0 text-white text-2xl dark:text-light-text8'}>
                        CLICK
                    </h2>
                </div>

            </div>
    )
}
export default Projectt