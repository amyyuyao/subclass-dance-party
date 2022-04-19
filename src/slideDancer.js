var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;

makeSlideDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.slideUp();
  // makeDancer.prototype.step.call(this);
  // this.$node.slideDown();
};