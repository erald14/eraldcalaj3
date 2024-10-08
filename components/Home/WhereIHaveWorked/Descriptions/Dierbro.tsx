import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function Dierbro() {
    const tasks = [
        {
            text: 'Developed a comprehensive ERP application client using React JS for web and React Native for mobile platforms.',
            keywords: ['ERP application', 'React JS', 'React Native']
        },
        {
            text: 'Implemented advanced performance optimization techniques to ensure smooth operation of the large-scale application.',
            keywords: ['performance optimization', 'large-scale application']
        },
        {
            text: 'Designed and implemented a scalable client architecture to support the complex requirements of the ERP system.',
            keywords: ['scalable client architecture', 'ERP system']
        },
        {
            text: 'Collaborated with cross-functional teams to integrate various modules of the ERP system, ensuring seamless data flow and user experience.',
            keywords: ['cross-functional teams', 'integrate modules']
        }
    ]

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Frontend Engineer <span className="text-AAsecondary">@ Dierbro</span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">Oct 2018 - Jul 2019</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: '0.6rem' }}
                        onClick={() => window.open('https://www.dierbro.it/', '_blank')}
                    >
                        www.dierbro.it
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
