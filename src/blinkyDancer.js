var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="fade"><img src="./pics/Ballet-Dancer-2.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function() {

  // this.oldStep();
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

