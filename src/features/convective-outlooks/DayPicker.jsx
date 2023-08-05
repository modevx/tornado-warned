import { Form, Radio } from "react-daisyui";

export const DayPicker = ({ onChangeHandler }) => {
  return (
    <Form
      className="flex flex-row justify-center mb-8"
      onChange={onChangeHandler}
      name="outlook-day-picker"
    >
      <RadioGroup>
        <Label day={1} />
        <RadioBtn day={1} isDefault={true} />
      </RadioGroup>
      <RadioGroup>
        <Label day={2} />
        <RadioBtn day={2} isDefault={false} />
      </RadioGroup>
      <RadioGroup>
        <Label day={3} />
        <RadioBtn day={3} isDefault={false} />
      </RadioGroup>
    </Form>
  );
};

const RadioGroup = ({ children }) => (
  <div className="flex items-center mx-4">{children}</div>
);

const Label = ({ day }) => {
  return (
    <Form.Label
      htmlFor={`day-${day}`}
      className="text-xs sm:text-base md:text-lg"
    >{`Day ${day}`}</Form.Label>
  );
};

const RadioBtn = ({ day, isDefault }) => {
  return (
    <Radio
      id={`day-${day}`}
      name="outlook-day"
      value={day}
      className="ml-2"
      size="xs"
      color="accent"
      defaultChecked={isDefault}
    />
  );
};
