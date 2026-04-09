var type = document.getElementById("title-intro");

var typewriter = new Typewriter(type, {
  loop: true,
});
typewriter
  .typeString(
    "I'm Mustafa Kemal <br> Fullstack Developer<span class='text-2xl'>©</span>",
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm also Designer")
  .pauseFor(2500)
  .deleteAll()
  .start();
