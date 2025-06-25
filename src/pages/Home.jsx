import React, { use } from 'react';
import { Link, useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    const handleAddTask = () => {
        navigate('../components/TaskForm.jsx');
    }

    return (
        <div>
            <h1>Welcome to the Task Manager</h1>
            <p>This is a simple task management application.</p>
            <button onClick={handleAddTask}>Ajouter une tache</button>
            <button type="submit">Voir les taches</button>
            <button type="submit">Voir la liste des taches</button>
            <Link to="/theme">Theme</Link>
        </div>
    );
}

export default Home;
