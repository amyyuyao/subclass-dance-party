var makeFadeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="fade"><img src="./pics/Ballet-Dancer-1.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;


makeFadeDancer.prototype.step = function() {


  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();

  // this.$node.fadeIn();

  // makeDancer.prototype.step.call(this);
  // this.$node.fadeOut();
};