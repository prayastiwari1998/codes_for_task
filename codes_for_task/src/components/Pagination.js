import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [currentRange, setCurrentRange] = useState(0);
  const pageNumbers = [];
  const totalPageCount = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(i);
  }

  const nextRange = () => {
    if ((currentRange + 1) * 3 < totalPageCount) {
      setCurrentRange(currentRange + 1);
    }
  };

  const prevRange = () => {
    if (currentRange > 0) {
      setCurrentRange(currentRange - 1);
    }
  };

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-2">
        {currentRange > 0 && (
          <li>
            <button 
              onClick={prevRange}
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              &lt;&lt;
            </button>
          </li>
        )}
        {pageNumbers.slice(currentRange * 3, currentRange * 3 + 3).map(number => (
          <li key={number}>
            <button 
              onClick={() => paginate(number)} 
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              {number}
            </button>
          </li>
        ))}
        {(currentRange + 1) * 3 < totalPageCount && (
          <li>
            <button 
              onClick={nextRange}
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              &gt;&gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
