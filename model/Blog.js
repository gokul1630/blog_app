import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    deleted: { default: false, type: Boolean },
    body: String,
    title: String,
    createdAt: Number,
    createdBy: String,
});

const BlogModel = mongoose.models.blogs || mongoose.model('blogs', BlogSchema);

export default BlogModel;
