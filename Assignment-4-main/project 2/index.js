const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  box.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
});

box.addEventListener('mouseleave', () => {
  box.style.transform = 'translate(0, 0)';
});
