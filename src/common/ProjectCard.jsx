import React from 'react';
import styles from './ProjectCard.module.css';
import { useTheme } from './ThemeContext';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';

function ProjectCard({ src, link, title, description, technologies }) {
  const { theme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <a href={link} className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`} target="_blank" rel="noopener noreferrer">
      <div className={styles.header}>
        <img src={src} alt={`${title} Logo`} className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.technologies}><i className="fas fa-tools"></i> {technologies}</span>
      </div>
      <div className={styles.githubIcon}>
        <img src={githubIcon} alt="GitHub logo" className={styles.githubImage} />
      </div>
    </a>
  );
}

export default ProjectCard;