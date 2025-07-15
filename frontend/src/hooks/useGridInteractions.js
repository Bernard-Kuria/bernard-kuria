export function mousehoverEffect(containerRef, e) {
  const container = containerRef.current;
  if (!container) return;
  const dots = container.querySelectorAll(".dot");
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xIndex = Math.floor(mouseX / 20);
  const yIndex = Math.floor(mouseY / 20);

  for (let dot of dots) {
    const x = parseInt(dot.dataset.x);
    const y = parseInt(dot.dataset.y);
    const distance = Math.hypot(x - xIndex, y - yIndex);

    if (distance < 1) {
      dot.classList.add("glow");
      setTimeout(() => dot.classList.remove("glow"), 300);
    }
  }
}

export function centerOutwardWaveRadius(
  containerRef,
  maxRadius,
  center = null
) {
  const container = containerRef.current;
  if (!container) return;
  const dots = container.querySelectorAll(".dot");
  const dotSize = 20;
  const cols = Math.ceil(window.innerWidth / dotSize);
  const rows = Math.ceil(document.documentElement.scrollHeight / dotSize);

  let centerX = center?.x ?? Math.floor(cols / 2);
  let centerY = center?.y ?? Math.floor(rows / 2);

  for (let dot of dots) {
    const dotX = parseInt(dot.dataset.x);
    const dotY = parseInt(dot.dataset.y);
    const distance = Math.hypot(dotX - centerX, dotY - centerY);

    if (distance <= maxRadius) {
      const waveDelay = distance * 50 + Math.sin(distance * 0.3) * 100;
      setTimeout(() => {
        dot.classList.add("glow");
        setTimeout(() => dot.classList.remove("glow"), 600);
      }, waveDelay);
    }
  }
}

export function handleGridClick(containerRef, e) {
  const container = containerRef.current;
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const xIndex = Math.floor(mouseX / 20);
  const yIndex = Math.floor(mouseY / 20);
  centerOutwardWaveRadius(containerRef, 4, { x: xIndex, y: yIndex });
}
