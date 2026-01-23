import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-1000 max-w-90' onClick={onClose}>
      <div  
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default Modal;
