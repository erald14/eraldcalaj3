import ArrowIcon from '../../../components/Icons/ArrowIcon'
import Img from '../../../components/smallComp/image/Img'
export default function AboutMe(props) {
    const technologies = [
        [
            'Product reasearch',
            'Delivery Management',
            'Requirements Gathering',
            'Product Design',
            'Architechture Design',
            'Project Planning'
        ],
        [, 'AWS', 'Terraform', 'Docker', 'Nodejs', 'ReactJs', 'Python']
    ]
    return (
        <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
            {/* // ? 0.1 About Me */}
            <div
                className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
            >
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row  items-center mr-4">
                        <ArrowIcon className={'flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary'} />
                        <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
                        <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
                            About Me
                        </span>
                    </div>
                    <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
                </div>
                {/* // ? Paragraphs */}

                <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
                    <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
                        <div className="font-Header text-justify">
                            <span className="text-gray-400 ">
                                Hello! My name is Erald and I&apos;m a passionate{' '}
                                <span className="text-AAsecondary">software engineer</span> with strong problem-solving
                                skills. My journey in computer science started at 14 years old when I explored apps like
                                Dreamweaver which started my interest in programming. Over the years, I continued to
                                teach myself coding, which led me to pursue an{' '}
                                <span className="text-AAsecondary"> degree in Computer Science</span>
                            </span>
                        </div>
                        <div className="font-Header text-justify">
                            <span className="text-gray-400 ">
                                Throughout my education and career, from my self-learning days to earning my degrees,
                                I&apos;ve gained experience in various industries. I have had the opportunity to work
                                with companies and startups, including <span className="text-AAsecondary">Wemolo</span>,{' '}
                                <span className="text-AAsecondary">Revstar Consulting</span>,{' '}
                                <span className="text-AAsecondary">Quickbird</span>, and many others, including a
                                contract at <span className="text-AAsecondary">Deloitte</span> and other international
                                companies. At
                                <span className="text-AAsecondary">
                                    {' '}
                                    Wemolo , Germany&apos;s 4th fastest growing startup
                                </span>
                                , I led the development of several internal tools, and a low latency, highly available
                                and consistent <span className="text-AAsecondary">authorization system.</span>
                            </span>
                        </div>

                        <div className="font-Header tracking-wide text-justify ">
                            <span className="text-gray-400  ">
                                I&apos;m always interested to keep learning and improve my skills to make a positive
                                impact in the tech world. Here are some of the skills I have aquired during my career :{' '}
                            </span>
                        </div>
                        <div className="font-Header tracking-wide flex flex-row space-x-16  justify-center lg:justify-start">
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                                    {technologies[0].map((tech, index) => {
                                        return (
                                            <div key={index} className="flex flex-row items-center space-x-2">
                                                <ArrowIcon className={'h-3 w-3 text-AAsecondary'} />
                                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                                    {technologies[1].map((tech, index) => {
                                        return (
                                            <div key={index} className="flex flex-row items-center space-x-2">
                                                <ArrowIcon className={'h-3 w-3 text-AAsecondary'} />
                                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // ? Image in Desktop and Tablet */}
                    <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
                        <div
                            className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
                        ></div>

                        <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
                            <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
                            <Img
                                src={'./img/me.png'}
                                className={'object-contain rounded-lg'}
                                alt="My Image Not Found"
                            />
                        </div>
                    </div>
                    {/* // ?Image in Mobile */}
                    <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
                        <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
                        <div className="absolute w-48 h-full rounded overflow-hidden">
                            <Img
                                src={'./img/me.png'}
                                className={'object-contain rounded-lg'}
                                alt="My Image Not Found"
                            />
                        </div>
                        <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
