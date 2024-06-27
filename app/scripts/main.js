console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
 // Function to toggle play/pause of audio

 var audioPlayer = document.getElementById('audioPlayer');
 audioPlayer.play();

 function togglePlay() {
  // var audioPlayer = document.getElementById('audioPlayer');
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// const audioPlayer = document.getElementById('audioPlayer');
const rays = document.querySelectorAll('.ray');

audioPlayer.addEventListener('play', function() {
  rays.forEach(ray => {
    ray.style.animationPlayState = 'running';
  });
});

audioPlayer.addEventListener('pause', function() {
  rays.forEach(ray => {
    ray.style.animationPlayState = 'paused';
  });
});

document.addEventListener('mousemove', (e) => {
  const container = document.getElementById('salt-container');

  for (let i = 0; i < 10; i++) { // Generate 10 particles per move
      const salt = document.createElement('div');
      salt.className = 'salt';

      // Randomize initial positions slightly
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;

      salt.style.left = `${e.clientX + offsetX}px`;
      salt.style.top = `${e.clientY + offsetY}px`;

      container.appendChild(salt);

      setTimeout(() => {
          container.removeChild(salt);
      }, 1700); // Remove the particle after it falls
  }
});