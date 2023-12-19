$(document).ready(function () {
  $("button#more").on("click", function () {
    $("div#moree").show(500);
  });
  $("button#fewer").on("click", function () {
    $("div#moree").hide(500);
  });

  $("button#more").on("click", function () {
    $("button#fewer").show(500);
  });
  $("button#more").on("click", function () {
    $("div#more").hide(500);
  });

  $("button#fewer").on("click", function () {
    $("div#more").show(500);
  });
  $("button#fewer").on("click", function () {
    $("div#moree").hide(500);
  });
  $("button#fewer").on("click", function () {
    $("button#fewer").hide(500);
  });
  $("a#sabtenam").on("click", function () {
    $("div#sabtename").show(500);
  });
  $("button#hide").on("click", function () {
    $("div#sabtename").hide(500);
  });
  $("input#Search-Input").on("click", function () {
    $("div#Click-Input").show(500);
  });
  $("div#click-Inputt").on("click", function () {
    $("div#Click-Input").hide(500);
  });
  $("input#Search-Input").click(function () {
    $("div#Click-Input").css({
      boxShadow: "2px-2px-2px-2px-black",
    });
  });
  $("input#Search-Input").click(function () {
    $("div#Click-Input").css({
      boxShadow: "2px-2px-2px-2px-black",
    });
  });
  $("button#dropdownHoverButton").on({
    mouseenter: function () {
      $("div#dropdownHover").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#dropdownHover").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#dropdownHover").on({
    mouseenter: function () {
      $("div#dropdownHover").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#dropdownHover").fadeOut(0)({
        display: "none",
      });
    },
  });
  $("button#dropdownHoverButton").on({
    mouseenter: function () {
      $("div#forone").fadeToggle(500)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forone").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("button#dropdownHoverButton").on({
    mouseenter: function () {
      $("a#one").fadeToggle(500)({
        backgroundColor: "red",
      });
    },
    mouseleave: function () {
      $("a#one").fadeOut(50)({
        backgroundColor: "none",
      });
    },
  });
  $("a#one").on({
    mouseenter: function () {
      $("div#forone").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forone").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forone").on({
    mouseenter: function () {
      $("div#forone").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forone").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#tow").on({
    mouseenter: function () {
      $("div#fortow").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#fortow").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#fortow").on({
    mouseenter: function () {
      $("div#fortow").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#fortow").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#three").on({
    mouseenter: function () {
      $("div#forthree").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forthree").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forthree").on({
    mouseenter: function () {
      $("div#forthree").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forthree").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#four").on({
    mouseenter: function () {
      $("div#forfour").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forfour").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forfour").on({
    mouseenter: function () {
      $("div#forfour").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forfour").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#five").on({
    mouseenter: function () {
      $("div#forfive").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forfive").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forfive").on({
    mouseenter: function () {
      $("div#forfive").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forfive").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#six").on({
    mouseenter: function () {
      $("div#forsix").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forsix").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forsix").on({
    mouseenter: function () {
      $("div#forsix").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forsix").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#seven").on({
    mouseenter: function () {
      $("div#forseven").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forseven").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forseven").on({
    mouseenter: function () {
      $("div#forseven").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forseven").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#eight").on({
    mouseenter: function () {
      $("div#foreight").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#foreight").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#foreight").on({
    mouseenter: function () {
      $("div#foreight").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#foreight").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#nine").on({
    mouseenter: function () {
      $("div#fornine").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#fornine").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#fornine").on({
    mouseenter: function () {
      $("div#fornine").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#fornine").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#ten").on({
    mouseenter: function () {
      $("div#forten").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forten").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#forten").on({
    mouseenter: function () {
      $("div#forten").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#forten").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("a#eleven").on({
    mouseenter: function () {
      $("div#foreleven").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#foreleven").fadeOut(50)({
        display: "none",
      });
    },
  });
  $("div#foreleven").on({
    mouseenter: function () {
      $("div#foreleven").fadeToggle(50)({
        display: "block",
      });
    },
    mouseleave: function () {
      $("div#foreleven").fadeOut(500)({
        display: "none",
      });
    },
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
document.getElementById("timer").innerHTML = 56 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timer").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

document.getElementById("timerr").innerHTML = 56 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

document.getElementById("timerrr").innerHTML = 6 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerrr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerrr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

document.getElementById("timerrrr").innerHTML = 17 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerrrr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerrrr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

document.getElementById("timerrrrr").innerHTML = 17 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerrrrr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerrrrr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
document.getElementById("timerrrrrr").innerHTML = 29 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerrrrrr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerrrrrr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
document.getElementById("timerrrrrrr").innerHTML = 49 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerrrrrrr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerrrrrrr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
document.getElementById("timerrrrrrrr").innerHTML = 49 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timerrrrrrrr").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("timerrrrrrrr").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
