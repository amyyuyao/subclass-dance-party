var makeFadeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="fade"><img src="./pics/Ballet-Dancer-2.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeFadeDancer.prototype = Object.create(makeDancer.prototype);
makeFadeDancer.prototype.constructor = makeFadeDancer;

// makeFadeDancer.prototype.oldStep = makeDancer.prototype.step;
makeFadeDancer.prototype.step = function() {

  // this.oldStep();
  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
  var $imgNode = $(this.$node[0].firstElementChild);
  if($imgNode.hasClass('flipped')){
    $imgNode.removeClass('flipped');
  } else {
    $imgNode.addClass('flipped');
  }
};


