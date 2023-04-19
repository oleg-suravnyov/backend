#!/bin/bash
rm -f ./bin/Middleware-User_$1.zip
cd ./facade/user
zip -r ../../bin/Middleware-User_$1.zip ./
cd ../../implementation
zip -u ../bin/Middleware-User_$1.zip ./dao/connection.js
zip -u ../bin/Middleware-User_$1.zip ./dao/user-dao.js
zip -u ../bin/Middleware-User_$1.zip ./tool/secret-manager.js
cd ../
aws lambda update-function-code --function-name Middleware-User_$1 --zip-file fileb://./bin/Middleware-User_$1.zip
