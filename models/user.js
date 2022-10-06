import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLenght: [2, 'Must be more than two charaters'],
        required: true,
    },
    lastName: {
        type: String,
        minLenght: [2, 'Must be more than two charaters'],
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLenght: [7, 'Add more characters'],
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    favorite: [
        {
            type: String,
        }
    ]
},


    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
