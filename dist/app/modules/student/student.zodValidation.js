"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = exports.createStudentValidationSchema = void 0;
const zod_1 = require("zod");
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1)
        .max(20)
        .refine((value) => /^[A-Z]/.test(value), {
        message: 'First Name must start with a capital letter',
    }),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
const localGuardianValidationSchema = zod_1.z.object({
    Name: zod_1.z.string(),
    Occupation: zod_1.z.string(),
    ContactNo: zod_1.z.string()
});
exports.createStudentValidationSchema = zod_1.z.object({
    student: zod_1.z.object({
        name: userNameValidationSchema,
        gender: zod_1.z.enum(['male', 'female', 'other']),
        dateOfBirth: zod_1.z.string().optional(),
        email: zod_1.z.string().email(),
        contactNo: zod_1.z.string(),
        emergencyContactNo: zod_1.z.string(),
        bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
        presentAddress: zod_1.z.string(),
        permanentAddress: zod_1.z.string(),
        guardian: guardianValidationSchema,
        localGuardian: localGuardianValidationSchema,
        // admissionSemester: z.string(),
        profileImg: zod_1.z.string(),
    }),
});
exports.studentValidations = {
    createStudentValidationSchema: exports.createStudentValidationSchema,
};
