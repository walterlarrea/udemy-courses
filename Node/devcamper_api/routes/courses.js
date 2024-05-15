const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses.js');

const Course = require('../models/Course.js');

const advancedResults = require('../middleware/advancedResults.js');
const { protect, authorize } = require('../middleware/auth.js');

router
  .route('/')
  .get(
    advancedResults(Course, { path: 'bootcamp', select: 'name description' }),
    getCourses
  )
  .post(protect, authorize('publisher', 'admin'), addCourse);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

// router
// 	.route('/:id')
// 	.get(getBootcamp)
// 	.put(updateBootcamps)
// 	.delete(deleteBootcamps);

module.exports = router;
