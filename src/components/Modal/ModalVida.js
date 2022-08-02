import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// CSS
import styles from "./Modal.module.css";
// Images
import Vida from "../../assets/images/vida.svg";
// Components

function MyVerticallyCenteredModalVida(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {/*<TransporteForm />*/}
        <h1>Vida</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const OpenModalVida = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className={styles.botaoModal} onClick={() => setModalShow(true)}>
        <img src={Vida} />
        <h2>Seguro de Vida</h2>
      </Button>

      <MyVerticallyCenteredModalVida
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OpenModalVida;
