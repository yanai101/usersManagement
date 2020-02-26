import React from "react";
import { USERS_TYPE } from "../../../config/config";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


function ActionHeader({setShowModal , setModalType}) {
    
    function openModal(type){
        setModalType(USERS_TYPE[type]);
        setShowModal(true);
    }

    return (
        <>
            <ButtonGroup>
                {
                Object.keys(USERS_TYPE).map(type => 
                    <Button data-testid={`test_${type}`} variant="secondary" key={type} onClick={()=> openModal(type)}>Add {USERS_TYPE[type]}
                    </Button>)
                }
            </ButtonGroup>
        </>
    );
}

export default ActionHeader;
