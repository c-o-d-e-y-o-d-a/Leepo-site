import React from 'react'

const Search = () => {
    const renderCards = (TotalListing, to, from) => {
  return TotalListing
    .filter(item => item.to === to && item.from === from)
    .map((item, index) => <Card key={index} {...item} />);
};


  return (
    <div>
      search
    </div>
  )
}

export default Search
