import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

export default function UserDetailModal({ open, onClose, user, number }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000",
    },
  };

  return (
    <Modal
      // useState (getter) Props from parents component
      isOpen={open}
      // useState (setter) Props from parents component
      onRequestClose={onClose}
      contentLabel="User details"
      ariaHideApp={false}
      style={customStyles}
    >
      <div>
        <h2>User detail Mother Father #{number}</h2>

        {/* If: there is no data */}
        {!user && <p>Invalid data type... or data is null</p>}

        {/* If: data is working */}
        {user && (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company name: {user.company.name}</p>
          </>
        )}
      </div>
    </Modal>
  );
}

UserDetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,

  number: PropTypes.number.isRequired,
};
