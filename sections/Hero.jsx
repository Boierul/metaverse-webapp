'use client';

import {motion} from 'framer-motion';

import styles from '../styles';
import {slideIn, staggerContainer, textVariant, textVariantHollow} from '../utils/motion';

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >

            <div className="text-hollow flex justify-center items-center flex-col relative z-10">
                <motion.h1
                    variants={textVariantHollow(0.2)}
                    className={styles.heroHeadingHollow}
                >
                    Metaverse
                </motion.h1>

                <motion.div
                    variants={textVariant(0.3)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}>Ma</h1>
                    <div className={styles.heroDText}/>
                    <h1 className={styles.heroHeading}>Ness</h1>
                </motion.div>
            </div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[20px] -mt-[12px]"
            >
                <div className="absolute w-full h-[400px] hero-gradient rounded-tl-[140px] z-[0] -top-[20rem]"/>

                <img
                    src="/cover.png"
                    alt="hero_cover"
                    className="w-full sm:h-[420px] object-cover rounded-tl-[140px] z-10 relative -top-[9rem] border-4 border-y-purple-500 border-x-indigo-500"
                />

                <a href="#explore">
                    <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 -top-[11rem]">
                        <img
                            src="/stamp.png"
                            alt="stamp"
                            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                        />
                    </div>
                </a>

            </motion.div>

        </motion.div>
    </section>
);

export default Hero;
