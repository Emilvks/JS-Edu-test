# JS-Edu-test

Run:

npm install

npm start

Test:

curl -X POST http://localhost:3000/client/1
curl -X POST http://localhost:3000/client/2

Windows:

curl -X POST -H "Content-Type: application/json" -d "{ \\"result\\": \\"ok\\"}" http://localhost:3000/webhook/2
 
curl -X POST -H "Content-Type: application/json" -d "{ \\"result\\": \\"ok\\"}" http://localhost:3000/webhook/1

Unix:

curl -X POST -H 'Content-Type: application/json' -d '{ "result": "ok" }' http://localhost:3000/webhook/2
 
curl -X POST -H 'Content-Type: application/json' -d '{ "result": "ok" }' http://localhost:3000/webhook/1
