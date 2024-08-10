import React from 'react';

function Pagination(props) {
  const { moviesPerPage, totalMovies, paginate, currentPage } = props;

  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handleLeftArrowClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className='bg-gray-300  p-4 mt-8 flex justify-center '>
     
      <div className='px-8'>
        <i
          className="fa-solid fa-arrow-left   hover:cursor-pointer" 
          onClick={handleLeftArrowClick}
        />
      </div>

      <div className='font-bold'>{currentPage}</div>

      <div className='px-8'>
        <i
          className="fa-solid fa-arrow-right   hover:cursor-pointer"
          onClick={handleRightArrowClick}
        />
      </div>
    </div>
  );
}

export default Pagination;