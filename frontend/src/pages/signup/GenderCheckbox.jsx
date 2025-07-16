import React, { useState } from 'react';

const GenderCheckbox = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleCheckboxChange = (gender) => {
    setSelectedGender((prev) => (prev === gender ? '' : gender));
  };

  return (
    <div className='mt-2 flex gap-x-6 items-center'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer flex items-center'>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === 'male'}
            onChange={() => handleCheckboxChange('male')}
          />
          <span className='label-text'>Male</span>
        </label>
      </div>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer flex items-center'>
          <input
            type='checkbox'
            className='checkbox border-slate-900'
            checked={selectedGender === 'female'}
            onChange={() => handleCheckboxChange('female')}
          />
          <span className='label-text'>Female</span>
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