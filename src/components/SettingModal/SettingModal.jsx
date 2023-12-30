import React from 'react';

const UserSettingsModal = ({ onClose }) => {
  return (
    <div>
      <h2>User Info Modal</h2>
      
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default UserSettingsModal;


