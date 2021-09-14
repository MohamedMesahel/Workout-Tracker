// TODO: Build Workout model and make it ready for export
// TODO: require mongos and build the schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {type: Date, default: () => new Date()},
        exercises: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number,
            },
            
        ],
    },
    {
        toJSON: {
            virtual: true,
        },
    }
);

WorkoutSchema.virtual('totalDuration').get(function() {
    const duration = this.exercises.reduce((acc, curr) => {
        return acc + cur.duration;
    }, 0);
    return duration;
});

const Workout = mongose.model('Workout', WorkoutSchema);

module.exports = Workout