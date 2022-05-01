'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


var weightSchema = Schema( {
    date: String,
    time: String,
    name: String,
    unit: String,
    currWeight: Number,
    caloriesTook: Number,
    comments: String,
    userId: ObjectId,
    createdAt: Date,

} );

module.exports = mongoose.model( 'Weight', weightSchema );