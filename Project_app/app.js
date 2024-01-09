import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <Text>Пример React Native приложения</Text>
      <Text>Счетчик: {counter}</Text>
      <Button title="Увеличить счетчик" onPress={incrementCounter} />
    </View>
  );
};

export default App;
