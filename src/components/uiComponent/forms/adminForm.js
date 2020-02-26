import React from 'react';
import Form from 'react-bootstrap/Form';
import {ADMINS_TYPE } from '../../../config/config';

export default function AdminForm({setValue , initValue}){

    function handelChange(event){
        event.persist()
        setValue({adminType:event.target.value});
    }

    return (
        <Form.Group >
            <Form.Label as="legend" colum="true">
                Admin Group
            </Form.Label>
            {
                Object.keys(ADMINS_TYPE).map((key,index)=> 
                <Form.Check
                    onChange={handelChange}
                    key={key}
                    value={key}
                    type="radio"
                    label={ADMINS_TYPE[key]}
                    checked={key === initValue}
                    name="formHorizontalRadios"
                    id={`formHorizontalRadios${index}`}
                />
                )
            }
        </Form.Group>
    )
}