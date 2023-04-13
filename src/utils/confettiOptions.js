export const confettiOptions = () => {
  const screenWidth = window.innerWidth;
  const device =
    screenWidth > 769
      ? "large"
      : screenWidth < 769 && screenWidth > 500
      ? "medium"
      : "small";

  const optionsMap = new Map([
    [
      "small",
      {
        particleCount: 100,
        spread: 60,
        gravity: 0.9,
        ticks: 280,
        origin: { y: 0.4 },
        disableForReducedMotion: true,
        scalar: 0.8,
        resize: true,
      },
    ],
    [
      "medium",
      {
        particleCount: 120,
        spread: 120,
        gravity: 0.8,
        ticks: 280,
        origin: { y: 0.4 },
        disableForReducedMotion: true,
        scalar: 0.9,
        resize: true,
      },
    ],
    [
      "large",
      {
        particleCount: 140,
        spread: 180,
        gravity: 0.8,
        ticks: 280,
        origin: { y: 0.4 },
        disableForReducedMotion: true,
        resize: true,
      },
    ],
  ]);

  return optionsMap.get(device);
};
