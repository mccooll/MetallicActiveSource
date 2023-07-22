export const randomColour = () => {
  const randomColour = Math.floor(Math.random()*16777215).toString(16);

  let colourCode = "#" + randomColour;

  return colourCode;
}
