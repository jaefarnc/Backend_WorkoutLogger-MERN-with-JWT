const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')


//authorization to see workouts
const requireAuth = require('../middleware/requireAuth')


//express router
const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//attatch all routes to our router, relative to call path

//get all workoust
router.get('/',getWorkouts)

//get a single workout
//:id is a route parameter
router.get('/:id',getWorkout)

//POST  a new workout
router.post('/',createWorkout)

//DELETE a single workout
router.delete('/:id',deleteWorkout)

//UPDATE a single workout
router.patch('/:id',updateWorkout)

//exports our router
module.exports = router