//  // Typewriter
//         // var typed = new Typed('#element', {
//         //     strings: ['Web Developer', 'Frontend Enthusiast', 'Problem Solver'],
//         //     typeSpeed: 60, backSpeed: 40, loop: true
//         // });

// Clock
setInterval(() => {
  const now = new Date();
  document.getElementById('clock').innerText = now.toLocaleTimeString();
}, 1000);

// Simple Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Simple Fun Fact (no animation)
const facts = [
  "The first computer bug was a moth!",
  "JavaScript was created in 10 days!",
  "The first website ever is still online.",
  "Python was named after a comedy group!",
  "GitHub started in 2008."
];

document.getElementById("fact").addEventListener("click", () => {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factText").innerText = facts[random];
});


//                                      // Floating stars background
//         const canvas = document.getElementById('stars');
//         const ctx = canvas.getContext('2d');
//         function resizeCanvas(){ canvas.width = innerWidth; canvas.height = innerHeight; }
//         resizeCanvas(); window.addEventListener('resize', resizeCanvas);
//         const stars = [];
//         for (let i = 0; i < 80; i++) {
//             stars.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 2 });
//         }
//         function animateStars() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             ctx.fillStyle = 'white';
//             stars.forEach(s => {
//                 ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
//                 s.y += 0.2; if (s.y > canvas.height) s.y = 0;
//             });
//             requestAnimationFrame(animateStars);
//         }
//         animateStars();



                                    // Simple Stats Counter
// const counters = document.querySelectorAll(".stat-number");
// let started = false;

// window.addEventListener("scroll", () => {
//     const statsTop = document.getElementById("stats").offsetTop;

//     if (window.scrollY + window.innerHeight > statsTop && !started) {
//         started = true;

//         counters.forEach(counter => {
//             let target = Number(counter.getAttribute("data-target"));
//             let count = 0;

//             let increase = setInterval(() => {
//                 count++;
//                 counter.innerText = count;

//                 if (count >= target) {
//                     clearInterval(increase);
//                     counter.innerText = target;
//                 }
//             }, 10);
//         });
//     }
// });
