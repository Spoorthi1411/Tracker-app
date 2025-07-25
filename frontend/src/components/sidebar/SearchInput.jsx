import React from 'react';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input 
        type="text" 
        placeholder="Search..." 
        className="input input-bordered rounded-full"
      />
      <button 
        type="submit" 
        className="btn btn-circle bg-sky-500 text-white"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchInput;




// import React from 'react';

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//       <input 
//         type="text" 
//         placeholder="Search..." 
//         className="input input-bordered rounded-full"
//       />
//       <button 
//         type="submit" 
//         className="btn btn-circle bg-sky-500 text-white"
//       >
//         🔍
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
