const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jobTableName = "job";

const JobSchema = new Schema(
    {
        title: String,
        slug: String,
        image: String,
        company: Object,
        salary: String,
        places: Array,
        place_full: String,
        experience: String,
        deadline: String,
        description: Array,
        requirements: Array,
        benefits: Array,
        time: String,
        general_info: Array,
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

const JobModel = mongoose.model(jobTableName, JobSchema);

module.exports = { JobModel, jobTableName };