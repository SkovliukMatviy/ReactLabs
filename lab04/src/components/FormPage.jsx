import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { useBeforeUnload } from './useBeforeUnload';

const FormPage = () => {
    const [formData, setFormData] = useState({ field1: '', field2: '' });
    const [isFormDirty, setIsFormDirty] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setIsFormDirty(true);
    };

    const handleLeavePage = () => {
        setShowPopup(false);
        setIsFormDirty(false);
        navigate('/');
    };

    const handleStayOnPage = () => {
        setShowPopup(false);
    };

    // Використання кастомного хуку для блокування переходу
    useBeforeUnload(isFormDirty, () => setShowPopup(true));

    return (
        <div>
            <h1>Form Page</h1>
            <form>
                <label>
                    Field 1:
                    <input
                        type="text"
                        name="field1"
                        value={formData.field1}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Field 2:
                    <input
                        type="text"
                        name="field2"
                        value={formData.field2}
                        onChange={handleInputChange}
                    />
                </label>
            </form>

            {showPopup && (
                <Popup
                    onStay={handleStayOnPage}
                    onLeave={handleLeavePage}
                />
            )}
        </div>
    );
};

export default FormPage;
