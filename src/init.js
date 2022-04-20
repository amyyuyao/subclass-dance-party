$(document).ready(function() {
  window.dancers = [];
  window.dancerObjs = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      Math.random() * (600 - 450) + 450,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
    window.dancerObjs.push(dancer);

  });

  var dancerSound = new Audio('./Nutcracker.mp3');

  $('.lineUpDancers').on('click', function(event) {
    if (!dancerSound2.paused) {
      dancerSound2.pause();
    }

    var offset = 0;
    var lastPose = 5;
    var top = 40;

    window.dancerObjs.forEach(function(elem, index, list) {
      var len = dancerObjs.length;
      offset = 80 / len;

      if (index === 0) {
        elem.$node.css({top: top + '%', left: lastPose + '%'});
      } else {
        lastPose += offset - 6;
        if (lastPose > 80) {
          top = 50;
          lastPose = 5;
        }
        elem.$node.css({top: top + '%', left: lastPose + '%'});
      }

    //  console.log(window.dancerObjs[index-1].$node.css('left'));


      elem.timeBetweenSteps = 1300;

    });


    if (!dancerSound.paused) {
      dancerSound.pause();
    } else {
      dancerSound.play();
    }

  });

  var dancerSound2 = new Audio('./Swanlake.mp3');

  $('.FaceToFace').on('click', function(event) {
    if (!dancerSound.paused) {
      dancerSound.pause();
    }
    var offset = 650;

    window.dancerObjs.forEach(function(elem, index, list) {
      if (index % 2 === 1) {
        elem.$node.css({top: offset += 30, left: 100});
      } else {
        elem.$node.css({top: offset += 30, left: 200});
        offset -= 100
      }

      elem.timeBetweenSteps = 1300;

    });

    if (!dancerSound2.paused) {
      dancerSound2.pause();
    } else {
      dancerSound2.play();
    }
  });
});

