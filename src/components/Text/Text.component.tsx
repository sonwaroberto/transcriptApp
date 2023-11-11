import React from 'react';

import {Text} from 'react-native';

import styles from './Text.style';

type Props = {
  style?: any;
  children: any;
};

const MyText: React.FC<Props> = ({style, children}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default MyText;
