import PropTypes from "prop-types";
import React from "react";
import { FilterMark, FilterInput, FilterSpan } from "./Filter.styled";

const Filter = ({ value, onChange }) => (
  <FilterMark>
    <FilterSpan> find contacts by name </FilterSpan>

    <FilterInput type="text" name="filter" value={value} onChange={onChange} />
  </FilterMark>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
<div></div>;
