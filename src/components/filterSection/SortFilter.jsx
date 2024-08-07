import React, { useEffect, useState } from "react";
import { getSelectedSort } from "../../features/filterSlice";
import { useDispatch } from "react-redux";

const SortFilter = () => {
  const dispatch = useDispatch();

  const handleSortByPrice = (e) => {
    dispatch(getSelectedSort(e.target.value));
  };

  return (
    <section>
      <h5>Sort by</h5>
      <label className="form-check-label">
        <input
          onChange={handleSortByPrice}
          className="form-check-input"
          type="radio"
          name="price"
          value="Low to High"
        />
        Price - Low to High
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          onChange={handleSortByPrice}
          className="form-check-input"
          type="radio"
          name="price"
          value="High to Low"
        />
        Price - High to Low
      </label>{" "}
      <br />
    </section>
  );
};

export default SortFilter;
