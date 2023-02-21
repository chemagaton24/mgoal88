import Modules from '..'
import Container from '../../../containers'
import Modal from '../../../modal'
import './style.css'

const ModalLogin = () => {
    return (
        <Modal.Parts.Master stateName="login">
            <Container.Module name="modal-login" kind="modal">
                <Modal.Parts.Header />
                <Modal.Parts.Body>
                    <Modules.Form />
                </Modal.Parts.Body>
            </Container.Module>
        </Modal.Parts.Master>
    )
}

export default ModalLogin