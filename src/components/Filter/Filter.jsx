import { FilterField, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, filterHandler }) => (
  <FilterField>
    <FilterLabel htmlFor="filter">Find contacts by Name</FilterLabel>
    <FilterInput
      type="text"
      id="filter"
      name="name"
      placeholder="Enter filter"
      onChange={filterHandler}
      value={filter}
    ></FilterInput>
  </FilterField>
);
