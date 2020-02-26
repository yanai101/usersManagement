import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { UsersContext } from "../../../utils/usersReducer";
import { USERS_TYPE } from "../../../config/config";
import * as style from './userList.module.scss'


function UsersList({setShowModal ,setUserData , setModalType }) {
    const {userState} = React.useContext(UsersContext);

    function handelUpdate(user, index){
        setUserData({...user , index});
        setModalType(user.adminType ? USERS_TYPE.ADMIN : USERS_TYPE.USER)
        setShowModal(true);
    }


    return (
        <>
            <ListGroup>
                {
                userState.map((user, index)=> <ListGroup.Item key={index}>{user.username} 
                                                <Button className={style.btnFloat} variant="info" onClick={()=>handelUpdate(user , index)}>Edit</Button>
                                            </ListGroup.Item>)
                }
            </ListGroup>
        </>
    );
}

export default UsersList;
