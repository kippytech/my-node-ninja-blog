const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

//capital Blog to reference the one in the db? and singular name of it?
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;