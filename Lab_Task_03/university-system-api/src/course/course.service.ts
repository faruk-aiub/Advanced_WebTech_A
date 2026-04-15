import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService 
{
getAllCourses()
{
    return {message: 'All Courses Fetched', data: []};  

}
getCourseById(id: string)
{
    return { message: 'Courses fetched', id};
}
createCourse(name: string, code: string)
{
    return {message: 'Course created', data: {name, code}};
}
}
