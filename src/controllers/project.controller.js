import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { ProjectNote } from "../models/note.models.js";
import { ProjectMember } from "../models/projectmember.model.js";

const getProjects = asyncHandler(async (req, res) => {});

const getProjectById = asyncHandler(async (req, res) => {});

const createProject = asyncHandler(async (req, res) => {});

const updateProject = asyncHandler(async (req, res) => {});

const deleteProject = asyncHandler(async (req, res) => {});

const addMemberToProject = asyncHandler(async (req, res) => {});

const getProjectMembers = asyncHandler(async (req, res) => {});

const updateMemberRole = asyncHandler(async (req, res) => {});

const deleteMember = asyncHandler(async (req, res) => {});

export {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  addMemberToProject,
  getProjectMembers,
  updateMemberRole,
  deleteMember,
};
