import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// CSS
import styles from "./ModalSeguros.module.css";
// Components
import FormAuto from "../Forms/FormAuto";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <FormAuto titulo="Cotação Seguro Auto" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

const OpenModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className={styles.botaoModal} onClick={() => setModalShow(true)}>
        Cote Agora!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OpenModal;
