document.addEventListener('DOMContentLoaded', function() {
  const bgAnim = document.getElementById('bg-anim');

  if (bgAnim) {
    for (let i = 0; i < 15; i++) {
      const circle = document.createElement('div');
      circle.classList.add('bg-anim__circle');

      const size = Math.random() * 20 + 7;
      circle.style.width = `${size}vw`;
      circle.style.height = `${size}vw`;

      circle.style.left = `${Math.random() * 100}%`;
      circle.style.top = `${Math.random() * 100}%`;

      circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      circle.style.animationDelay = `${Math.random() * 5}s`;

      bgAnim.appendChild(circle);
    }
  }
});
