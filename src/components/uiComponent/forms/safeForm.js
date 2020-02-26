import React from 'react';
import Form from 'react-bootstrap/Form';
import { SAFES } from '../../../config/config';

export default function SafeForm({setValue , initValue}){

    function handelChange(event){
        event.persist()
        setValue({safe:event.target.value});
    }

    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Safe</Form.Label>
            <Form.Control as="select" onChange={handelChange} data-testid="safes" defaultValue={initValue}>
                {SAFES.map(safe => <option key={safe} value={safe}>{safe}</option>)}
            </Form.Control>
        </Form.Group>
    )
}