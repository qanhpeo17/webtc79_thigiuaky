import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";

exports.createProfile = async (req, res) => {
  const { full_name, date_of_birth, place_of_birth, nationality } = req.body;

  try {
    const newProfile = new Profile({
      full_name,
      date_of_birth,
      place_of_birth,
      nationality,
    });

    await newProfile.save();

    const user = await User.findById(req.user.userId);
    user.profile_id = newProfile._id;
    await user.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const {
    full_name,
    date_of_birth,
    place_of_birth,
    nationality,
    education,
    skills,
    projects,
    work_experience,
    hobbies,
    goals,
  } = req.body;

  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (profile._id.toString() !== req.user.profile_id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    profile.full_name = full_name;
    profile.date_of_birth = date_of_birth;
    profile.place_of_birth = place_of_birth;
    profile.nationality = nationality;
    profile.education = education;
    profile.skills = skills;
    profile.projects = projects;
    profile.work_experience = work_experience;
    profile.hobbies = hobbies;
    profile.goals = goals;

    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (profile._id.toString() !== req.user.profile_id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    await profile.remove();
    res.status(200).json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
