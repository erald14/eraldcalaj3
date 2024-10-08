import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function RevstarConsulting() {
    const tasks = [
        {
            text: 'Consulted various startups in the medical industry, designing solutions including frontend , backend and AWS.',
            keywords: ['medical industry', 'frontend', 'backend', 'AWS']
        },
        {
            text: 'Handling client requirements and change requests',
            keywords: ['client requirements']
        },
        {
            text: 'Lead a internaltional team of 8 developers.',
            keywords: ['8 developers']
        },
        {
            text: 'Designing and implementing scalable , efficient HIPPA  software solutions.',
            keywords: ['HIPPA']
        }
    ]

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Team Lead <span className="text-AAsecondary">@Revstar Consulting</span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">Jul 2020 - Jun 2021</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: '0.6rem' }}
                        onClick={() => window.open('https://www.revstarconsulting.com/', '_blank')}
                    >
                        www.revstarconsulting.com
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
