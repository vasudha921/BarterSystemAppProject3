import React from 'react';

import {Image} from 'react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
     
      <Image
      source={require("../assets/animation.jpeg")}
      style={{ width:130, height: 130}}/>
    )
  }
}


