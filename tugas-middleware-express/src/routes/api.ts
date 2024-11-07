import express from "express";
import { single, multiple } from "../middlewares/upload.middleware";
import { handleUpload } from "../utils/cloudinary";
import fs from 'fs';
import path from 'path';

const router = express.Router();

const processUploadFile = async (file: Express.Multer.File): Promise<any> => {
    const tempFilePath = path.join(__dirname, `temp-${Date.now()}-${file.originalname}`)
    await fs.promises.writeFile(tempFilePath, file.buffer)
    const uploadedFile = await handleUpload(tempFilePath)
    await fs.promises.unlink(tempFilePath)

    return uploadedFile
}

router.get("/upload/single", single, async (req, res) => {
    try {
        // File must exist validation
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" })
        }
        // File validation
        if (req.file.size > 1024 * 1024 * 5){
            return res.status(409).json({ message: "File too large. Maximum size 5 mb" })
        }
        const uploaded = await processUploadFile(req.file)
        res.status(200).json({ message: "Single file uploaded", data: uploaded })
    } catch (error) {
        res.status(500).json({ message: "Upload failed", error })
    }
});

router.get("/upload/multiple", multiple, async (req, res) => {
    let total_success = 0
    try {
        const files = req.files as Express.Multer.File[]
        if (!files || files.length === 0) {
            return res.status(400).json({ message: "No files uploaded" })
        }
        if (files.length > 5) {
            return res.status(409).json({ message: "Too many files. Maximum 5 file" })
        }
        
        let uploaded = []
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            
            if (file.size > 1024 * 1024 * 5) {
                return res.status(409).json({ message: "File too large. Maximum size 5 mb" })
            }
        
            uploaded.push(await processUploadFile(file))
            total_success++
        }
    
        res.status(200).json({ message: `${total_success} file uploaded successfully`, data: uploaded })
    } catch (error) {
        res.status(500).json({ message: "Upload failed", error })
    }
});

export default router;
