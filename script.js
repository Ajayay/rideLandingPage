let delayVariable = gsap.timeline({ delay: 1 });
delayVariable.from("header", {
  duration: 2.5,
  ease: "circ.out",
  y: -500
});

delayVariable.from(".hero-content", {
  duration: 2.5,
  ease: "circ.out",
  opacity: 0,
  y: 300
});

delayVariable.from(".hero-images", {
  duration: 2.5,
  ease: "circ.out",
  opacity: 0
});

gsap.to("#red-car", {
  duration: 8,
  x: 2020,
  y: 390,
  ease: "none",
  repeat: 4,
  repeatDelay: 1
});

gsap.to("#blue-car", {
  duration: 10,
  x: 200,
  y: 1,
  ease: "none",
  repeat: 4,
  repeatDelay: 1
});

gsap.to("#yellow-car", {
  duration: 7,
  x: 884,
  y: 1114,
  ease: "none",
  repeat: 4,
  repeatDelay: 1
});
