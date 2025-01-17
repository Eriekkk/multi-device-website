import express from 'express';
import User from '../models/userModel.js';
const router = express.Router();

router.post('/',async(req, res)=>{
    const {name, anime, feedbacktext} = req.body;
    try {
        const newUser = new User({name, anime, feedbacktext});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;