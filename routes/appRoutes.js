// TODO: Build app routes
// TODO: Get all app routes
const { Workout } = require('../models/Workout');
const router = require('express').Router();

// TODO: Get all workout routes
router.get("/", async (req, res) => {
    try {
        const workoutsData = await Workout.findAll({
           // TODO: Check with your tutor if I should include attributes

        });
        res.json(workoutsData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Create workout 
router.post('/api/workouts', async (req, res) => {
    try {
        const workoutsData = await Workout.create({
            ...req.body,
        });
        res.status(200).json(workoutsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: Get and update one workout 
// TODO: Get one workout/range


