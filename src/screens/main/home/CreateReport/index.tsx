import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';

const CreateReport = () => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Mobiles'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <View>
      <SelectList
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
        data={data}
        save="value"
        onSelect={() => console.log(selected)}
      />
    </View>
  );
};

export default CreateReport;
