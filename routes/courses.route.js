const express = require('express')
const coursesController = require('../controller/courses.controller ')
const validationschema = require('../middleware/validation.schema')
const router = express.Router()

router.route('/')
  .get(coursesController.getAllCourses)
  .post(validationschema(), coursesController.addCourse)

router.route('/:courseId')
  .get(coursesController.getCourse)
  .patch(coursesController.updateCourse)
  .delete(coursesController.deleteCourse)

module.exports = { coursesRouter: router }
