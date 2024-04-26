function getRandomColor() {
  const LETTERS = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += LETTERS[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function colorElement(element) {
  element.addEventListener('click', () => {
    element.style.color = 'white';
    element.style.backgroundColor = getRandomColor();
  });
}
