import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// CSS
import styles from "./Modal.module.css";
// Images
import Car from "../../assets/images/car.svg";
// Components
import FormAuto from "../Forms/FormAuto";

function MyVerticallyCenteredModalAuto(props) {
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
}

const OpenModalAuto = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className={styles.botaoModal} onClick={() => setModalShow(true)}>
        <img src={Car} />
        <h2>Seguro Auto</h2>
      </Button>

      <MyVerticallyCenteredModalAuto
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OpenModalAuto;
