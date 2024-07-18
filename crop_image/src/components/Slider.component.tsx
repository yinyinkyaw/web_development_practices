import { cn } from "@utils/index";
import { cva, VariantProps } from "class-variance-authority";
import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

const sliderVariants = cva(
  "appearance-none border-y-2 border-y-white h-[10px] rounded-full",
  {
    variants: {
      sliderSize: {
        default: "",
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
      sliderColor: {
        default: "bg-indigo-500",
        red: "bg-red-500",
        blue: "bg-blue-500",
        indigo: "bg-indigo-500",
        green: "bg-green-500",
      },
    },
    defaultVariants: {
      sliderSize: "default",
      sliderColor: "default",
    },
  }
);
interface SliderProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof sliderVariants> {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}

const Slider = ({
  sliderSize,
  sliderColor,
  value,
  setValue,
  min = 1,
  max = 100,
  ...other
}: SliderProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(parseFloat(value));
  };
  return (
    <input
      className={cn(sliderVariants({ sliderSize, sliderColor }))}
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
