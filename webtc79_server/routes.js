import express from "express";

const router = express.Router();
import authController from "./controllers/auth.controller.js";
import profileController from "./controllers/profile.controller.js";
import { authMiddleware } from "./auth.middleware.js";

// Authentication
router.post("/api/users", authController.createUser);
router.post("/api/users/login", authController.loginUser);
router.post("/api/users/logout", authController.logoutUser);

// Profile
router.post("/api/profiles", authMiddleware, profileController.createProfile);
router.get("/api/profiles/:id", authMiddleware, profileController.getProfile);
router.put(
  "/api/profiles/:id",
  authMiddleware,
  profileController.updateProfile
);
router.delete(
  "/api/profiles/:id",
  authMiddleware,
  profileController.deleteProfile
);

module.exports = router;
