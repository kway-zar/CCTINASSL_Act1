import TeamMember from '../models/team.js';

export async function getTeamMembers(req, res, next) {
  try {
    const team = await TeamMember.find().sort({ createdAt: 1 });
    res.json(team);
  } catch (error) {
    next(error);
  }
}

export async function createTeamMember(req, res, next) {
  try {
    const member = await TeamMember.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    next(error);
  }
}

export async function updateTeamMember(req, res, next) {
  try {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }

    res.json(member);
  } catch (error) {
    next(error);
  }
}

export async function removeTeamMember(req, res, next) {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({ message: 'Team member not found' });
    }

    res.json(member);
  } catch (error) {
    next(error);
  }
}