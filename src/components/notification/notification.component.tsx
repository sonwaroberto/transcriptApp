import React, {Dispatch, SetStateAction, useEffect} from 'react';

import styles from './notification.style';
import theme from '../../resources/theme';
import Text from '../Text/Text.component';
import {View} from 'react-native';

const Notifications: React.FC<Props> = ({message, show, setShow, type}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [show, setShow]);

  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor:
            type === NotificationType.DANGER
              ? theme.error
              : type === NotificationType.SUCCESS
              ? theme.success
              : theme.white,
        },
      ]}>
      <Text
        style={[
          styles.notificationText,
          {
            color:
              type === NotificationType.DEFAULT ? theme.primary : theme.white,
          },
        ]}>
        {message}
      </Text>
    </View>
  );
};

export default Notifications;

type Props = {
  message: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  type: NotificationType;
};

export enum NotificationType {
  SUCCESS,
  DANGER,
  DEFAULT,
}
