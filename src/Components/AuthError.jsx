import React, { useState } from "react";
import "./AuthError.css";

interface AuthErrorProps {
  errorMessage: string;
  onClose: () => void;
}

const AuthError = () => {
  const [newTitle, setNewTitle] = useState(currentTitle);

  const handleRename = async () => {
    const res = await renameTemplate(templateURL, newTitle);
    if (res) {
      onRenamed();
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">Rename Template</div>
        
        <div className="modal-actions">
          <div className="modal-action renamebtn" onClick={handleRename}><div className="button-text">Rename</div></div>
          <div className="modal-action cancel" onClick={onClose}><div className="button-text">Cancel</div></div>
        </div>
      </div>
    </div>
  );
};

export default AuthError;
