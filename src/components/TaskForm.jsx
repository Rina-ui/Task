import React from "react";

function TaskForm() {
    return(
        <div className="Form">
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