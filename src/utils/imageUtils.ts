export const getImageDimensions = (baseWidth: number) => {
  if (typeof window === "undefined")
    return { width: baseWidth, height: Math.floor(baseWidth * 0.2) };

  const screenWidth = window.innerWidth;

  if (screenWidth < 640) {
    // sm
    return {
      width: Math.floor(baseWidth * 0.6),
      height: Math.floor(baseWidth * 0.12),
    };
  } else if (screenWidth < 768) {
    // md
    return {
      width: Math.floor(baseWidth * 0.8),
      height: Math.floor(baseWidth * 0.16),
    };
  } else if (screenWidth < 1024) {
    // lg
    return { width: baseWidth, height: Math.floor(baseWidth * 0.2) };
  } else {
    // xl and above
    return {
      width: Math.floor(baseWidth * 1.2),
      height: Math.floor(baseWidth * 0.24),
    };
  }
};
