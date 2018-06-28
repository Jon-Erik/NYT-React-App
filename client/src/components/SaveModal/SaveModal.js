import React from "react";
import "./SaveModal.css";
import * as ReactBootstrap from "react-bootstrap";
var Modal = ReactBootstrap.Modal;

const SaveModal = props => (
	<Modal className="save-modal" 
				 show={props.showState} 
				 onHide={props.handleClose}>

	  <Modal.Dialog>
	    <Modal.Header >
	      <Modal.Title>Success!</Modal.Title>
	    </Modal.Header>

	    <Modal.Body>
	    	<p>This article has been saved. You can view and comment on it on the "Saved Articles" page.</p>
	    </Modal.Body>

	    <Modal.Footer>
	      <button onClick={props.handleClose} className="btn close-modal">Close</button>
	    </Modal.Footer>
	  </Modal.Dialog>
	</Modal>
);

export default SaveModal;