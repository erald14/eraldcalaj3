import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function Quickbird() {
    const tasks = [
        {
            text: 'Setting up Full Stack Development Environments for Quickbird, A software Agency Based in Munich,Germany.',
            keywords: ['Full Stack Development Environments', 'Quickbird', 'Munich', 'Germany']
        },
        {
            text: 'Set up web Deployment pipelines for the company.',
            keywords: ['web Deployment pipelines']
        },
        {
            text: 'Worked on highly secure and goverment regulated medical Apps. ',
            keywords: ['highly secure', 'goverment regulated', 'medical Apps']
        }
    ]

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Software Engineer <span className="text-AAsecondary">@ Quickbird </span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">Jun 2021 - May 2023</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: '0.6rem' }}
                        // set on click to open the website
                        onClick={() => window.open('https://www.parkdepot.com/', '_blank')}
                    >
                        www.quickbirdmedical.com/en/
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
