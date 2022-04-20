var makeSlideDancer = function(top, left, timeBetweenSteps) {
  this.sound = 'Nutcracker';
  this.$node = $('<span class="fade"><img src="./pics/Ballet-Dancer-1.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;

makeSlideDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  var $imgNode = $(this.$node[0].firstElementChild);

  if($imgNode.attr("src") === "./pics/Ballet-Dancer-1.png") {
    $imgNode.attr("src","./pics/Ballet-Dancer-1-2.png");
  } else {
    $imgNode.attr("src","./pics/Ballet-Dancer-1.png");
  }


  // console.log($imgNode.html())
};