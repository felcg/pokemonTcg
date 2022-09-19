export const getColor = (types: string[] | undefined) => {
  const lighterColorTypes = ["Colorless", "Lightning", "Metal"];
  if (types) {
    const isFound = types.some((type) => lighterColorTypes.includes(type));
    return isFound ? "black" : "white";
  } else
    return "black";
};