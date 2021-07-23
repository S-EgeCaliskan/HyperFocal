const tl = gsap.timeline({ defaults: { ease: "power1.in" } });

tl.to(".intro-text1", { x: 0, duration: 1 });
tl.to(".intro-text2", { x: 0, duration: 1 });
tl.fromTo(
  ".intro-text3",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 0.7 }
);
tl.fromTo(".intro-text4", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

tl.to(".animation", { y: -2000, duration: 2 });
tl.to(".slide", { y: -2000, duration: 0.9 }, "-=1");
tl.fromTo(".animation", { opacity: 1 }, { opacity: 0, duration: 0.01 });
tl.fromTo(".slide", { opacity: 1 }, { opacity: 0, duration: 0.01 });

tl.fromTo(".hero", { opacity: 0 }, { opacity: 1 }, "=-0.5");
tl.fromTo(".nav-links", { opacity: 0 }, { opacity: 1, delay: 1 }, "=-0.5");
tl.fromTo(
  ".logo-container",
  { opacity: 0 },
  { opacity: 0.5, delay: 1 },
  "=-1.5"
);
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, delay: 1 }, "=-1.5");
