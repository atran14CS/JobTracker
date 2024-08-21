import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// This function hashes the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Corrected condition
    const salt = await bcrypt.genSalt(10); // Corrected method name
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Export the User model as a default export
const User = mongoose.model('User', userSchema);
export default User;
