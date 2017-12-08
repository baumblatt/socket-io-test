var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var eventos = [
	{"status":"started","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"currentStamp":111222333,"employeeID":"","timestamp":"08/11/2017 18:22:18","timestampSerialized":1512764538114},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":0.5,"totalPrice":0.9795,"initStamp":111222333,"endStamp":111222383,"employeeID":"","timestamp":"08/11/2017 18:22:19","timestampSerialized":1512764539119},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":1.0,"totalPrice":1.959,"initStamp":111222383,"endStamp":111222433,"employeeID":"","timestamp":"08/11/2017 18:22:20","timestampSerialized":1512764540121},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":1.5,"totalPrice":2.9385,"initStamp":111222433,"endStamp":111222483,"employeeID":"","timestamp":"08/11/2017 18:22:21","timestampSerialized":1512764541721},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":2.0,"totalPrice":3.918,"initStamp":111222483,"endStamp":111222533,"employeeID":"","timestamp":"08/11/2017 18:22:24","timestampSerialized":1512764544145},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":2.5,"totalPrice":4.8975,"initStamp":111222533,"endStamp":111222583,"employeeID":"","timestamp":"08/11/2017 18:22:25","timestampSerialized":1512764545891},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":3.0,"totalPrice":5.877,"initStamp":111222583,"endStamp":111222633,"employeeID":"","timestamp":"08/11/2017 18:22:28","timestampSerialized":1512764548129},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":3.5,"totalPrice":6.8565,"initStamp":111222633,"endStamp":111222683,"employeeID":"","timestamp":"08/11/2017 18:22:30","timestampSerialized":1512764550221},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":4.0,"totalPrice":7.836,"initStamp":111222683,"endStamp":111222733,"employeeID":"","timestamp":"08/11/2017 18:22:31","timestampSerialized":1512764551733},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":4.5,"totalPrice":8.8155,"initStamp":111222733,"endStamp":111222783,"employeeID":"","timestamp":"08/11/2017 18:22:34","timestampSerialized":1512764554055},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":5.0,"totalPrice":9.795,"initStamp":111222783,"endStamp":111222833,"employeeID":"","timestamp":"08/11/2017 18:22:35","timestampSerialized":1512764555621},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":5.5,"totalPrice":10.7745,"initStamp":111222833,"endStamp":111222883,"employeeID":"","timestamp":"08/11/2017 18:22:37","timestampSerialized":1512764557810},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":6.0,"totalPrice":11.754,"initStamp":111222883,"endStamp":111222933,"employeeID":"","timestamp":"08/11/2017 18:22:40","timestampSerialized":1512764560370},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":6.5,"totalPrice":12.7335,"initStamp":111222933,"endStamp":111222983,"employeeID":"","timestamp":"08/11/2017 18:22:42","timestampSerialized":1512764562073},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":7.0,"totalPrice":13.713,"initStamp":111222983,"endStamp":111223033,"employeeID":"","timestamp":"08/11/2017 18:22:43","timestampSerialized":1512764563621},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":7.5,"totalPrice":14.6925,"initStamp":111223033,"endStamp":111223083,"employeeID":"","timestamp":"08/11/2017 18:22:46","timestampSerialized":1512764566131},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":8.0,"totalPrice":15.672,"initStamp":111223083,"endStamp":111223133,"employeeID":"","timestamp":"08/11/2017 18:22:47","timestampSerialized":1512764567722},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":8.5,"totalPrice":16.6515,"initStamp":111223133,"endStamp":111223183,"employeeID":"","timestamp":"08/11/2017 18:22:49","timestampSerialized":1512764569890},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":9.0,"totalPrice":17.631,"initStamp":111223183,"endStamp":111223233,"employeeID":"","timestamp":"08/11/2017 18:22:51","timestampSerialized":1512764571989},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":9.5,"totalPrice":18.6105,"initStamp":111223233,"endStamp":111223283,"employeeID":"","timestamp":"08/11/2017 18:22:54","timestampSerialized":1512764574279},
	{"status":"fuelling","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"liters":0.5,"totalLiters":10.0,"totalPrice":19.59,"initStamp":111223283,"endStamp":111223333,"employeeID":"","timestamp":"08/11/2017 18:22:55","timestampSerialized":1512764575684},
	{"status":"ended","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"totalLiters":10.0,"totalPrice":19.59,"currentStamp":111223333,"employeeID":"","timestamp":"08/11/2017 18:22:55","timestampSerialized":1512764575685},
	{"status":"summary","pump":"PostoBR-1","nozzle":1,"fuelType":"Etanol Comum","price":1.959,"totalLiters":10.0,"totalPrice":19.59,"initStamp":111222333,"endStamp":111223333,"employeeID":"","timestamp":"08/11/2017 18:22:55","timestampSerialized":1512764575685},
];

io.on('connection', function(socket){
	console.log('connected');

	socket.on('subscribe', function(msg){
		console.log('started');

		for (var i = 0; i < eventos.length; i++) {
			setTimeout(function (msg) {
				socket.emit('eventoBomba', msg);
			}, 1000*i, JSON.stringify(eventos[i]));
		}

		console.log('finished');
	});

	socket.on('disconnect', function(){
		console.log('disconnected');
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});



