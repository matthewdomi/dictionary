import { response } from "express";
import db from "../../../lib/dbConnect";
import Post from "../../../models/posts";


export async function handler(req, res) {
    if (req.method === "GET") {
        const { postId } = req.params;
        await db.connect()

        const post = await Post.findById(postId)
        db.disconnect();

        if (!post) {
            response.status(404)({ message: " Post Not Found" });
            return;
        }
        res.status(200).json({ post});
    }

}