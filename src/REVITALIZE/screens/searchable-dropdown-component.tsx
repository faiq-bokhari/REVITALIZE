import React, { useState } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

const SearchableDropdownComponent = ({ options, onItemSelect }) => {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleTextChange = (text) => {
    const newOptions = options.filter((option) => option.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredOptions(newOptions);
  };

  return (
    <SearchableDropdown
      onTextChange={handleTextChange}
      items={filteredOptions}
      defaultIndex={0}
      resetValue={false}
      textInputProps={{
        placeholder: 'Search Options...',
        underlineColorAndroid: 'transparent',
        style: {
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
        },
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
      onItemSelect={onItemSelect}
      textInputStyle={{
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FAF7F6',
      }}
      itemStyle={{
        padding: 10,
        marginTop: 2,
        backgroundColor: '#FAF9F8',
        borderColor: '#bbb',
        borderWidth: 1,
      }}
      itemTextStyle={{ color: '#222' }}
      itemsContainerStyle={{ maxHeight: 140 }}
      placeholder="Select item"
      underlineColorAndroid="transparent"
    />
  );
};

export default SearchableDropdownComponent;