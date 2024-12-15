import { z } from "zod";
import { Days } from "./offeredCourse.constant";


const createOfferedCourseValidationSchema = z.object({
    semesterRegistration: z.string(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    section: z.number(),
    maxCapacity: z.number(),
    days: z.array(z.enum([...Days] as [string, ...string[]])),
    startTime: z.string(), // HH: MM   00-23: 00-59
    endTime:  z.string()
      })

      const updateOfferedCourseValidationSchema = z.object({
      faculty: z.string(),
      maxCapacity: z.number(),
      days: z.array(z.enum([...Days] as [string, ...string[]])),
      startTime: timeStringSchema, // HH: MM   00-23: 00-59
      endTime: timeStringSchema,
      })

      export const OfferedCourseValidations = {
        createOfferedCourseValidationSchema,
        updateOfferedCourseValidationSchema,
      }