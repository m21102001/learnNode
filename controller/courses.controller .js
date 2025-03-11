const { validationResult } = require('express-validator')
let { courses } = require('../data/courses')

const getAllCourses = (req, res, next) => {
  res.json(courses)
}

const getCourse = (req, res, next) => {
  const courseId = +req.params.courseId
  // const course = courses.find(course => course.id === parseInt(courseId))
  const course = courses.find(course => course.id === parseInt(courseId))
  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }
  res.json(course)
}

const addCourse = (req, res, next) => {
  console.log(req.body)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const course = { id: courses.length + 1, ...req.body }
  courses.push(course)
  res.status(201).json(course)
}

const updateCourse = (req, res, next) => {
  const courseId = +req.params.courseId
  let course = courses.find(course => course.id === courseId)
  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }
  course = { ...course, ...req.body }
  res.status(200).json(course)
}

const deleteCourse = (req, res, next) => {
  const courseId = +req.params.courseId
  courses = courses.filter(course => course.id !== courseId)
  res.status(200).json({ message: 'Course deleted' })

}
module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
}