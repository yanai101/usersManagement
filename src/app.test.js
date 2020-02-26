import React from 'react';
import ReactDOM from 'react-dom';
import { render , fireEvent, cleanup, waitForElement, waitForDomChange, waitForElementToBeRemoved } from '@testing-library/react';

import App from './App';
import { closeModal, openModal, selectSafe } from '../testHelpers/AppTest';
const ADMIN_MODAL = 'test_ADMIN';
const USRE_MODAl = 'test_USER';


afterEach(cleanup);

describe("Main app", ()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('App is loaded with defualt children', () => {
        const  {getByTestId , getByText} = render(<App/>);
        const appContener = getByTestId("mainApp");
        expect(appContener.children.length).toBe(3); 
    });
    
    it('open admin model and close it', async() => {
        const  {getByTestId , getByText} = render(<App/>);
        const  {userModal , createModalBtn , appContener} = await openModal(getByTestId , ADMIN_MODAL);
        expect(createModalBtn).toBeTruthy();
        expect(getByTestId('steps').children.length).toBe(3);
    
        await closeModal(getByTestId);
        expect(userModal).not.toBeInTheDocument();
        expect(appContener.children.length).toBe(3);

    });

    it('open user model', async() =>{
        const  {getByTestId , getByText} = render(<App/>);
        const  {userModal , createModalBtn , appContener} = await openModal(getByTestId , USRE_MODAl);
        expect(createModalBtn).toBeTruthy();
        expect(getByTestId('steps').children.length).toBe(2);
        await closeModal(getByTestId);
        expect(userModal).not.toBeInTheDocument();
        expect(appContener.children.length).toBe(3);
    })
})

describe("Modal behvior",()=>{
    
    it('open user model and next btn is disable till select safe', async() => {
        const  {getByTestId , getByText} = render(<App/>);
        await openModal(getByTestId ,USRE_MODAl);

        const nextBtn = getByTestId('next_step');
        const {safeText , safes , selectedSafe}  = selectSafe(getByTestId, getByText);
        expect(nextBtn.disabled).toBeTruthy();
        expect(nextBtn).toHaveAttribute('disabled');
        expect(selectedSafe).toBeInTheDocument();
        fireEvent.change(safes, { target: { value: selectedSafe } })
        expect(nextBtn.disabled).toBeFalsy();
    });

    it('open user model and move next and back', async() => {
        const  {getByTestId , getByText} = render(<App/>);
        await openModal(getByTestId ,USRE_MODAl);

        const nextBtn = getByTestId('next_step');
        const {safes, selectedSafe}  = selectSafe(getByTestId, getByText);
        expect(safes).toBeInTheDocument();
        fireEvent.change(safes, { target: { value: selectedSafe } });
        fireEvent.click(nextBtn);
        expect(safes).not.toBeInTheDocument();
        expect(nextBtn).not.toBeInTheDocument();
        const backBtn = getByTestId('back_step');
        const userForm = getByTestId('userForm');
        expect(backBtn).toBeInTheDocument();
        expect(userForm).toBeInTheDocument();

        fireEvent.click(backBtn);
        expect(backBtn).not.toBeInTheDocument();
        expect(userForm).not.toBeInTheDocument();
        expect(getByTestId('safes')).toBeInTheDocument();
    });

})