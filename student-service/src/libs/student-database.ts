//global services can create insuide the lib directory

import { Student } from 'src/entities/student.entity';
import { DataSource, EntityManager}  from 'typeorm';

// create data source
let datasource : DataSource

// create function
const getDatabaseConnection = async (): Promise<EntityManager> => {
      // check whethere is there any already connection
    if (datasource && datasource.isInitialized) {
      console.log(`connection already available. reusing exsisting connection`);
      // if exist then return the connection
      return datasource.manager;
    } else {
  
        console.log (`connection not already available, create new one`);
        //create new datasource

        datasource = new DataSource({
            applicationName :'student-service',
            type :'postgres',
            //take the variable value from the enviroment (lambda function will pickup this)
            host : process.env.DBHOSTNAME ,
            port : +process.env.DBPORT,
            database :process.env.DBNAME ,
            username : process.env.DBUSERNAME,
            // in password , same like but we have to secure using parameeter manager like ssm service
            password :process.env.DBPASSWORD ,
            schema : process.env.DBSCHEMA,
            connectTimeoutMS: 30000,
            synchronize :true ,
            logging: false,
            useUTC : true,
            entities: [Student],

        });
        return await datasource
        .initialize()
        .then(()=> {
            console.trace(`new database connection made`);
            return datasource.manager;
        })
        .catch((e) => {
            console.debug(e,`error an conecting to database`);
            throw new Error(e);
        });
    }
    

};
export {getDatabaseConnection};