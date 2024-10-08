import { useRouter } from 'next/router'
import ArrowIcon from '../../Icons/ArrowIcon'
import ExternalLink from '../../Icons/ExternalLink'
import GithubIcon from '../../Icons/GithubIconForSomethingIveBuild'
import Img from '../../smallComp/image/Img'

const ProjectCard = ({ project, isReverse = false }) => {
    const router = useRouter()

    return (
        <div
            data-aos="fade-up"
            className={`relative md:grid md:grid-cols-12 w-full md:h-96 ${isReverse ? '' : 'md:order-2 mb-24'}`}
        >
            {/* Image */}
            <div
                className={`hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center ${
                    isReverse ? 'col-start-6' : ''
                }`}
            >
                <div
                    className={`relative rounded w-full h-full ${isReverse ? 'col-span-7' : 'col-start-6 col-span-7'}`}
                >
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
                    </a>
                    {project.inProgress && (
                        <div className="absolute px-2 bg-AAprimary rounded ml-4 mt-2">
                            <span className="text-AAsecondary text-xl">In initiation...</span>
                        </div>
                    )}
                    <Img src={project.image} alt="Project Screenshot" className="w-full rounded h-full aspect-square" />
                </div>
            </div>

            {/* Content */}
            <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
                <div className="absolute w-full h-full bg-opacity-70 z-0">
                    <div className="relative w-full h-full">
                        <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                        <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                        <Img src={project.image} alt="Project Screenshot" className="w-full h-full" />
                    </div>
                </div>

                <div
                    className={`px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 ${
                        isReverse ? 'xl:col-start-7 col-start-5' : ''
                    } col-span-8 flex flex-col items-start ${isReverse ? 'md:items-end' : ''} space-y-3`}
                >
                    <div className={`flex flex-col space-y-1 ${isReverse ? 'md:items-end' : ''} z-10`}>
                        <span className="text-AAsecondary text-base">Recent Project</span>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                                {project.title}
                            </span>
                        </a>
                    </div>
                    <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                        <p
                            className={`text-gray-300 md:text-gray-400 text-left ${isReverse ? 'md:text-right' : ''}`}
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        ></p>
                    </div>
                    <ul
                        className={`flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 ${
                            isReverse ? 'md:justify-end' : ''
                        }`}
                    >
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="pr-4 z-10">
                                {tech}
                            </span>
                        ))}
                    </ul>
                    <div className="z-10 flex flex-row space-x-5">
                        {project.github && <GithubIcon link={project.github} />}
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <ExternalLink url="" router={router} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SomethingIveBuilt() {
    const projects = [
        {
            title: 'Mamly',
            description: `At <span class='text-AAsecondary'>Quickbird</span>, I played a crucial role in developing this app which in collaboration with <span class='text-AAsecondary'>TK insurance</span> helped thousands of post-natal mothers to recover from childbirth on the psychological level. `,
            image: './img/mamly1.png',
            link: 'https://www.mamly.de',
            technologies: ['Docker', 'NestJS', 'ReactJS', 'Flutter']
        },
        {
            title: 'Parliament Landing Page',
            description: `While developing  <span class='text-AAsecondary'>Official Albanian Parliament </span> page, I was essential in requirement gathering, website design and implementation and creating a well defined ODATA interface with the rest of the system. `,
            image: './img/parlament.png',
            link: 'https://www.parlament.al',
            technologies: ['React', 'ASP.NET', 'C#', 'Redux']
        }
        // {
        //     title: 'Parliament Landing Page',
        //     description: `While developing  <span class='text-AAsecondary'>Official Albanian Parliament </span> page, I was essential in requirement gathering, website design and implementation and creating a well defined ODATA interface with the rest of the system. `,
        //     image: './img/parlament.png',
        //     link: 'https://www.parlament.al',
        //     technologies: ['React', 'ASP.NET', 'C#', 'Redux']
        // }

        // Add other projects here...
    ]

    return (
        <div
            id="SomethingIveBuiltSection"
            className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 pb-12"
        >
            {/* Title */}
            <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
                <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
                <div className="flex-none flex-row space-x-2 items-center pr-2">
                    <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 03.</span>
                    <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
                        Some Things I&apos;ve Built
                    </span>
                </div>
                <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
            </div>

            <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} isReverse={true} />
                ))}
            </div>
        </div>
    )
}
