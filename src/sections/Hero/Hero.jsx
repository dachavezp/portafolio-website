import styles from './HeroStyles.module.css'
import heroImg from '../../assets/foto de perfil.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/gmail.png'
import twitterDark from '../../assets/gmail.png'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin.png'
import linkedinDark from '../../assets/linkedin.png'
import resume from '../../assets/Resume David Chavez BU SPARK.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id = "Hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className = {styles.hero}
            src={heroImg} 
            alt="Arturo Chavez"/>
            <img src={themeIcon} alt='Theme icon' className={styles.colorMode} onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Arturo
                <br/>
                Chavez
            </h1>
            <h2>Data Analyst</h2>
            <span>
                <a href='mailto:darturo.chavez@gmail.com' target='_blank'>
                    <img src={twitterIcon} alt='Email icon'/>
                </a>
                <a href='https://github.com/dachavezp' target='_blank'>
                    <img src={githubIcon} alt='Github icon'/>
                </a>
                <a href='https://www.linkedin.com/in/darturochavezp/' target='_blank'>
                    <img src={linkedinIcon} alt='LinkedIn icon'/>
                </a>
            </span>
            <p className={styles.description}>
                With a commitment to innovation, I harness the power of AI and data science to drive transformative change.
            </p>
            <a href={resume} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero