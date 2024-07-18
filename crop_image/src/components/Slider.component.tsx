import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}

const Slider = ({
  value,
  setValue,
  min = 1,
  max = 100,
  ...other
}: SliderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(parseInt(value, 10));
  };
  return (
    <input
      type="range"
      id="slider"
      name="slider"
      min={min}
      max={max}
      step={0.1}
      value={value}
      onChange={handleChange}
      {...other}
    />
  );
};

export default Slider;
