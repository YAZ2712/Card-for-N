// Tampilkan pesan tersembunyi setelah beberapa detik
setTimeout(() => {
    document.getElementById('hidden-text').classList.add('show-message');
  }, 2000);
  
  // Efek teks melayang
  document.addEventListener('DOMContentLoaded', function() {
    gsap.to(".floating", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  });
  
  // Tambahkan efek hati yang beterbangan
  function createHearts() {
    const container = document.getElementById('heart-container');
    const heartCount = 12;
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(heart);
    }
  }
  
  createHearts();
  
  // Initial confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FFB6C1', '#FFDEB9', '#FFFFE0', '#FFFFFF']
  });
  
  let kartu = document.getElementById("kartu");
  let mainContainer = document.getElementById("main-container");
  
  function ubahKartu() {
    kartu.classList.remove("animate__backInDown");
    kartu.classList.add("animate__animated", "animate__flipInY");
  
    mainContainer.style.backgroundImage = "url('https://images.unsplash.com/photo-1493589976221-c2357c31ad77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3')";
  
    kartu.classList.add("bg-gradient");
  
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0 },
      colors: ['#ff9a9e', '#fad0c4', '#FFB6C1', '#FFDEB9']
    });
  
    kartu.innerHTML = `
      <h1 class="font-semibold text-gray-700 text-wrap animate__animated animate__zoomIn">
        Congratulations, ma belle!
        You've conquered your first stage — and I couldn't be prouder of you.
        Today is even more special because it marks one beautiful month of us.
        Even from miles away, my heart is always right beside you.
        Thank you for staying, for fighting, and for loving.
        Here's to your victories, our journey, and the many more beautiful moments ahead.
        I love you, always.
      </h1>
      <div class="love-icons mt-4 animate__animated animate__heartBeat animate__infinite">
        💖 💫
      </div>
      <h2 class="mt-3 text-gray-500 animate__animated animate__fadeIn">
        - From : YAZ -
      </h2>
      <button class="p-2 bg-slate-600 text-white rounded mt-5 hover:bg-slate-900
      transition ease-in w-full animate__animated animate__delay-1s animate__tada button-pulse" onclick="refresh()">
        Tutup
      </button>
    `;
  
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 20,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          shapes: ['heart'],
          colors: ['#ff0000', '#ff69b4', '#ff1493']
        });
      }, i * 500);
    }
  }
  
  function refresh() {
    kartu.classList.remove("animate__flipInY");
    kartu.classList.add("animate__animated", "animate__zoomOut");
  
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  
  // Mouse trail effect
  document.addEventListener('touchstart', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = (e.pageX - 5) + 'px';
    trail.style.top = (e.pageY - 5) + 'px';
    trail.style.position = 'absolute';
    trail.style.width = '10px';
    trail.style.height = '10px';
    trail.style.borderRadius = '50%';
    trail.style.backgroundColor = 'rgba(255,182,193,0.7)';
    trail.style.zIndex = '9999';
    
    document.body.appendChild(trail);
    
    setTimeout(function() {
      trail.style.opacity = '0';
      setTimeout(function() {
        document.body.removeChild(trail);
      }, 500);
    }, 100);
  });
  
  // Hover effect untuk button
  const mainButton = document.getElementById('mainButton');
  mainButton.addEventListener('mouseover', function() {
    this.classList.add('animate__rubberBand');
    setTimeout(() => {
      this.classList.remove('animate__rubberBand');
    }, 1000);
  });
  
