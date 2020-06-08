import React from 'react'
import Select from 'react-select'

const DropdownExampleSimple = ({ options, onChange, defaultValue }) => (
  <Select
    className="basic-single"
    classNamePrefix="select"
    isSearchable
    placeholder="Vui lòng chọn role ..."
    onChange={onChange}
    options={options}
  />
)

export default DropdownExampleSimple
