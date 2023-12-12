const mongoose = require('mongoose')

//mongodb is schema less, mongoose makes schemas
const Schema = mongoose.Schema

//enforces the schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required:true
    },
    user_id:{
        type: String,
        required:true
    }
},{timestamps:true})

//define a model which applies the schema


//creates a model and a collection called Workouts
//we can import the model and then use it to interact with the Workouts collection
module.exports = mongoose.model('Workout',workoutSchema)

