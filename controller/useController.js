import User from "../Model/user_Model.js";

import { comparePassword, hashPassword } from "../helper/auth.js";

export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const myPass = await hashPassword(password, "10");

    const createdUSer = await new User({
      name: name,
      email: email,
      password: myPass,
    }).save();

    return res.status(201).send("User Created Successfully");
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email } || name );

    const isMatch = await comparePassword(password, user.password);

    if (!user || !isMatch) {
      res.status(201).send("Invalid Email or Password");
    } else {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
