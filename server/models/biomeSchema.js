const mongoose = require("mongoose")

const BiomeSchema = new mongoose.Schema({
    EOLStatus:{
        type: String,
        required: true
    },
    InDiss:{
        type: String,
        required: true
    },
    FormalDiss:{
        type: String,
        required: true
    },
    MoUr: {
        type: String,
        required: true
    },
    Mous: {
        type: String,
        required: true
    },
    Funds: {
        type: String,
        required: true
    },
    ProjectsShortlist: {
        type: String,
        required: true
    },
    ProjectsStarted: {
        type: String,
        required: true
    },
    ProjectsStarted: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        required: true
    },
    InstituteName: {
        type: String,
    },
    Institute: {
        type: String,
    },
})
mongoose.pluralize(null);
const biomeSchema = mongoose.model("biome", BiomeSchema);
module.exports = biomeSchema