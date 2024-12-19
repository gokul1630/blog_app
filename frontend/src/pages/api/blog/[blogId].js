import BlogModel from '../../../../model/Blog';

export default async function handler(req, res) {
    try {
        const blogId = req.query?.blogId;
        const response = await BlogModel.findOne({ _id: blogId }).lean();
        res.status(200).json({ status: 'success', data: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: error });
    }
}
