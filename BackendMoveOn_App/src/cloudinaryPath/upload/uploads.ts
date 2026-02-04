import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        return {
            folder: "upload",
            allowed_formats: ["jpg", "png", "jpeg"],
        };
    },
});

export const upload = multer({ storage });