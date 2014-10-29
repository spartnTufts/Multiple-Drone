

var arDrone = require('ar-drone');
var drone = [
arDrone.createClient({ip: '192.168.1.200'}),
arDrone.createClient({ip: '192.168.1.205'}),
arDrone.createClient({ip: '192.168.1.210'})
];
drones.forEach(function(drone){
drone.takeoff();
drone
.after(3000, function() {
this.stop();
})
.after(2000, function() {
this.up(0.3);
})
.after(3000, function() {
this.stop();
})
.after(2000, function() {
this.animateLeds('snakeGreenRed', 5,2);
})
.after(3000, function() {
this.stop();
})
.after(3000, function() {
this.left(0.2);
})
.after(3000, function() {
this.stop();
})
.after(3000, function() {
this.animate('thetaDance', 5000);
})
.after(3000, function() {
this.stop();
})
.after(3000, function() {
this.right(0.2);
})
.after(3000, function() {
this.stop();
})
13
.after(3000, function() {
this.animate('phiDance', 5000);
})
.after(3000, function() {
this.stop();
})
.after(2000, function() {
this.up(0.3);
})
.after(9000, function() {
this.stop();
})
.after(2000, function() {
this.animate('flipLeft', 2000);
})
.after(3000, function() {
this.stop();
})
.after(2000, function() {
this.up(0.3);
})
.after(3000, function() {
this.stop();
this.land();
});
});
