import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function Horizont() {
    const tasks = [
        {
            text: 'Developed the FITSQD fitness platform using React Native and NodeJS, enhancing user experience and backend functionality.',
            keywords: ['FITSQD', 'React Native', 'NodeJS']
        },
        {
            text: 'Created a blockchain mobile client with React Native and TypeScript, implementing secure and efficient cryptocurrency transactions.',
            keywords: ['blockchain', 'React Native', 'TypeScript']
        },
        {
            text: 'Built resource management dashboards with ReactJS, improving operational efficiency and data visualization.',
            keywords: ['resource management dashboards', 'ReactJS']
        },
        {
            text: 'Mentored development team members, fostering skill growth and promoting best practices in software development.',
            keywords: ['mentored', 'development team']
        }
    ]

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Software Engineer <span className="text-AAsecondary">@ Horizont labs </span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">Jul 2019 - Jun 2020</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: '0.6rem' }}
                        onClick={() => window.open('https://www.linkedin.com/company/horizontlabs/about/', '_blank')}
                    >
                        www.horizontlabs.com/
                    </span>
                </div>
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                    {/* Tasks Description */}
                    {tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row space-x-1">
                                <ArrowIcon className={' h-5 w-4 text-AAsecondary flex-none'} />
                                <span
                                    className="text-gray-500 sm:text-sm text-xs"
                                    dangerouslySetInnerHTML={{
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords)
                                    }}
                                ></span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
