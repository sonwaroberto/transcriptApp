import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import React, {FC} from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './keyboardAvoidingWrapper.styles';

type Props = {
  children: any;
};
const KeyboardAvoidingWrapper: FC<Props> = ({children}) => {
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={48}
      extraHeight={48}
      showsVerticalScrollIndicator={false}
      style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidingWrapper;
