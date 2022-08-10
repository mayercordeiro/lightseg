import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// CSS
import styles from "./Modal.module.css";
// Images
import People from "../../assets/images/people.svg";
// Components
import FormGeral from "../Forms/FormGeral";

function MyVerticallyCenteredModalAffinity(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <FormGeral titulo="Cotação Seguro Affinity" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const OpenModalAffinity = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className={styles.botaoModal} onClick={() => setModalShow(true)}>
        <img src={People} />
        <h2>Affinity</h2>
      </Button>

      <MyVerticallyCenteredModalAffinity
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default OpenModalAffinity;
