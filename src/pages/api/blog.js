import mongoose from 'mongoose';
import dbConnect from '../../../lib/mongoose';
import BlogModel from '../../../model/Blog';

await dbConnect();
export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const body = req?.body || {};
            const blog = new BlogModel(body);
            blog.save();

            res.status(200).json({
                status: 'success',
                message: 'blog published successfully',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: error });
    }
}
