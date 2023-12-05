import React, {Dispatch, FC, SetStateAction} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './otp.style';
import {Input, Button} from '../../components';
import {ButtonType} from '../../components/button/button';
import KeyboardAvoidingWrapper from '../../components/keyboard/KeyboardAvoidingWrapper';

type OtpTypes = {
  modalText: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  weight?: string;
  setWeight: (value: number | string) => void;
  label?: string;
  onPress?: (text: string) => void;
  isLoading?: boolean;
  buttonActionText?: string;
};
const Modals: FC<OtpTypes> = ({
  show,
  modalText,
  setShow,
  weight = '',
  setWeight,
  label,
  onPress,
  isLoading,
  buttonActionText,
}) => {
  const handleModalClose = () => {
    setShow(false);
  };
  return (
    <View style={styles.modal}>
      <Modal
        visible={show}
        transparent={true}
        animationType="fade"
        onRequestClose={handleModalClose}>
        <TouchableOpacity style={styles.modalBody} activeOpacity={1}>
          <KeyboardAvoidingWrapper>
            {/* Modal content goes here */}
            <View style={styles.modalContent}>
              <Text style={styles.taraText}>{modalText}</Text>
              <Text style={styles.taraDescription}>{label}</Text>
              <View style={styles.taraInputContainer}>
                <Input
                  type="numeric"
                  label={label}
                  placeholder={'enter otp code'}
                  value={weight}
                  setValue={setWeight}
                  otp={true}
                />
              </View>
              <View style={styles.modalPrimaryButton}>
                <Button
                  btnType={ButtonType.PRIMARY}
                  btnText={
                    buttonActionText ? buttonActionText : 'confirm provider'
                  }
                  onPress={onPress}
                  loading={isLoading}
                  disabled={!weight || isLoading}
                />
              </View>
              <View style={styles.taraButtons}>
                <Button
                  btnType={ButtonType.ERROR}
                  btnText={'cancel'}
                  onPress={() => handleModalClose()}
                />
              </View>
            </View>
          </KeyboardAvoidingWrapper>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Modals;
