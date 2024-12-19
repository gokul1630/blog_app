import mongoose from 'mongoose';
import dbConnect from '../../../lib/mongoose';
import BlogModel from '../../../model/Blog';

export default async function handler(req, res) {
    await dbConnect();

    try {
        const data = await BlogModel.find({}, 'title createdAt createdBy');
        res.status(200).json({ status: 'success', data });
    } catch (error) {
        console.log(error);
        res.send({ status: 'error', message: error });
    }
}
