export const SvgText = ({ message, textStyles }) => {
  return (
    <text
      x={350}
      y={250}
      fill="red"
      className="text-3xl font-bold"
      style={{ ...textStyles }}
    >
      {message}
    </text>
  );
};
