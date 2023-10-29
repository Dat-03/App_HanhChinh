import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectList, SelectListProps} from 'react-native-dropdown-select-list';

const SelectDropDown: React.FunctionComponent<SelectListProps> = props => {
  return (
    <View>
      <SelectList
        setSelected={(val: React.SetStateAction<string>) =>
          props.setSelected(val)
        }
        data={props.data}
        save="key"
        onSelect={props.onSelect}
        search={props.search}
        boxStyles={props.boxStyles}
        inputStyles={props.inputStyles}
        defaultOption={props.defaultOption}
        searchPlaceholder={props.searchPlaceholder}
        placeholder={props.placeholder}
        maxHeight={100}
      />
    </View>
  );
};

export default SelectDropDown;
