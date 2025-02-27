import React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

const BackgroundShape = () => {
  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 200 200">
        <Path
          fill="#FFB726"
          d="M51.7,-59C61.5,-53.4,60.1,-31.9,60.9,-12.8C61.8,6.2,64.9,22.7,58.3,33.3C51.7,43.8,35.5,48.4,21.2,50.1C6.9,51.8,-5.6,50.6,-21.8,49.3C-38,48,-58,46.5,-67.7,36C-77.3,25.6,-76.6,6.1,-67.9,-6.6C-59.3,-19.3,-42.7,-25.2,-30.1,-30.3C-17.4,-35.3,-8.7,-39.5,6.1,-46.8C21,-54.1,41.9,-64.5,51.7,-59Z"
          transform="translate(100 100)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -70, // Changed from -20
    right: -70, // Changed from -20
    zIndex: 0, // Changed from -1
    width: 300, // Add explicit width
    height: 300, // Add explicit height
  },
});

export default BackgroundShape;
