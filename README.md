## This is a blueprint implementation of a typical web-app backend. 
It uses AWS Lambda with Node, RDS PostgreSQL, and REST API Gateway. In order to make this code working, the following is required:

 1. AWS RDS instance with PostgreSQL database, named `middleware`
 2. AWS Secrets Manager with stored password as a plain text for the database from #1, named `middleware-dev-db`
 3. AWS Lambda, named `Middleware-User_Develop` that is able to connect to the database from #1 (in case VPC is used) and has permissions to read from the secrets manager from #2
 4. Execute SQL from `./sql/user.sql` in the database from #1
 5. Update `./tool/secret-manager.js`, replace `<aws region>` with the correct one
 6. Update `./dao/connection.js`, replace `<db host>` with the correct one
 7. Run `./deploy-user.sh Develop`
 8. AWS REST API Gateway, named `middleware-develop` with resource named `user` with `GET` proxy to the lambda from #2
