import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-x-6 mt-4 mb-2">
      {/* Male Checkbox */}
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      {/* Female Checkbox */}
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;




// import React from 'react';

// const GenderCheckbox = () => {
//   return (
//     <div className='mt-2 flex gap-x-6 items-center'>
//       <div className='form-control'>
//         <label className='label gap-2 cursor-pointer flex items-center'>
//           <input type='checkbox' className='checkbox border-slate-900' />
//           <span className='label-text'>Male</span>
//         </label>
//       </div>
//       <div className='form-control'>
//         <label className='label gap-2 cursor-pointer flex items-center'>
//           <input type='checkbox' className='checkbox border-slate-900' />
//           <span className='label-text'>Female</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckbox;