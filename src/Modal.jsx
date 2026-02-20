import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-1000 max-w-90'>
      <div className='w-full flex justify-end pb-4'><button onClick={onClose} className='mdi--multiply'></button></div>
      <div  
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default Modal;
