import{ useEffect, useState } from "react";
import "./Gallary.css";
import PropTypes from "prop-types"; // Import PropTypes



function Gallary({items}) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
    let filters = ["event1", "event2", "event3"];
  
    const handleFilterButtonClick = (selectedCategory) => {
      if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
  
    useEffect(() => {
      filterItems();
    }, [selectedFilters]);
  
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = items.filter((item) => item.category === selectedCategory);
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...items]);
      }
    };

  return (
    <>
     <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">

      {filteredItems.map((item, idx) => (
        <div key={`items-${idx}`} className="item">
          <img src={item.imgUrl} alt={item.name} />
          <h4>{item.name}</h4>
          <h5 className="category">{item.category}</h5>
          <h6>Type: {item.type}</h6>
        </div>
      ))}
      
      </div>
    </div>

    </>
  )
}
Gallary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default Gallary