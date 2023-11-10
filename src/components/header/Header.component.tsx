import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Header.style';
import {useNavigation} from '@react-navigation/native';
import theme from '../../resources/theme';
import Icons from '../icon/icons.component';
import {IconType} from '../icon/icons.component';

type Props = {
  headerName: string;
  color?: string;
};

const Header: React.FC<Props> = ({headerName, color = theme.gray}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={
          headerName?.length > 15 ? styles.backArrowException : styles.backArrow
        }
        onPress={() => navigation.goBack()}>
        <Icons icon={IconType.ARROW_LEFT} size={25} color={theme.black} />
      </TouchableOpacity>
      <Text style={[styles.headerName, {color: color}]}>{headerName}</Text>
    </View>
  );
};

export default Header;
