import mongoose from "mongoose";

const Schema = mongoose.Schema

const billingSchema = new Schema({
    name: String,
    team: String,
    reportDate: Date,
    empId: String,
    reportDate: Date,
    associated:{
        annotation: Number,
        qc: Number,
        pm: Number,
        rework: Number,
        reworkQc: Number,
        total: Number
    },
    hours:{
        annotation: Number,
        qc: Number,
        pm: Number,
        other: Number,
        rework: Number,
        reworkQc: Number,
        idle: Number,
        total: Number
    },
    jobs:{
        annotation: Number,
        qc: Number,
        pm: Number,
        other: Number,
        rework: Number,
        reworkQc: Number,
        total: Number
    }
})

const Billing = mongoose.model('Billing',billingSchema)

export default Billing