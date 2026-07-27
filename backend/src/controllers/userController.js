const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.updateProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, phone } = req.body;

    req.user.firstName = firstName.trim();
    req.user.lastName = lastName.trim();
    if (phone !== undefined) {
      req.user.phone = phone.trim();
    }

    await req.user.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        phone: req.user.phone,
        createdAt: req.user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
