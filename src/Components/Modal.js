import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { FormText } from "./Form";

export default function ModalExample() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                ToReplaceAll
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Replace The Word!!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* Woohoo, you're reading this text in a modal! */}

                       <input type="text" id="findText" className='m-3' placeholder='Enter to be Replace ' />
                       
                       <input type="text" id="replaceText" className='m-3' placeholder='Enter Replace By' />

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={handleClose}>
                        ReplaceAll
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

// render(<Modal />);