'use client';

import {motion} from 'framer-motion';

import {navVariants} from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        {/* Background gradient */}
        <div className="absolute left-1/4 w-[40%] inset-0 gradient-01"/>

        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
            <img
                src="/search.svg"
                alt="search"
                className="w-[1.5rem] h-[1.5rem] object-contain"
            />

            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
                METAVERSUS
            </h2>

            <img
                src="/menu.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
            />
        </div>

    </motion.nav>
);

export default Navbar;
