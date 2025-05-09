window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1500); // Matches fade-out transition
    }, 500); // Show loader for 5 seconds
});
//husband//
setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").style.display = "block";
}, 10000);


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to generate random numbers
    function generateRandomNumbers(numElement, index) {
        let randomValue;
        if (index === 0) {
            randomValue = Math.floor(Math.random() * 21) + 70; // 70% - 90%
            numElement.textContent = randomValue + "%";
        } else if (index === 1) {
            randomValue = (Math.random() * (6 - 3) + 3).toFixed(1); // $3M - $6M
            numElement.textContent = `$${randomValue}M`;
        } else if (index === 2) {
            randomValue = Math.floor(Math.random() * 201) + 200; // 200 - 400 days
            numElement.textContent = randomValue;
        }
    }

    // Apply ScrollTrigger to each stat
    gsap.utils.toArray(".stat").forEach((stat, index) => {
        gsap.to(stat, {
            scale: 1.1,  // Moves forward (zooms in)
            duration: 1.2,
            delay: index * 0.3,
            ease: "power2.inOut",
            repeat: 4, // Infinite loop
            yoyo: true, // Moves backward (zooms out)
            transformOrigin: "center center",
            scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                onEnter: () => {
                    const numElement = stat.querySelector(".number");
                    generateRandomNumbers(numElement, index);
                },
                toggleActions: "play none none none",
            }
        });
    });
});


// Scroll-triggered card animation
const cards = gsap.utils.toArray(".c-card");
const lastCardIndex = cards.length - 1;

if (cards.length > 1) {
    ScrollTrigger.create({ trigger: cards[1], start: "center center" });
    ScrollTrigger.create({ trigger: cards[lastCardIndex], start: "center center" });

    cards.forEach((card, index) => {
        const scale = index === lastCardIndex ? 1 : 0.5;
        gsap.to(card, { scale: scale });

        ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: () => "center center",
            pin: true,
            pinSpacing: false,
            scrub: 0.5,
            animation: gsap.to(card, { scale: scale }),
            toggleActions: "restart none none reverse"
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".stat").forEach((stat, index) => {
        gsap.to(stat, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });
    });
});
//fadeup effect//

// Animation on scroll using GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate .box
gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out"
});

// Animate .stats-section
gsap.from(".stats-section", {
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.3,
  ease: "power2.out"
});

// Animate contact form
gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.4,
  ease: "power2.out"
});

// Animate social section
gsap.from(".soci-section", {
  scrollTrigger: {
    trigger: ".soci-section",
    start: "top 90%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 50,
  duration: 3,
  delay: 0.5,
  ease: "power2.out"
});
// Looping animated text effect
const texts = document.querySelectorAll('.tex');
let index = 0;

function showText() {
  texts.forEach(t => t.classList.remove('active'));
  texts[index].classList.add('active');
  index = (index + 1) % texts.length;
}

setInterval(showText, 1500);
//zoom out effect//

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        if (img) {
            img.classList.toggle('zoomed');
        } else {
            console.error('Image not found inside the card.');
        }
    });
});



    //cursor forword and card stopping effect//
   
    const cardsWrapper = document.querySelector('.cards-wrapper');

    // Pause scrolling on hover
    cardsWrapper.addEventListener('mouseenter', () => {
        cardsWrapper.style.animationPlayState = 'paused'; // Pause animation
    });

    // Resume scrolling when hover ends
    cardsWrapper.addEventListener('mouseleave', () => {
        cardsWrapper.style.animationPlayState = 'running'; // Resume animation
    });

//onclick effect//
document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("con");
    const contactSection = document.getElementById("contact");
  
    if (contactBtn && contactSection) {
      contactBtn.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  element.scrollIntoView({ behavior: "smooth" });
//scrll smooth effect//
document.getElementById("contactBtn").addEventListener("click", function (e) {
    e.preventDefault();
  
    const target = document.querySelector("#contact");
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 9000; // 1000ms = 1 second. Increase this to slow it down more.
    let start = null;
  
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // easeInOutCubic for smoother feel
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
  
    requestAnimationFrame(animation);
  });

  //background effect

  
  function initializeParticles() {
    if (typeof particlesJS === 'undefined') {
        console.error('particles.js failed to load. Switching to fallback background.');
        document.getElementById('particles-js').classList.add('fallback');
        document.querySelector('.fallback-message').style.display = 'block';
        return;
    }

    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#00ddeb' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#00ddeb', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
    console.log('particles.js initialized successfully');
}

document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
});