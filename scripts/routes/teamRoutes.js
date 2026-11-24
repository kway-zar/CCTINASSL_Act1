import express from 'express';
import {
  createTeamMember,
  getTeamMembers,
  removeTeamMember,
  updateTeamMember,
} from '../controllers/teamController.js';

const router = express.Router();

router.route('/team')
  .get(getTeamMembers)
  .post(createTeamMember);
router.route('/team/:id')
  .put(updateTeamMember)
  .delete(removeTeamMember);

export default router;