/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/image/site/adi.JPG"
                    alt="Aditya's pic"
                    width={500}
                    height={500}
                />
            </div>
            <h1>Hi, I'm Aditya</h1>
            <p>
                I blog about web development - especially frontend frameworks
                like Angular or React.
            </p>
        </section>
    );
};

export default Hero;
