import React from 'react';
import {Image} from 'react-native';

import styles from './icons.styles';

type Props = {
  icon: IconType;
  size: number | string;
  color?: string;
};

export enum IconType {
  CHEVRON = 'chevron',
  CHEVRON_UP = 'chevron-up',
  ARROW_LEFT = 'arrow_left',
  EYE_INVISIBLE = 'eye_invisible',
  EYE_VISIBLE = 'eye_visible',
  HELP = 'help',
  MAIL = 'mail',
  MAP_PIN = 'map_pin',
  MINUS = 'minus',
  OFFICE = 'office',
  PENCIL = 'pencil',
  PHONE = 'phone',
  PHONE_MSG = 'phone_msg',
  PLANNING = 'planning',
  PLUS = 'plus',
  RELOAD = 'reload',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  CHECK = 'check',
  CANCEL = 'cancel',
  CHIP = 'chip',
  SIGNAL = 'signal',
  BUILDING = 'building',
  USERINFO = 'user-info',
  MULTIPLY = 'multiply',
  SHOPPING_CART = 'shopping-cart',
  SEARCH = 'search',
  HEART = 'heart',
  WHITE_HEART = 'white-heart',
  IDENTIFICATION = 'identification',
  USER_PROFILE = 'user-profile',
  NOTIFICATION = 'notification',
  FILTER = 'filter',
  Feather = 'Feather',
  CHARGE_ALERT = 'charge-alert',
  HISTORY = 'history',
  FEATHER = 'feather',
  FILE = 'file',
  MORE = 'more',
  SUMMARY = 'summary',
  PRIVACY = 'privacy',
  LANGUAGE = 'language',
  CREDIT_CARD = 'credit-card',
  CUSTOMER_SUPPORT = 'customer-support',
  PROFILE = 'profile',
  PROFILE_FILLED = 'profile_filled',
  DOWN_CHEVRON = 'down-chevron',
  HEART_RED = 'heart-red',
  CONNECTED = 'connected',
  DASHBOARD = 'dashboard',
  DASHBOARD_FILLED = 'dashboard-filled',
  ORDER_HISTORY = 'order-history',
  TRANSACTION_HISTORY = 'transaction-history',
  INFORMATION = 'information',
  GITHUB = 'github',
  USER = 'user',
  EMAIL = 'email',
  LOCK = 'lock',
  LOGIN = 'login',
  ADD = 'add',
  HOME = 'home',
  HOME_FILLED = 'home_filled',
  JOB = 'job',
  JOB_FILLED = 'job_filled',
  MESSAGE = 'message',
  MESSAGE_FILLED = 'message_filled',
  NETWORK = 'network',
  NETWORK_FILLED = 'network_filled',
  NOTIFICATION2 = 'notification2',
  NOTIFICATION_FILLED = 'notification_filled',
  SEND = 'send',
  AGREEMENT = 'agreement',
  SEND_FILLED = 'send_filled',
  PROFILE2 = 'profile2',
}

const Icons: React.FC<Props> = ({icon, size = 35, color}) => {
  let _icon = require('../../resources/icons/help.png');

  if (icon === IconType.CHEVRON) {
    _icon = require('../../resources/icons/chevron.png');
  }
  if (icon === IconType.CHEVRON_UP) {
    _icon = require('../../resources/icons/chevron-up.png');
  }

  if (icon === IconType.ARROW_LEFT) {
    _icon = require('../../resources/icons/arrow-left.png');
  }

  if (icon === IconType.EYE_INVISIBLE) {
    _icon = require('../../resources/icons/eye-invisible.png');
  }

  if (icon === IconType.EYE_VISIBLE) {
    _icon = require('../../resources/icons/eye-visible.png');
  }

  if (icon === IconType.HELP) {
    _icon = require('../../resources/icons/help.png');
  }

  if (icon === IconType.MAIL) {
    _icon = require('../../resources/icons/mail.png');
  }

  if (icon === IconType.MAP_PIN) {
    _icon = require('../../resources/icons/map-pin.png');
  }

  if (icon === IconType.MINUS) {
    _icon = require('../../resources/icons/minus.png');
  }

  if (icon === IconType.OFFICE) {
    _icon = require('../../resources/icons/office.png');
  }

  if (icon === IconType.PENCIL) {
    _icon = require('../../resources/icons/pencil.png');
  }

  if (icon === IconType.PHONE) {
    _icon = require('../../resources/icons/phone-call.png');
  }

  if (icon === IconType.PHONE_MSG) {
    _icon = require('../../resources/icons/phone-message.png');
  }

  if (icon === IconType.PLANNING) {
    _icon = require('../../resources/icons/planning.png');
  }

  if (icon === IconType.PLUS) {
    _icon = require('../../resources/icons/plus.png');
  }

  if (icon === IconType.RELOAD) {
    _icon = require('../../resources/icons/reload.png');
  }

  if (icon === IconType.GOOGLE) {
    _icon = require('../../resources/icons/google.png');
  }

  if (icon === IconType.FACEBOOK) {
    _icon = require('../../resources/icons/google.png');
  }

  if (icon === IconType.CHECK) {
    _icon = require('../../resources/icons/check.png');
  }

  if (icon === IconType.CANCEL) {
    _icon = require('../../resources/icons/cancel.png');
  }
  if (icon === IconType.USERINFO) {
    _icon = require('../../resources/icons/user-info.png');
  }
  if (icon === IconType.SHOPPING_CART) {
    _icon = require('../../resources/icons/shopping-cart.png');
  }
  if (icon === IconType.SEARCH) {
    _icon = require('../../resources/icons/search.png');
  }
  if (icon === IconType.HEART) {
    _icon = require('../../resources/icons/heart.png');
  }
  if (icon === IconType.WHITE_HEART) {
    _icon = require('../../resources/icons/white-heart.png');
  }
  if (icon === IconType.IDENTIFICATION) {
    _icon = require('../../resources/icons/identification.png');
  }
  if (icon === IconType.NOTIFICATION) {
    _icon = require('../../resources/icons/notification-bell.png');
  }
  if (icon === IconType.FILTER) {
    _icon = require('../../resources/icons/filter.png');
  }
  if (icon === IconType.CHARGE_ALERT) {
    _icon = require('../../resources/icons/no-connection.png');
  }
  if (icon === IconType.HISTORY) {
    _icon = require('../../resources/icons/history.png');
  }
  if (icon === IconType.FILE) {
    _icon = require('../../resources/icons/file.png');
  }
  if (icon === IconType.MORE) {
    _icon = require('../../resources/icons/more.png');
  }
  if (icon === IconType.SUMMARY) {
    _icon = require('../../resources/icons/summary.png');
  }
  if (icon === IconType.PRIVACY) {
    _icon = require('../../resources/icons/privacy.png');
  }
  if (icon === IconType.LANGUAGE) {
    _icon = require('../../resources/icons/language.png');
  }
  if (icon === IconType.CREDIT_CARD) {
    _icon = require('../../resources/icons/credit-card.png');
  }
  if (icon === IconType.CUSTOMER_SUPPORT) {
    _icon = require('../../resources/icons/customer-support.png');
  }
  if (icon === IconType.PROFILE) {
    _icon = require('../../resources/icons/profile.png');
  }
  if (icon === IconType.DOWN_CHEVRON) {
    _icon = require('../../resources/icons/down-chevron.png');
  }
  if (icon === IconType.HEART_RED) {
    _icon = require('../../resources/icons/heart-red.png');
  }
  if (icon === IconType.DASHBOARD) {
    _icon = require('../../resources/icons/dashboard.png');
  }
  if (icon === IconType.DASHBOARD_FILLED) {
    _icon = require('../../resources/icons/dashboard-filled.png');
  }
  if (icon === IconType.PROFILE_FILLED) {
    _icon = require('../../resources/icons/user-filled.png');
  }

  if (icon === IconType.ORDER_HISTORY) {
    _icon = require('../../resources/icons/order-history.png');
  }

  if (icon === IconType.TRANSACTION_HISTORY) {
    _icon = require('../../resources/icons/transaction-history.png');
  }

  if (icon === IconType.INFORMATION) {
    _icon = require('../../resources/icons/information.png');
  }

  if (icon === IconType.GITHUB) {
    _icon = require('../../resources/icons/github.png');
  }

  if (icon === IconType.USER) {
    _icon = require('../../resources/icons/user.png');
  }
  if (icon === IconType.EMAIL) {
    _icon = require('../../resources/icons/email.png');
  }
  if (icon === IconType.LOCK) {
    _icon = require('../../resources/icons/lock.png');
  }
  if (icon === IconType.LOGIN) {
    _icon = require('../../resources/icons/login.png');
  }
  if (icon === IconType.PHONE) {
    _icon = require('../../resources/icons/phone.png');
  }
  if (icon === IconType.HOME) {
    _icon = require('../../resources/icons/home.png');
  }
  if (icon === IconType.HOME_FILLED) {
    _icon = require('../../resources/icons/home-filled.png');
  }

  if (icon === IconType.JOB) {
    _icon = require('../../resources/icons/job.png');
  }
  if (icon === IconType.JOB_FILLED) {
    _icon = require('../../resources/icons/job-filled.png');
  }
  if (icon === IconType.MESSAGE) {
    _icon = require('../../resources/icons/message.png');
  }
  if (icon === IconType.MESSAGE_FILLED) {
    _icon = require('../../resources/icons/message-filled.png');
  }
  if (icon === IconType.NETWORK) {
    _icon = require('../../resources/icons/network.png');
  }
  if (icon === IconType.NETWORK_FILLED) {
    _icon = require('../../resources/icons/network-filled.png');
  }
  if (icon === IconType.NOTIFICATION2) {
    _icon = require('../../resources/icons/notification.png');
  }
  if (icon === IconType.NOTIFICATION_FILLED) {
    _icon = require('../../resources/icons/notification-filled.png');
  }
  if (icon === IconType.SEND) {
    _icon = require('../../resources/icons/send.png');
  }
  if (icon === IconType.SEND_FILLED) {
    _icon = require('../../resources/icons/send-filled.png');
  }
  if (icon === IconType.PROFILE_FILLED) {
    _icon = require('../../resources/icons/profile-filled.png');
  }
  if (icon === IconType.AGREEMENT) {
    _icon = require('../../resources/icons/agreement.png');
  }
  if (icon === IconType.PROFILE2) {
    _icon = require('../../resources/icons/profile2.png');
  }
  if (icon === IconType.ARROW_LEFT) {
    _icon = require('../../resources/icons/arrow-left.png');
  }

  return (
    <Image
      source={_icon}
      style={[
        styles.iconImage,
        {
          width: size,
          height: size,
          tintColor: color,
        },
      ]}
    />
  );
};

export default Icons;
