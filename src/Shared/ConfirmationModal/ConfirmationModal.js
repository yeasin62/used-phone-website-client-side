import React from 'react';

const ConfirmationModal = ({title,message,closeModal,modalData, successAction,successButtonName}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="confirmation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold word-wrap">{title}</h3>
                <p className="py-4">{message}</p>

                <div className='flex gap-5'>
                    <button onClick={closeModal} className='btn btn-info text-white'>Close</button>
                    <button onClick={()=> successAction(modalData)} className='btn btn-info text-white'>{successButtonName}</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;