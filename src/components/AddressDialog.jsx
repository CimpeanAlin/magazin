// AddressDialog.jsx
import React, { useState } from "react";
import styled from "styled-components";

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

const DialogTitle = styled.h2`
  margin-bottom: 20px;
`;

const DialogInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const DialogButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#ccc")};
  color: ${(props) => (props.primary ? "white" : "black")};
`;

const AddressDialog = ({ isOpen, onClose, onSubmit }) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    onSubmit({ address, phone });
  };

  if (!isOpen) return null;

  return (
    <DialogOverlay>
      <Dialog>
        <DialogTitle>Shipping Information</DialogTitle>
        <DialogInput
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <DialogInput
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <DialogActions>
          <DialogButton onClick={onClose}>Cancel</DialogButton>
          <DialogButton primary onClick={handleSubmit}>
            Ship
          </DialogButton>
        </DialogActions>
      </Dialog>
    </DialogOverlay>
  );
};

export default AddressDialog;
