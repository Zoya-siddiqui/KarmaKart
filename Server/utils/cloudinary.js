import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dztf3egjj",
  api_key: "127448729842991",
  api_secret: "HmoiFgD0_gTUJS93kxX8lRbdHFs",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("file uploaded", response);
    return response;
  } catch (error) {
    fs.unlink.Sync(localFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
