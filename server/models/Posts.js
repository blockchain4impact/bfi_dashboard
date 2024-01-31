const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    objective:{
        type: String,
        required: true
    },
    bfi:{
        type: String,
        required: true
    },
    dfs: {
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    Overallprogress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
})

const Post = mongoose.model("dfs", PostSchema);
module.exports = Post