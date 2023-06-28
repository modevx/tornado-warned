import { DayJSDateTime } from "components";

export const AlertCardExpires = ({ expiresTime }) => {
  return (
    <div className="text-xs flex flex-col">
      <span>Expires:</span>
      {expiresTime ? (
        <DayJSDateTime utcDate={expiresTime} format="dd LT" />
      ) : (
        "Unknown"
      )}
    </div>
  );
};
