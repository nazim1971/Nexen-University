"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const student_zodValidation_1 = require("../student/student.zodValidation");
const validateRequest_1 = require("../../utils/validateRequest");
const router = express_1.default.Router();
router.post('/create-student', (0, validateRequest_1.validateMiddlewire)(student_zodValidation_1.createStudentValidationSchema), user_controller_1.UserController.createStudent);
exports.UserRoutes = router;
