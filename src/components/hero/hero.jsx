import React from 'react';
import './hero.css';
import { TbLocation } from 'react-icons/tb';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
import { TfiHome } from "react-icons/tfi";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <TfiHome className="orange-circle"/>
                        <motion.h1
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 2,
                          type: "ease-in",
                        }}
                        >
                            Luxury Living <br/> Starts Here <br/>with <span>Livora</span> 
                        </motion.h1>
                    </div>
                    <div className="secondaryText flexColStart hero-des">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <TbLocation color="var(--blue)" size={25}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div 
                    className="image-container"
                    initial={{ x: "7rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "ease-in",
                    }}
                    >
                        <img src="./imghero.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Hero;