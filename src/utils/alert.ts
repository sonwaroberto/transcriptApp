import {Alert} from 'react-native';

export const alertMessage = (title: string, subText: string) =>
  Alert.alert(
    `${title}`,
    `${subText}`,
    [
      {
        text: 'ok',
        onPress: () => {},
        style: 'destructive',
      },
    ],
    {cancelable: false},
  );
