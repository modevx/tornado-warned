export const NoMapDataText = ({ loadingMessage }) => {
  return (
    <text x={350} y={250} fill="red" className="text-3xl font-bold">
      {loadingMessage}
    </text>
  );
};
