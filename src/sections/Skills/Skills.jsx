
import styles from './SkillsStyles.module.css';
import pythonIcon from '../../assets/python-icon.svg';
import rIcon from '../../assets/r-icon.svg';
import sqlIcon from '../../assets/sql.png';
import cppIcon from '../../assets/cpp-icon.svg';
import nlpLight from '../../assets/powerbi.png';
import nlpDark from '../../assets/tableu.png';
import dataVizIcon from '../../assets/plot.png';
import mlIcon from '../../assets/librerias.png';
import dlIcon from '../../assets/deep-learning-icon.png';
import huggingIcon from '../../assets/powerbi.png';
import hadoopIcon from '../../assets/tableu.png';
import awsIcon from '../../assets/aws-icon.svg';
import sparkIcon from '../../assets/alteryx.png';
import kafkaIcon from '../../assets/azure.png';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
  const {theme, toggleTheme} = useTheme();
  const skillsData = [
    { icon: pythonIcon, title: 'Python' },
    { icon: mlIcon, title: 'Scikit-Learn, Numpy, Pandas, Polars, Seaborn, Matplotlib' },
    { icon: rIcon, title: 'R' },

    { icon: sqlIcon, title: 'SQL' },
    { icon: cppIcon, title: 'C++' },

    { icon: huggingIcon, title: 'Power BI' },
    { icon: hadoopIcon, title: 'Tableau' },
    { icon: sparkIcon, title: 'Alteryx' },
    { icon: awsIcon, title: 'AWS' },

    { icon: kafkaIcon, title: 'Azure' },
  ];
  return (
    <section id='skills' className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillsGrid}>
        {skillsData.map(skill => (
          <div key={skill.title} className={styles.skillCard}>
            <img src={skill.icon} alt={`${skill.title} icon`} className={styles.skillIcon} />
            <h3 className={styles.skillTitle}>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
