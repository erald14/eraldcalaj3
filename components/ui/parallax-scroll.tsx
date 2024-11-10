'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '../lib/utils'

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
    const gridRef = useRef<any>(null)
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ['start start', 'end start']
    })

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

    const third = Math.ceil(images.length / 3)

    const firstPart = images.slice(0, third)
    const secondPart = images.slice(third, 2 * third)
    const thirdPart = images.slice(2 * third)

    return (
        <div className={cn('h-screen items-start overflow-y-auto w-full', className)} ref={gridRef}>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-10"
                ref={gridRef}
            >
                <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div style={{ y: translateFirst }} key={'grid-1' + idx}>
                            <Image
                                src={el}
                                className="aspect-[16/9] w-full object-cover object-center rounded-lg !m-0 !p-0"
                                height="720"
                                width="1280"
                                alt="aerial drone shot"
                                // loading="lazy"
                                // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
                            <Image
                                src={el}
                                className="aspect-[16/9] w-full object-cover object-center rounded-lg !m-0 !p-0"
                                height="720"
                                width="1280"
                                alt="aerial drone shot"
                                // loading="lazy"
                                // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
                            <Image
                                src={el}
                                className="aspect-[16/9] w-full object-cover object-center rounded-lg !m-0 !p-0"
                                height="720"
                                width="1280"
                                alt="aerial drone shot"
                                // loading="lazy"
                                // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
