import React, { useState } from "react";
import Modal from "react-modal";

import "./App.css";
import "./materialize.css";
import { NavPanel } from "./components/nav-panel/NavPanel";
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/content";
import { BrowserRouter as Router } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#1a237e";
    subtitle.style.textAlign = "center";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const showModalHandel = (flag) => {
    if (flag) {
      openModal();
    }
  };

  return (
    <Router>
      <div className="App">
        <NavPanel />
        <Content showModal={(flag) => showModalHandel(flag)} />
        <Footer />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div
            className="modal-content"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <h5 ref={(_subtitle) => (subtitle = _subtitle)}>
              Увага!
              <br />
              Сайт працює в тестовому режимі. Певні елементи є неактивними.{" "}
              <br /> Адміністрація сайту приносить вибачення за тимчасові
              незручності...
            </h5>
            <button onClick={closeModal}>Закрити</button>
          </div>
        </Modal>
      </div>
    </Router>
  );
}

export default App;
