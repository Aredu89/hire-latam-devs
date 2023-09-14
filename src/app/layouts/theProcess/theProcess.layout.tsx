import React from 'react';

import styles from './theProcess.module.css';
import { StepSize } from '@/app/types/enums';
import { Step } from '@/app/components';
import { stepProps } from '@/app/components/step/step.types';

const steps = [
  {
    number: '01',
    title: 'Kick-Off',
    description: 'A detailed kick-off process to really understand your needs down to hard skills, soft skills and culture fit.',
    size: StepSize.S
  },
  {
    number: '02',
    title: 'Profiles',
    description: 'Start receiving resumes of world-class LATAM developers.',
    size: StepSize.M
  },
  {
    number: '03',
    title: 'Interview',
    description: 'Meet the developers of your interest following your interviewing process.',
    size: StepSize.L
  },
  {
    number: '04',
    title: 'Hire',
    description: 'Hire candidates using us as an EOR (employer of record). We will help you find the right developers and provide expert support every step of the way.',
    size: StepSize.XL
  }
] as Array<stepProps>;

const TheProcess = () => {
  return <div id='process' className={styles.processContainer}>
    <h1>The process</h1>
    <div className={styles.stepsContainer}>
      {
        steps.map(({number, title, description, size}, indx) => (
          <Step
            key={`process-step-${indx}`}
            number={number}
            title={title}
            description={description}
            size={size}
          />
        ))
      }
    </div>
  </div>
};

export default TheProcess;