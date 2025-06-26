import React from "react";   

function TaskForm({ onClose }) {
    return(
        <div className="modal-content">
            <button className="close-btn" onClick={onClose}>×</button>
            <fieldset>
                <legend>
                    Formulaire
                </legend>
                <input
                    placeholder="Entrer votre tache"
                />
                <button type="submit">Ajouter</button>
            </fieldset>
        </div>
    )
}

export default TaskForm;