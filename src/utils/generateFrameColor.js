const colorsArray = ['#F7B6B4', '#F3BA4A', '#FF9B26', '#A47BD7', '#738BE0'];

const generateFrameColor = () => {
  const index = Math.floor(Math.random() * 4);
  return colorsArray[index];
};

export default generateFrameColor;
