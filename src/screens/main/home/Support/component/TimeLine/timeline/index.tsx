import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

const timelineData = [
  { time: '09:00', title: 'Meeting', description: 'Discuss project details' },
  { time: '10:30', title: 'Lunch', description: 'Enjoy your meal' },
  { time: '14:00', title: 'Presentation', description: 'Share project progress' },
  // Add more timeline items as needed
];

const TimelineScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Timeline
        data={timelineData}
        circleSize={20}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TimelineScreen;