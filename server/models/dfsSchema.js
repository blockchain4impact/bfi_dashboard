const mongoose = require("mongoose")

const DfsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    objective:{
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
    dashboardItems: {
        type: Array,
        required: true
    },
    // names: {
    //     type: Array,
    //     required: true
    // },
})

const dfsSchema = mongoose.model("dfs", DfsSchema);
module.exports = dfsSchema