import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// CSS
import styles from "./ModalSegurosText.module.css"

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        SEGURO RESIDENCIAL
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const OpenModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className={styles.botaoModal} onClick={() => setModalShow(true)}>
        Saiba Mais
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OpenModal;
