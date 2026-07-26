const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.updateProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail, _id: { $ne: req.user._id } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email is already in use' });
    }

    req.user.firstName = firstName.trim();
    req.user.lastName = lastName.trim();
    req.user.email = normalizedEmail;

    await req.user.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        createdAt: req.user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
