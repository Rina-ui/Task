import jwt from 'jsonwebtoken';
import Task from '../models/Task.js';
import { transformValueTypes } from 'framer-motion';


export const createTask = async (req, res) =>{
    const {description} = req.body;
    const userId = req.userId;

    if (!description) {
        return res.status(400).json({error: 'La description est obligatoire.'});
    };

    try{
        const task = new Task({
            description,
            userId,
        });

        await task.save();
        res.status(201).json({message: 'Tâche créée avec succès.', task});
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erreur interne du serveur'});
    }

}

export const getTasks = async (req, res) => {
    const userId = req.userId;

    try{
        const tasks = await Task.find({userId});
        res.status(200).json(tasks);
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erreur interne du serveur'});
    }
}

export const modifyTask = async (req, res) => {
    const userId = req.userId;
    const {description} = req.body;
    const {id} = req.params;

    try{
        const tasks = await Task.findOneAndUpdate({_id: id, userId});

        if (!tasks) {
            return res.status(404).json({error: 'Tâche non trouvée.'});
        }

        tasks.description = description || tasks.description;
        await tasks.save();
        res.status(200).json({message: 'Tâche modifiée avec succès.', tasks});
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erreur interne du serveur'});
    }
}

export const deleteTask = async (req, res) => {
    const userId = req.userId;
    const {id} = req.params;

    try{
        const tasks = await Task.findOneAndDelete({_id: id, userId});

        if (!tasks) {
            return res.status(404).json({error: 'Tâche non trouvée'})
        };

        res.status(200).json({message: 'Tâche supprimée avec succès'})
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erreur interne du serveur'})
    }
}