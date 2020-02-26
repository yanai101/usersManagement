import React from 'react';
import style from './app.module.scss';
import { UserProvider } from './utils/usersReducer';
import AppHeader from './components/layoutComponents/header';
import UsersList from './components/uiComponent/userList/userList';
import ActionHeader from './components/uiComponent/actionHeader/actionHeader';
import AddUserModal from './components/uiComponent/addUserModal/addUserModal';
import { USERS_TYPE } from './config/config';

function App() {

  const [showModal , setShowModal] = React.useState(false);
  const [modalType , setModalType] = React.useState(USERS_TYPE.USER);
  const [userData , setUserData] = React.useState(null);

  const closeModal = () => {
    setShowModal(false);
    setUserData(null)
  }

  return (
    <UserProvider>
      <AppHeader/>
      <main className={style.AppContainer} data-testid="mainApp">
        <ActionHeader setModalType={setModalType} setShowModal={setShowModal}/>
        <hr/>
        <UsersList setShowModal={setShowModal} setUserData={setUserData} setModalType={setModalType}/>
      </main>
      {showModal && <AddUserModal show={showModal} toggleVisible={closeModal} type={modalType}  userValue={userData}/>}
    </UserProvider>
  );
}

export default App;
