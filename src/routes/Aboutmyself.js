import '../App.css'
import Hover3D from "./hover3D";

const Aboutmyself = () => {
    let myHover3D = new Hover3D(".card"); // Yep! That's it.

    return(
        <>
            <div className={'flex flex-col gap-8'}>
                <div className="card">
                <div className={'w-full bg-light-bg3  pb-4 dark:bg-dark-bg3 rounded-[15px] border-[2.05px] border-dashed  border-border1 flex flex-col justify-start items-center'}>
                       <div className={'flex justify-center items-center flex-col mt-1'}>
                           <h1 aria-label={'EmreLutfi Who'} className={'font-text11 text-light-text2 text-2xl dark:text-dark-text1'}>
                               WHO AM I
                           </h1>
                           <h2 aria-label={'EmreLutfi About Me'} className={'font-text12 w-[95%] text-light-text3 -mt-2 dark:text-dark-text2'}>
                               Hello, I'm EmreLutfi and I'm 19 years old. I'm currently studying software engineering and consider myself a dedicated and skilled team player. My software development journey began with HTML and then I spent months improving my skills in CSS, waiting for JavaScript to challenge me like a piece of iron. After some time with JavaScript, I found myself drawn to the vast capabilities of React. I love learning new things and take pleasure in following foreign/Turkish documentation to expand my knowledge. In addition to software development, I'm also interested in UI/UX design and enjoy looking at website designs on a daily basis. Outside of work, my hobbies include creating 2D drawings using Aseprite.
                           </h2>
                       </div>
                </div>
                </div>
                <div className="card">
                <div className={'w-full bg-light-bg3  pb-4 dark:bg-dark-bg3 rounded-[15px] border-[2.05px] border-dashed  border-border1 flex flex-col justify-start items-center'}>
                    <div className={'flex justify-center items-center flex-col mt-1'}>
                        <h1 aria-label={'Emre Lutfi kim'} className={'font-text11 text-light-text2 text-2xl dark:text-dark-text1'}>
                            SOME SALT OF ABOUT ME
                        </h1>
                        <h2 aria-label={'Emre Lutfi Hakkında'} className={'font-text12 w-[95%] text-light-text3 -mt-2 dark:text-dark-text2'}>
                            I've always loved tinkering with things. I generally adapt to any environment and skill. Software represents my brain and design represents my imagination. I like to learn new things and meet people. Every person means new ideas, opens doors for me. Of course, the important thing is not to close those doors                </h2>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className={'w-full bg-light-bg3  pb-4 dark:bg-dark-bg3 rounded-[15px] border-[2.05px] border-dashed  border-border1 flex flex-col justify-start items-center'}>
                    <div className={'flex justify-center items-center flex-col mt-1'}>
                        <h1 aria-label={'Emre Lutfi Favorite Songs'} className={'font-text11 text-light-text2 text-2xl dark:text-dark-text1'}>
                            MY FAVORITE SONGS
                        </h1>
                        <h2 aria-label={'Emre Lutfi Favori Sarkilari'} className={'font-text12 w-[95%] text-light-text3 -mt-2 dark:text-dark-text2'}>
                            What we watch sometimes affects us, it is evident in our subconscious or in our thoughts. Movies and serials have always been a source of inspiration for me. I am influenced by what I watch
                        </h2>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}
export default Aboutmyself