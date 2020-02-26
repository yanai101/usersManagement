import React from 'react';
import Button from 'react-bootstrap/Button';
import * as style from './steps.module.scss';

function Steps({steps = 0 , currentStep = 0 ,setStep, children , disableNext}) {
    
    const stepsView = Array.from(Array(steps), (i, index) => 
            <span key={index} data-testid={`step_${index}`} className={ index + 1  === currentStep ? style.activeStep : ''} onClick={()=>setStep(index+1)}> {index + 1} </span>
    ) 
    
    return (
        <div className={style.steps}>
            <div data-testid="steps">
                {stepsView}
            </div>
            <main>
                {children}
            </main>
            <nav>
                {currentStep !== 1 && <Button variant="info" data-testid="back_step" className={style.navigationLeft} onClick={()=>setStep(--currentStep)}>Back</Button>}
                {currentStep !== steps && <Button variant="info" data-testid="next_step" disabled={disableNext} className={style.navigationRight} onClick={()=>setStep(++currentStep)}>Next</Button>}
            </nav>
        </div>
    );
}

export default Steps;