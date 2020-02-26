import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { debounce, isValidPassword, isValidEmail } from '../../../utils/utils';

export default function UserForm({setValue , initValue}){
    const [nameValid ,setNameValid] = useState(true);
    const [emailValid ,setEmailValid] = useState(true);
    const [passwordValid ,setPasswordValid] = useState(true);

    const handelNameChange = debounce((value)=> {
        value.length === 0 ? setNameValid(false): setNameValid(true);
        setValue({username : value});
    }, 100);

    const handelEmailChange = debounce((value)=> {
        const valid = isValidEmail(value);
        setEmailValid(valid);
        setValue({ email: valid ? value : null});
    }, 100);

    const checkPassword = debounce((value)=>{
        const valid = isValidPassword(value);
        setPasswordValid(valid);
        setValue({password: valid ? value : null}) 
    }, 100) 

    return (
        <Form.Group controlId="exampleForm.ControlSelect1" data-testid="userForm">
            <Form.Group controlId="formName">
                <Form.Label>User name</Form.Label>
                <Form.Control 
                    isInvalid ={!nameValid}
                    type="text" 
                    maxLength="60" 
                    onChange={(e)=>handelNameChange(e.target.value)}
                    defaultValue={initValue.username} 
                    placeholder="Enter User name"/>
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                isInvalid={!emailValid} 
                onChange={(e)=>handelEmailChange(e.target.value)} 
                defaultValue={initValue.email}
                placeholder="Enter email" 
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                isInvalid={!passwordValid} 
                type="password" 
                defaultValue={initValue.password} 
                onChange={(e)=>checkPassword(e.target.value)} 
                placeholder="Password" />
            </Form.Group>
        </Form.Group>
    )
}