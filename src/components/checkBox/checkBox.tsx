import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icons, {IconType} from '../../components/icon/icons.component';

import styles from './ToggleSwitch.styles';
import theme from '../../resources/theme';

const Checbox: React.FC<Props> = ({checkText, value, setValue, iconType}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.checkWrapper}
      onPress={() => setValue(!value)}>
      <View
        style={[
          styles.checkBox,
          {
            borderColor: value ? theme.success : '#7C869199',
            backgroundColor: value ? theme.success : theme.transparent,
          },
        ]}>
        <Icons
          size={9}
          icon={iconType}
          color={value ? theme.white : theme.transparent}
        />
      </View>
      {checkText !== undefined && (
        <Text style={styles.checkText}>{checkText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Checbox;

type Props = {
  value?: boolean;
  setValue: (value: boolean) => void;
  checkText?: string;
  iconType: IconType;
};
