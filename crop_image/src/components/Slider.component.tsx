import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useMemo,
} from "react";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  minValue?: number;
  maxValue?: number;
}

const Slider = ({
  value,
  setValue,
  minValue = 1,
  maxValue = 100,
  ...other
}: SliderProps) => {
  const normalize = useMemo(
    () => Math.round((value * 100) / maxValue),
    [value, maxValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(parseInt(value, 10));
  };
  return (
    <input
      type="range"
      id="slider"
      name="slider"
      min={minValue}
      max={maxValue}
      value={normalize}
      onChange={handleChange}
      {...other}
    />
  );
};

export default Slider;
