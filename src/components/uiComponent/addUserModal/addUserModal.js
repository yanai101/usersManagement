import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './formBuilderModal.scss'
import { USERS_TYPE, ACTIONS } from '../../../config/config';
import Steps from '../steps/steps';
import SafeForm from '../forms/safeForm';
import UserForm from '../forms/userFrom';
import { useEffect } from 'react';
import { UsersContext } from '../../../utils/usersReducer';
import AdminForm from '../forms/adminForm';


export default function AddUserModal({show ,toggleVisible , type , userValue = null}) {
  const initFormValue = userValue || {safe: null, password: null, username: null , email: null} ;
  const modalSteps = type === USERS_TYPE.ADMIN ? 3 : 2;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initFormValue);
  const [validFrom ,setValidForm] = useState(false);
  const [disableNext ,setDisableNext] = useState(true);

  const {dispatch} = React.useContext(UsersContext);

  function setFormValue(value){
    setFormData({...formData , ...value});
  }

  useEffect(()=>{

    const formIsValid = formData.email && formData.password && formData.safe && formData.username ? true : false;
    console.log(formIsValid)
    setValidForm(formIsValid);

    step === 1 ? (formData.safe ? setDisableNext(false) : setDisableNext(true)) : setDisableNext(false);
    
    if(USERS_TYPE.ADMIN === type && formIsValid) {
        const adminFormValid =  formData.adminType && formData.adminType.length > 0  ? true : false;
        setValidForm(adminFormValid);
    }
  }, [formData ,step , type])

  const submitForm = ()=>{
    userValue ? dispatch({type: ACTIONS.UPDATE, formData}) : dispatch({type: ACTIONS.ADD, formData});
    console.log('%cSubmit Form' , 'color:green; font-size:2em', formData);
    resetFields();
    toggleVisible();
  }

  function resetFields(){
    setStep(1);
    !userValue && setFormData({safe: null, password: null, username: null , email: null})
  }
    return (
      <>  
        <Modal show={show} onHide={resetFields} data-testid="userModal">
          <Modal.Header>
          <Modal.Title>Add {type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Steps steps={modalSteps} currentStep={step} setStep={setStep} disableNext={disableNext}>
            {step === 1 && <SafeForm setValue={setFormValue} initValue={formData.safe} />}
            {step === 2 && <UserForm setValue={setFormValue} initValue={formData}/> }
            {step === 3 && <AdminForm setValue={setFormValue} initValue={formData.adminType}/> }
          </Steps>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleVisible} data-testid="closeModal">
              Close
            </Button>
            {validFrom && <Button variant="primary" onClick={submitForm}>Submit </Button>}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
