import React, { useState } from 'react';
import axios from 'axios';
import './ChangePasswordModal.css';

const ChangePasswordModal = ({ isOpen, onClose, userId }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/change-password', { userId, oldPassword, newPassword });
      setMessage(res.data);
      if (res.status === 200) {
        onClose(); // Close the modal on success
      }
    } catch (err) {
      setMessage('Error changing password');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Change Password</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ChangePasswordModal;
