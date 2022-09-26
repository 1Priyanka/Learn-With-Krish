// include entire business logic  which belongs to student  create , fetch all things
import { getDatabaseConnection} from '@libs/student-database';
import { Student } from "src/entities/student.entity";



const create = async  (student : Student): Promise<Student> => {
    const studentRepository  = await(
        await getDatabaseConnection()
    
    ).getRepository(Student);
    const newStudent: Student  = await studentRepository
    .save(student)
    .catch((e) => {
        console.error('failed to create student record ',e);
        throw new Error(e);

    });
    return newStudent;
};
const fetch = async (studentId: string): Promise<Student> => {
    const studentRepository = await (
      await getDatabaseConnection()
    ).getRepository(Student);
    const newStudent: Student = await studentRepository
      .findOneBy({id: studentId})
      .catch((e) => {
        console.debug('failed to fetch student Record', e);
        throw new Error(e);
      });
    return newStudent;
  };
  const fetchAll = async (): Promise<Student[]> => {
    const studentRepository = await (
      await getDatabaseConnection()
    ).getRepository(Student);
    const students: Student[] = await studentRepository.find().catch((e) => {
      console.debug('failed to fetch students ', e);
      throw new Error(e);
    });
    return students;
  };
export {create,fetchAll,fetch};