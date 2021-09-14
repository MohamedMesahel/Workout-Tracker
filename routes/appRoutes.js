// TODO: Build app routes
// TODO: Get all app routes
// Mongoose queries are not promises. They have a .then() function for co and async/await as a convenience.
const { Workout } = require('../models/Workout');
const router = require('express').Router();

// TODO: Get all workout routes
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Create workout 
router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

// TODO: Get and update one workout 
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log("PARAMS", body, params);

    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});
// TODO: Get one workout/range

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;