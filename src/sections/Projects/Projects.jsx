
import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import boatCompet from '../../assets/banking.jpg';
import harmonyland from '../../assets/health.jpg';
import outlier from '../../assets/taxi.jpeg';
import food from '../../assets/MKTCAMPAING.jpeg';
import reactPortfolio from '../../assets/react_project.png';
import ocr from '../../assets/ocr.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={food} 
          link={"https://risk-app-gr4a9rof2tb2nhzztetwxk.streamlit.app/#arturo-chavez-risk-score-analyzer"}
          title={"RISK PRECICTOR APP"}
          description={"This project predicts the risk of lending moneydetailed analysis of a bank's marketing campaign data."}
          technologies={"Python, scikit-learn, streamlit"}
        />
        <ProjectCard 
          src={boatCompet} 
          link={"https://github.com/dachavezp/Banking_analysis_and_modeling"}
          title={"Churn Analysis"}
          description={"Analysis of customer turnover in the banking industry, use of machine learning model to predict and reduce attrition."}
          technologies={"pandas, numpy, scikit-learn, matplotlib"}
        />
        <ProjectCard 
          src={harmonyland} 
          link={"https://github.com/dachavezp/PREDICTIVE-DISEASE-MACHINE-LEARNING-MODEL-FOR-EFFECTIVE-HEALTH-INSURANCE-MANAGEMENT"}
          title={"Cancer Detection"}
          description={" This project aims to predict the likelihood of new patients developing cancer, based on their health features"}
          technologies={"R, Caret, Rpart,e1071,xgboost,nnet"}
        />
        <ProjectCard 
          src={outlier} 
          link={"https://github.com/dachavezp/Cab-Analytics-Peak-Performance-Insights"}
          title={"Cab Analytics Insights"}
          description={"This project analyzes Uber's demand and supply gaps, identifies peak times, busiest shifts, driver scheduling, and evaluates key trends over a two-week period."}
          technologies={"Python, Scikit-learn, TensorFlow, matplotlib"}
        />
        <ProjectCard 
          src={food} 
          link={"https://github.com/dachavezp/Analysis-of-marketing-campaigns-in-the-banking-Industry"}
          title={"Marketing Campaings"}
          description={"This project contains a detailed analysis of a bank's marketing campaign data."}
          technologies={"R, dplyr, ggplot2"}
        />
      </div>
    </section>
  );
}

export default Projects;
