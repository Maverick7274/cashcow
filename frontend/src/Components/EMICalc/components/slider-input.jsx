import React from "react";
import { numberWithCommas } from "../utils/config";

function SliderInput({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle,
}) {
  return (
    <div>
      <span className="text-xl">{title}</span>
      {state > 0 && (
        <span className="text-xl">
          {underlineTitle}
        </span>
      )}
      <div className="w-full flex flex-col justify-center items-center">
        <input
          type="range"
          min={min}
          max={max}
          className="[&::-webkit-slider-thumb]:w-2.5
                    [&::-webkit-slider-thumb]:h-2.5
                    [&::-webkit-slider-thumb]:-mt-0.5
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:duration-150
                    [&::-webkit-slider-thumb]:ease-in-out
                    [&::-webkit-slider-thumb]:dark:bg-slate-700
                    
                    [&::-moz-range-thumb]:w-2.5
                    [&::-moz-range-thumb]:h-2.5
                    [&::-moz-range-thumb]:appearance-none
                    [&::-moz-range-thumb]:bg-white
                    [&::-moz-range-thumb]:border-4
                    [&::-moz-range-thumb]:border-blue-600
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:transition-all
                    [&::-moz-range-thumb]:duration-150
                    [&::-moz-range-thumb]:ease-in-out
                    
                    [&::-webkit-slider-runnable-track]:w-full
                    [&::-webkit-slider-runnable-track]:h-2
                    [&::-webkit-slider-runnable-track]:bg-gray-100
                    [&::-webkit-slider-runnable-track]:rounded-full
                    [&::-webkit-slider-runnable-track]:dark:bg-gray-700
                    
                    [&::-moz-range-track]:w-full
                    [&::-moz-range-track]:h-2
                    [&::-moz-range-track]:bg-gray-100
                    [&::-moz-range-track]:rounded-full"
          value={state}
          onChange={onChange}
        />
        <div className="flex justify-between items-center">
          <label htmlFor="basic-range-slider-usage" className="sr-only">
            {labelMin ?? numberWithCommas(min)}
          </label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
      </div>
    </div>
  );
}

export default SliderInput;
