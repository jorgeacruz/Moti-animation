# Moti Animation 
With Moti, this task becomes simple throughout the entire process! Built on Reanimated 2, it makes creating smooth animations easier for both native apps and the web. With just a few commands, you can create stunning transitions and animations, customizing properties like opacity, movement, scale, and rotation while ensuring fluidity and efficiency.

![IMAGE ALT TEXT HERE](https://zippy-naiad-258ebd.netlify.app/images/image1.png)

## Why Use Moti:

- Simplicity: Create amazing animations with just a few lines of code.
- High Performance: 60 FPS animations running on the native thread.
- Flexibility: Animate properties like opacity, scale, rotation, and position.
- Custom Transitions: Adjust duration, delays, and easing effects as needed.
- Conditional Animations: Trigger animations based on application events or states.

## Get Started:

- Install: npm install moti or yarn add moti
- Import: import { MotiView } from 'moti';
- Wrap your elements with MotiView and add animations!

## Simple like this

```
import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

const MyComponent = () => {
  return (
    <MotiView
      style={{ width: 100, height: 100, backgroundColor: 'red' }}
      from={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 500 }}
    >
      <Text>Animação com Moti</Text>
    </MotiView>
  );
};

export default MyComponent;
```

### [Moti Docs](https://moti.fyi)

### [Referência](https://lnkd.in/dYZMUsJf)

## Enjoy
