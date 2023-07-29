// * // extent = [[left, top],[right, bottom]]

export const convertBoundsToExtent = (boundingBox) => {
  const [x0, y0] = boundingBox[0]; // min corner
  const [x1, y1] = boundingBox[1]; // max corner

  // returns flipped min-y & max-y VALUES
  return [
    [x0, y1],
    [x1, y0],
  ];
};
