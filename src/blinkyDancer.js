var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="fade"><img class="tilt" src="./pics/Ballet-Dancer-3.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function() {


  makeDancer.prototype.step.call(this);


  this.$node.toggle();




};

