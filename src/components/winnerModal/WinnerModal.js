import { memo, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

function WinnerModal({ winner, handleResetBoard }) {
    const [showModal, setShowModal] = useState(false);

    const handleHideNReset = () => {
        handleResetBoard();
        setShowModal(false);
    };

    useEffect(() => {
        setShowModal(!!winner);
    }, [winner]);
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <ModalBody>
                <h3>Player {winner} is the Winner ❤️❤️❤️!</h3>
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => setShowModal(false)}>Okay</Button>
                <Button onClick={handleHideNReset}>Reset</Button>
            </ModalFooter>
        </Modal>
    );
}

export default memo(WinnerModal);
