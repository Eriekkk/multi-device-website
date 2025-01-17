import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    anime: {
        type: String,
        required: true,
        unique: true
    },
    feedbacktext: {
        type: String,
        required: true
    },
});

export default mongoose.model("User", userSchema);