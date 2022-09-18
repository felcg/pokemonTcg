export const getColor = (types: string[]) => {
  const lighterColorTypes = ["Colorless", "Lightning", "Metal"];
  if (types) {
    const isFound = types.some((type) => lighterColorTypes.includes(type));
    return isFound ? "black" : "white";
  }
  return "black";
};