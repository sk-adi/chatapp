import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const userRegister = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const userAlreadyRegistered = await User.findOne({ email });

    if (userAlreadyRegistered)
      return res
        .status(401)
        .json({
          success: false,
          message: `Email already exist ! Please Login`,
        });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res
      .status(200)
      .json({
        success: true,
        message: `Registered Successfully ! Please Login`,
      });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
export { userRegister };

/********************************Login Auth********************************************************* */

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res
        .status(401)
        .json({ success: false, message: `Email id not exist` });
    }
    const passwordValidation = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!passwordValidation)
      return res
        .status(401)
        .json({
          success: false,
          message: `Email or Password is wrong ! Please Check`,
        });
    const token = jwt.sign({ email: isUserExist.email }, secretKey, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: false,
    });
    return res
      .status(200)
      .json({ success: true, message: `Login Successful`, token: token });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Internal Server Error`, error: error });
  }
};

export { userLogin };

/********************************Login Auth********************************************************* */

const userLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: `Logout Successfully` });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Internal Server Error` });
  }
};

export { userLogout };

/********************************Login Auth********************************************************* */

const isUserLoggedIn = async (req,res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(400)
        .json({
          success: false,
          message: `Login Expired ! Please Login again`,
        });
    }
    const isTokenVerified = jwt.verify(token, secretKey);
    if (!isTokenVerified)
      return res
        .status(401)
        .json({
          success: false,
          message: `Login Credential Wrong ! Please Login again`,
        });
    return res.status(200).json({ success: true, message: `Token verified` });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Internal Server Error` });
  }
};



export { isUserLoggedIn }
