import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;