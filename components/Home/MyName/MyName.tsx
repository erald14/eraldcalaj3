import { useRouter } from 'next/router'
import { motion } from '../../../node_modules/framer-motion/dist/framer-motion'
export default function MyName(props: { finishedLoading: boolean }) {
    const router = useRouter()
    return (
        <div
            className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
        >
            <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
                    y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 }
                }}
                className="text-AAsecondary font-mono"
            >
                Hi, my name is
            </motion.span>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
                    y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 }
                }}
                className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
            >
                Erald Calaj.
            </motion.h1>
            <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
                    y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 }
                }}
                className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
            >
                I research, design, and develop software solutions.
            </motion.h2>

            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
                    y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 }
                }}
                className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider "
            >
                I&apos;m a <span className="text-AAsecondary">software engineer</span> with strong{' '}
                <span className="text-AAsecondary">problem-solving skills</span>, deeply passionate about{' '}
                <span className="text-AAsecondary">product research</span> and{' '}
                <span className="text-AAsecondary">architecture design</span>.
                <br className="3xl:block hidden" /> I excel in both <span className="text-AAsecondary">front-end</span>{' '}
                and <span className="text-AAsecondary">back-end development</span>, working with an array of
                technologies including <span className="text-AAsecondary">AWS</span> and traditional web applications.
                <br className="3xl:block hidden" /> I thrive on tackling complex projects that spark{' '}
                <span className="text-AAsecondary">innovation</span> and yield top-tier results.
                <br className="3xl:block hidden" /> My experience leading development teams has sharpened my ability to
                collaboratively turn ideas into tangible, functional solutions.
                <br className="3xl:block hidden" /> I&apos;m excited to bring my expertise in product and architecture
                design to innovative projects that push the boundaries of technology.
            </motion.h3>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
                    y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 }
                }}
                className="mt-12"
            >
                <a href={'./resume.pdf'} target={'_blank'} rel="noreferrer">
                    <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
                        Check out my resume!
                    </button>
                </a>
            </motion.div>
        </div>
    )
}
