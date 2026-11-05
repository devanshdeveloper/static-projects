export const DEFAULT_MAX_SPANS = 200;

export const clampSpanCount = (value, max = DEFAULT_MAX_SPANS) => {
  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed) || parsed < 0) {
    return 0;
  }

  return Math.min(parsed, max);
};

export const getRandomIndex = (length) => Math.floor(Math.random() * length);

export const getRandomColor = (colors) => colors[getRandomIndex(colors.length)];
