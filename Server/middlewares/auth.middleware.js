import { User } from "../models/user.model";
import ApiError from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";

export const varifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      throw new ApiError(401, "unauthrized");
    }

    const decoddedToken = await jwt.varify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    const user = await User.findById(decoddedToken?._id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "invalid token");
    console.log(error);
  }
});
