// TODO: Build app routes
// TODO: Get all app routes
// Mongoose queries are not promises. They have a .then() function for co and async/await as a convenience.
const { Workout } = require('../models/Workout');
const express = require('express');
const router = require('express').Router();

// TODO: Get all workout routes
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    });
    .catch((err) => {
        res.json(err)
    });
    
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


