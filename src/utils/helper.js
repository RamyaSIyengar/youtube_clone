const messages = [
  "Love all trust a few do wrong to none",
  "You call it madness, but I call it love",
  "We can only learn to love by loving",
  "A life lived in love will never be dull",
  "Life is the flower for which love is the honey",
  "Hi",
  "Hello",
  "GoodMorning✨",
  "Nice video",
  "good content",
];

export const generateMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export const formatNumber = (num) => {
  if (Math.abs(num) < 999) {
    return num;
  } else if (Math.abs(num) < 1e6) {
    return (num / 1e3).toFixed(1) + "K";
  } else if (Math.abs(num) < 1e9) {
    return (num / 1e6).toFixed(1) + "M";
  } else {
    return (num / 1e9).toFixed(1) + "B";
  }
};
