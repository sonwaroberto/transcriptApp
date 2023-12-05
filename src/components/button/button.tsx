import React, {FC} from 'react';
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native';
import styles from './button.style';
import theme from '../../resources/theme';

type Props = {
  btnText: String;
  navigation?: any;
  disabled?: boolean;
  onPress?: (e?: any) => any;
  loading?: boolean;
  btnType?: ButtonType;
  icon?: JSX.Element;
};

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

const Button: FC<Props> = ({
  btnText,
  btnType = ButtonType.PRIMARY,
  disabled = false,
  onPress = () => {},
  loading = false,
}) => {
  let active, disable, color;
  if (btnType === ButtonType.PRIMARY) {
    active = styles.primaryButton;
    color = theme.white;
  }

  if (btnType === ButtonType.SECONDARY) {
    active = styles.secondaryButton;
    color = theme.white;
  }
  if (btnType === ButtonType.ERROR) {
    active = styles.error;
    color = theme.white;
  }
  if (disabled) {
    disable = styles.disableBtn;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, active, disabled ? disable : {}]}>
      <Text style={styles.btnText}>{btnText}</Text>
      <View style={styles.loading}>
        {loading && <ActivityIndicator size={'small'} color={color} />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
