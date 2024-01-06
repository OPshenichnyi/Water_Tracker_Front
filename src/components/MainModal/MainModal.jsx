import ReactDOM from 'react-dom';
import React from 'react';
import { Content, Modal } from './MainModal.styled';

const MainModal = ({ active, setActive, children }) => {
  return ReactDOM.createPortal(
    
    <Modal className={active ? 'active' : ''} onClick={() => setActive(false)}>
      <Content onClick={e => e.stopPropagation()}>
        {children}
      </Content>
    </Modal>,

    document.getElementById('modal')
  );
};

export default MainModal;
