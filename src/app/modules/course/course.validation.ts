import { z } from "zod";

const PreRequisiteCourseValidationSchema = z.object({
    course: z.string(),
    isDeleted: z.boolean().optional(),
  });
  
  const createCourseValidationSchema = z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credit: z.number(),
    preRequisiteCourses: z.array(PreRequisiteCourseValidationSchema).optional(),
    isDeleted: z.boolean().optional(),
  });

  const updatePreRequisiteCourseValidationSchema = z.object({
    course: z.string().optional(),
    isDeleted: z.boolean().optional(),
  });

  const updateCourseValidationSchema = z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credit: z.number().optional(),
    preRequisiteCourses: z.array(updatePreRequisiteCourseValidationSchema).optional(),
    isDeleted: z.boolean().optional(),
  })

  export const CourseValidations = {
    createCourseValidationSchema,
    updateCourseValidationSchema
  };