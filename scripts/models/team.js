import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  detail: { type: String, default: '' },
  image: { type: String, default: '' },
}, { timestamps: true });

const TeamMember = mongoose.models.TeamMember || mongoose.model('TeamMember', teamSchema, 'teams');

export default TeamMember;
