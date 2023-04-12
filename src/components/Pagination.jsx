import React from 'react';

const Pagination = ( { num, setPage } ) => {
  return (
    <div>
      <button onClick={() => setPage(num)}>
                {num}
            </button>
    </div>
  );
};

export default Pagination;