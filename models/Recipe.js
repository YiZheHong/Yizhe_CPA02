'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


var recipeSchema = Schema( {
    name: String,
    calories: Number,
    fat: Number,
    fiber: Number,
    sugar: Number,
    protein: Number,
    instructions: String,
    userId: ObjectId,
} );

module.exports = mongoose.model( 'Recipe', recipeSchema );


