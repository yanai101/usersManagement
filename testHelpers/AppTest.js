import React from 'react';
import { fireEvent, waitForElement, waitForDomChange, waitForElementToBeRemoved } from '@testing-library/react';
import { SAFES } from '../src/config/config';

export async function openModal(getByTestId , modalType){
    const appContener = getByTestId("mainApp");
    const createModalBtn = getByTestId(modalType);
    const createUser = getByTestId('test_USER');
    
    fireEvent.click(createModalBtn);
    await waitForElement(()=>getByTestId('userModal'));
    const userModal = getByTestId('userModal');
    return {userModal , createModalBtn , appContener }
}

export async function closeModal(getByTestId){
    fireEvent.click(getByTestId('closeModal')); 
}

export function createUSerModal(){
    const appContener = getByTestId("mainApp");
    const createAdmin = getByTestId('test_ADMIN');
    const createUser = getByTestId('test_USER');
}

export function selectSafe(getByTestId , getByText){
    const safes = getByTestId('safes');
    const safeText = SAFES[Math.floor(Math.random()*SAFES.length)];
    const selectedSafe = getByText(safeText);
    return {safes ,safeText , selectedSafe}
}