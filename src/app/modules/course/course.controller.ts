import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CourseServices } from "./course.service";
import httpStatus from "http-status";



const createCourse = catchAsync(async (req, res) => {
  
    const result = await CourseServices.createCourseIntoDB(req.body)
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Course is created successfully',
      data: result,
    });
})

const singleCourse = catchAsync(async(req,res)=>{
  const {courseId} = req.params;
  const result = await CourseServices.getSingleCourseFromDB(courseId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course is revert successfully',
    data: result,
  });
})

const allCourse = catchAsync(async(req,res)=>{
  
  const result = await CourseServices.getAllCourseFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Courses is revert successfully',
    data: result,
  });
})

const deleteCourse = catchAsync(async(req,res)=>{
  const {courseId} = req.params;

  const result =  await CourseServices.deleteCourseFromDB(courseId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Faculty is Deleted successfully',
    data: result,
  });
})

const updateCourse = catchAsync(async(req,res)=>{
    const {courseId} = req.params;
  
    const result =  await CourseServices.updateCourseFromDB(courseId,req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Course is Updated successfully',
      data: result,
    });
  })

export const CourseController = {
  createCourse,
  singleCourse,
  allCourse,
  deleteCourse,
  updateCourse
};
