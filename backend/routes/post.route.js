import express from "express"
import Post from "../models/post.model.js";

const router = express.Router();

router.post("/save", (req, res) => {
    try{
        const post = new Post(req.body);
        post.save();
        res.status(200).json({ message: "Form submitted successfully!" });
    }catch(error){  
        res.status(500).json({ message: "Error submitting form" });
    }
});

export default router;