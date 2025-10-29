import {useState} from "react";
import Slider from "@mui/material/Slider";

export default function SalaryRangeSlider({ value, onChange }) {
  //const [value, setValue] = useState([30000, 120000]); // [min, max]

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    onChange(newValue);
  };

  const valuetext = (val) => `₹${Math.round(val / 1000)}k`;

  return (
    <div className="flex flex-col gap-1 min-w-[260px]">
      <div className="flex justify-between text-sm text-gray-700">
        <span className="font-semibold">Salary Per Month</span>
        <span className="font-semibold">{`₹${Math.round(value[0] / 1000)}k - ₹${Math.round(value[1] / 1000)}k`}</span>
      </div>
      <Slider
        getAriaLabel={() => "Salary range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={10000}
        max={200000}
        step={5000}
        sx={{
          color: "black",                 // black slider
          height: 4,                      // sleek thin track
          "& .MuiSlider-thumb": {
            height: 14,
            width: 14,
            backgroundColor: "black",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(0,0,0,0.1)"
            }
          },
          "& .MuiSlider-track": {
            border: "none"
          },
          "& .MuiSlider-rail": {
            opacity: 0.3,
            backgroundColor: "#9ca3af"     // gray-400
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "black",
            color: "white",
            fontSize: "0.75rem",
            borderRadius: "4px",
            padding: "2px 6px"
          }
        }}
      />
    </div>
  );
}
