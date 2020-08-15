import React from "react";
import { Modal } from "@material-ui/core";

import "../../../styles/tweet-simulator/modalContainer/modalContainer.scss";

function ModalContainer({ isOpenModal, closeModal, children }) {
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}

export default ModalContainer;
