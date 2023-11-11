import React, {Dispatch, SetStateAction, useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './notification.style';
import theme from '../../resources/theme';
import Text from '../Text/Text.component';

const Notifications: React.FC<Props> = ({message, show, setShow, type}) => {
  const topPos = useSharedValue<number | string>(-100);
  const opacity = useSharedValue<number>(0);
  const topPosLoad = useAnimatedStyle(() => {
    return {
      top: topPos.value,
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    if (show) {
      topPos.value = withTiming(theme.screenHeight * 0.06, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      opacity.value = withTiming(1, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
    if (!show) {
      topPos.value = withTiming(-100, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      opacity.value = withTiming(0, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [show, setShow, topPos, opacity]);

  return (
    <Animated.View
      style={[
        styles.mainContainer,
        topPosLoad,
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
    </Animated.View>
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
