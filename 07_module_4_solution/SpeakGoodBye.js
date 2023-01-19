(function (window) {
  const speakWord = "Good Bye";
  const byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);
