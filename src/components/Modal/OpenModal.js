import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
// CSS
import "./OpenModal.css";

const OpenModal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        className={props.estilo}
        variant="primary"
        onClick={() => setShow(true)}
      >
        <img src={props.imagemBtn} />
        <h2>{props.tituloBtn}</h2>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{props.form}</Modal.Body>
        <ModalFooter className="botaoSair">
          <Button onClick={() => setShow(false)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default OpenModal;
