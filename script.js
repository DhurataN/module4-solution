(function() {
    var names = ["Dhurata", "Granit", "Anda", "Nita", "Drin", "Narta", "Natyra", "Pranvera"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'd') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
