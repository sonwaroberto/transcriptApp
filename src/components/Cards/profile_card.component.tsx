import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons, {IconType} from 'components/Icon/icons.component';
import styles from './profileCard.styles';
type ProfileButtonProps = {
  btnText: string;
  disabled?: boolean;
  onPress?: (e?: any) => any;
  icon: IconType;
  loading?: boolean;
};
const ProfileButton: React.FC<ProfileButtonProps> = ({
  btnText,
  onPress,
  icon,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styles.spaceButton]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <View style={styles.leftContainerButton}>
        <Icons size={25} icon={icon} />
        <Text style={styles.btnText}>{btnText}</Text>
      </View>
      {loading && <ActivityIndicator size={'small'} />}
      <Icons size={25} icon={IconType.DOWN_CHEVRON} />
    </TouchableOpacity>
  );
};

export default ProfileButton;
