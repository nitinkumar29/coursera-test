(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var n in names) {
    if (names[n].charAt(0).toLowerCase() == 'j') {
      // console.log("j "+names[n])
       byeSpeaker.speak(names[n])
  } else {
    // console.log(names[n])
       helloSpeaker.speak(names[n])
  }
  }

})();
