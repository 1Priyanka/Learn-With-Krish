import { successResponse } from "@libs/api-gateway"
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import schema from "./schema";
import { middyfy } from "@libs/lambda";
import { Student } from "src/entities/student.entity";
import { create } from "domain";




const createStudent: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const student: Student = event.body as any as Student;
  const stu = await create(student);
  return successResponse({student});
};

// middify is a library where you can externalize your validation other non business logic out side your function 
export const main=middyfy(createStudent);