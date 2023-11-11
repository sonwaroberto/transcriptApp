import React, {FC, useState} from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './input.style';
import theme from '../../resources/theme';
import Icons, {IconType} from '../icon/icons.component';

interface CustomTextInputProps extends TextInputProps {
  field?: string;
  error?: string;
  secure?: boolean;
  icon?: JSX.Element;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  error,
  secure = false,
  icon = null,
  ...props
}) => {
  const showError = error && error.length > 0;
  const [_secure, setSecure] = useState(secure);

  return (
    <View style={styles.textInputContainer}>
      <View style={styles.inputContainer}>
        {icon && icon}
        <TextInput
          placeholderTextColor={theme.gray}
          style={styles.textInput}
          {...props}
          secureTextEntry={_secure}
        />
        {secure && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSecure(!_secure)}>
            <Icons
              size={22}
              icon={!_secure ? IconType.EYE_INVISIBLE : IconType.EYE_VISIBLE}
              color={theme.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
      {showError && <Text style={styles.inputInvalidText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;
