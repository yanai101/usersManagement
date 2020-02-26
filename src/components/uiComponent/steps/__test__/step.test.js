import React from 'react';
import { render , fireEvent, cleanup } from '@testing-library/react';

import Step from '../steps';

afterEach(cleanup);

describe("checking steps appearances", ()=>{
    it('not show the steps and next btn', () => {
        const { queryByTestId } = render(<Step />);
        expect(queryByTestId('step_0')).not.toBeTruthy(); //next_step
        expect(queryByTestId('next_step')).not.toBeTruthy();
    });
    
    it('show the steps and disable next btn', () => {
        const { queryByTestId } = render(<Step steps={3} currentStep="1" disableNext={true}/>);
        expect(queryByTestId('step_0')).toBeTruthy();
        expect(queryByTestId('step_1')).toBeTruthy();
        expect(queryByTestId('step_2')).toBeTruthy();
        expect(queryByTestId('next_step').disabled).toBeTruthy();
    });

    it('show the steps and enable next btn', () => {
        const { queryByTestId } = render(<Step steps={3} currentStep="1" disableNext={false}/>);
        expect(queryByTestId('step_0')).toBeTruthy();
        expect(queryByTestId('step_1')).toBeTruthy();
        expect(queryByTestId('step_2')).toBeTruthy();
        expect(queryByTestId('next_step').disabled).toBeFalsy();
    });

})