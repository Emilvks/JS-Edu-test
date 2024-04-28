# JS-Edu-test
...
Run:
	npm install
	npm start

Test:
	1. curl -X POST http://localhost:3000/client/1
	2. curl -X POST http://localhost:3000/client/2
	
	Windows:
		3. curl -X POST -H "Content-Type: application/json" -d "{ \"result\": \"ok\"}" http://localhost:3000/webhook/2
		4. curl -X POST -H "Content-Type: application/json" -d "{ \"result\": \"ok\"}" http://localhost:3000/webhook/1
	Unix:
		3. curl -X POST -H 'Content-Type: application/json' -d '{ "result": "ok" }' http://localhost:3000/webhook/2
		4. curl -X POST -H 'Content-Type: application/json' -d '{ "result": "ok" }' http://localhost:3000/webhook/1