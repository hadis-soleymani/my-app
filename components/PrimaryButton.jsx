import React, { useState } from "react";
import { View, Text } from "react-native";

function PrimaryButton({ childen }) {
  return (
    <View>
      <Text>{childen}</Text>
    </View>
  );
}

export default PrimaryButton;
