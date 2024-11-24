import express from "express"
import Post from "../models/post.model.js";
const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

router.get("/getPost",async (req,res)=>{
    try{
        const post = await Post.find();
        res.status(200).json({post:post});
    }catch(error){
        res.status(500).json({ message: "Error fetching posts" });
    }
})

export default router;