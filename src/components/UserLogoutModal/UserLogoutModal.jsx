import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperationApi";
import { CancelButton, Container, CloseButton, Close , LogOutButton, LogOutContainer, LogOutText, LogOutTextSecond, ButtonsContainer, Modal, Overlay,  } from "./UserLogoutModal.styles";

 const LogOut = ({ backdropClick, close }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
      const handleKeydown = e => {
    if (e.code === 'Escape') {
        close()
      }
    }

    window.addEventListener('keydown', handleKeydown)
    
    return () => {
    window.removeEventListener('keydown', handleKeydown)
    }
}, [close])

    return (
        <Overlay id="logout" onClick={backdropClick}>
            <Modal>
                <Container>
                <LogOutContainer>
                    <LogOutText>Log out</LogOutText>
                    <CloseButton type="button" onClick={close}><Close /></CloseButton>
                </LogOutContainer>
                    <LogOutTextSecond>Do you really want to leave?</LogOutTextSecond>
                    <ButtonsContainer>
                        <LogOutButton type="submit" onClick={() => {dispatch(logOut()); close()}}>Log out</LogOutButton>
                    <CancelButton onClick={close}>Cancel</CancelButton>
                    </ButtonsContainer>
                </Container>
            </Modal>
        </Overlay>
    )
}
export default LogOut;