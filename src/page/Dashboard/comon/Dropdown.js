import React from 'react'
import Select from 'react-select'

const options = [
  { label: 'Choice 1', value: 1 },
  { label: 'Choice 2', value: 2 },
  { label: 'Choice 3', value: 3 },
]

const DropdownExampleSimple = () => (
  <Select
    className="basic-single"
    classNamePrefix="select"
    isSearchable
    options={options}
  />
)

export default DropdownExampleSimple
