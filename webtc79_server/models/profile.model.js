import { Schema, model } from "mongoose";
const educationSchema = Schema(
  {
    school_name: String,
    degree: String,
    field_of_study: String,
    start_date: Date,
    end_date: Date,
  },
  { _id: false }
);

const skillSchema = Schema(
  {
    skill_name: String,
  },
  { _id: false }
);

const projectSchema = Schema(
  {
    project_name: String,
    description: String,
    role: String,
    start_date: Date,
    end_date: Date,
  },
  { _id: false }
);

const workExperienceSchema = Schema(
  {
    company_name: String,
    role: String,
    start_date: Date,
    end_date: Date,
  },
  { _id: false }
);

const hobbySchema = Schema(
  {
    hobby_name: String,
  },
  { _id: false }
);

const goalSchema = Schema(
  {
    goal_description: String,
  },
  { _id: false }
);

const profileSchema = Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    place_of_birth: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    education: [educationSchema],
    skills: [skillSchema],
    projects: [projectSchema],
    work_experience: [workExperienceSchema],
    hobbies: [hobbySchema],
    goals: [goalSchema],
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
