import React from "react";
import "./ErrorModal.css";
import * as ReactBootstrap from "react-bootstrap";
var Modal = ReactBootstrap.Modal;

const ErrorModal = props => (
	<Modal className="error-modal" 
				 show={props.showState} 
				 onHide={props.handleClose}>

	  <Modal.Dialog>
	    <Modal.Header >
	      <Modal.Title>Error!</Modal.Title>
	    </Modal.Header>

	    <Modal.Body>
	    	<p>{props.errorMessage}</p>
	    </Modal.Body>

	    <Modal.Footer>
	      <button onClick={props.handleClose} className="btn">Close</button>
	    </Modal.Footer>
	  </Modal.Dialog>
	</Modal>
);

export default ErrorModal;