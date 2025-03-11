const { body } = require("express-validator")

const validationschema = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage('title is required')
      .isLength({ min: 2 })
      .withMessage('title at lastest 2 digites')
    , body('price')
      .notEmpty()
      .withMessage('price is required')
      .isNumeric()
      .withMessage('price must be a number')
  ]
}
module.exports = validationschema 