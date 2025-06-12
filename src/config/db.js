const express = require('express');
const dotenv = require('dotenv');
const { mongoose } = require('mongoose');
dotenv.config()
connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("MongoDB connected successfully");

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);

    }
}

module.exports = { connectDB };