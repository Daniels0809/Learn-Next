import { div } from "framer-motion/client";
import React from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  description?: string;
  onCancel?: () => void;
  onSave?: () => void;
}


export const Modal = ({title, onClose, children, description, onCancel, onSave}: ModalProps) => {
    
    const handleClose = () => {
        onClose();
    }
  
  
    return (
    <>
        <div className="modalContainer">
        <header className="modalContainer_header">
            <h2>{title}</h2>
            <div>
            <button onClick={handleClose}>X</button>
            </div>
        </header>
        <div className="modalContainer_children">{children}</div>

        <footer className="modalContainer_footer">
            <div>{description}</div>

            <div className="modalContainer_buttons">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onSave}>Save</button>
            </div>
        </footer>
        </div>
    </>
  );
};
