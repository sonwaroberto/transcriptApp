import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../payment/payment.style';
import {Formik} from 'formik';
import walletValidationSchema from '../../schema/wallet';
import CustomTextInput from '../../components/input/input';
import theme from '../../resources/theme';
import {Button, Icons, Input} from '../../components';
import {IconType} from '../../components/icon/icons.component';
import {formatCurrency} from '../../utils/formatCurrency';
import axios from 'axios';
import {tokenHeaderConfig} from '../../utils/addToken';
import Modals from '../otp/otp';
import Notifications, {
  NotificationType,
} from '../../components/notification/notification.component';
import {addWalletThunk} from '../../redux/wallet/wallet.thunk';
import {useAppSelector} from '../../redux/typings';
import {RootState} from '../../redux/store';
import {ButtonType} from '../../components/button/button';
import storage from '../../utils/storage';

type Props = {
  navigation: any;
};

type InitialValuesInput = {
  phoneNumber: string;
};

const initialValuesInput: InitialValuesInput = {
  phoneNumber: '+237',
};

const Wallet: FC<Props> = ({navigation}) => {
  const [notify, setNotify] = useState<boolean>(false);
  const [details, setDetails] = useState({
    type: NotificationType.DEFAULT,
    message: 'password error',
  });
  const loginState = useAppSelector((state: RootState) => state.authSlice);
  const walletState = useAppSelector((state: RootState) => state.walletSlice);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [walletBalance, setWalletBalance] = useState<string>('0');
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [amountTopUp, setAmountTopUp] = useState<string>('0');

  useEffect(() => {
    const config = tokenHeaderConfig();

    if (config) {
      console.log('config', config);
      axios
        .get('https://api.payment.camsol.io/transaction/wallet', config)
        .then(result => {
          console.log('result', result?.data?.balance);
          setWalletBalance(result?.data?.balance);
        })
        .catch(e => {
          console.log('loading account balance err', e);
        });
    }
  }, []);

  const addWallet = async (values: InitialValuesInput) => {
    setSubmitted(true);
    console.log('Payer Phone Number', values.phoneNumber);
    setPhoneNumber(values.phoneNumber);
    const config = await tokenHeaderConfig();
    // setShowOtp(true);
    axios
      .post(
        'https://api.payment.camsol.io/transaction/add-service-provider',
        {
          providerType: 'MTN',
          serviceNumber: values.phoneNumber,
          id: '1',
        },
        config,
      )
      .then(response => {
        storage.storeInfo('@walletNumber', values.phoneNumber);
        setShowOtp(true);
        setNotify(true);
        setDetails({
          type: NotificationType.SUCCESS,
          message: 'Validate the provider account by entering the otp code',
        });
        console.log('response is', response);
      })
      .catch(e => {
        setNotify(true);
        setDetails({
          type: NotificationType.DANGER,
          message: JSON.stringify(e),
        });
        console.log('error during submission', JSON.stringify(e));
      });
  };
  const [otp, setOtp] = useState<string>('');
  const [showOtp, setShowOtp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputValue, setInputValue] = useState<any>(null);

  useEffect(() => {
    const loadWalletNumber = async () => {
      const walletNumber = await storage.load('@walletNumber');
      setInputValue(walletNumber);
    };

    loadWalletNumber();
  }, []);

  const renderForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isValid,
  }: any) => (
    <>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/mtn_momo.jpg')}
          style={styles.cardImage}
        />

        <Text style={styles.cardText}>
          Current Balance:{' '}
          <Text style={{fontWeight: 'bold'}}>
            {formatCurrency(walletBalance)}
          </Text>
        </Text>

        <CustomTextInput
          placeholder="Enter Phone Number"
          onChangeText={handleChange('phoneNumber')}
          onBlur={handleBlur('phoneNumber')}
          icon={<Icons size={20} icon={IconType.PHONE} color={theme.gray} />}
          keyboardType="numeric"
          value={inputValue ?? values.phoneNumber}
          error={errors.phoneNumber}
        />
        <View style={styles.buttonWrapper}>
          <Button
            disabled={!isValid || (loginState.isLoading && submitted)}
            btnText="Add New Provider"
            onPress={handleSubmit}
            loading={loginState.isLoading && submitted}
          />
          {inputValue && (
            <Text
              style={{
                color: theme.primary,
                fontWeight: '700',
                marginTop: 20,
              }}>
              Current Wallet Number : {inputValue}
            </Text>
          )}
        </View>
      </View>
    </>
  );

  const hadleOtp = async () => {
    setSubmitted(true);
    console.log('weigh', otp);
    const config = await tokenHeaderConfig();
    axios
      .patch(
        'https://api.payment.camsol.io/transaction/confirm-service-provider',
        {
          serviceNumber: phoneNumber,
          otpCode: otp,
        },
        config,
      )
      .then(response => {
        addWalletThunk({
          providerType: 'MTN',
          serviceNumber: phoneNumber,
          userId: loginState.user?.id,
        });
        setShowOtp(false);
        console.log('response is', response);
        setNotify(true);
        setDetails({
          type: NotificationType.SUCCESS,
          message: 'provider successfully added',
        });
        storage.storeInfo('@walletNumber', phoneNumber);
      })
      .catch(e => {
        setNotify(true);
        setDetails({
          type: NotificationType.DANGER,
          message: 'provider already exists',
        });
        console.log('error during submission', e);
      });
  };

  useEffect(() => {
    if (submitted) {
      if (walletState.isError) {
        setNotify(true);
        setDetails({
          type: NotificationType.DANGER,
          message: walletState.message,
        });
        setSubmitted(false);
      }
      if (walletState.isSuccess) {
        setNotify(true);
        setDetails({
          type: NotificationType.SUCCESS,
          message: 'Wallet added succesfully',
        });
        setSubmitted(false);
      }
    }
  }, [walletState, submitted]);
  useEffect(() => {
    // set
    console.log('ltop', otp);
  }, [otp]);

  const TopUpBalance = async () => {
    const config = tokenHeaderConfig();
    const phoneNumberWallet = await storage.load('@walletNumber');
    axios
      .post(
        'https://api.payment.camsol.io/transaction/refill-wallet',
        {
          accountNumber: phoneNumberWallet,
          amount: amountTopUp,
        },
        config,
      )
      .then(response => {
        console.log('top up', response);
      })
      .catch(e => {
        console.log('error top up', e, phoneNumberWallet, amountTopUp);
      });
  };

  return (
    <>
      <View style={[styles.wrapper, {backgroundColor: theme.white}]}>
        <Formik
          validationSchema={walletValidationSchema}
          initialValues={initialValuesInput}
          onSubmit={addWallet}>
          {renderForm}
        </Formik>
        {Number(walletBalance) > 0 && !showWallet && (
          <View style={styles.wrapper2}>
            <Button
              // disabled={!isValid || (loginState.isLoading && submitted)}
              btnText="Top Up Account"
              onPress={() => {
                setShowWallet(true);
              }}
              btnType={ButtonType.SECONDARY}
              // loading={loginState.isLoading && submitted}
            />
          </View>
        )}
        {showWallet && (
          <View style={{marginTop: 30}}>
            <Text>Enter Amount</Text>
            <View>
              <Input
                type="numeric"
                label={'Amount'}
                placeholder={'enter amount'}
                value={amountTopUp}
                setValue={setAmountTopUp}
                otp={true}
              />
            </View>
            <View>
              <Button
                btnType={ButtonType.PRIMARY}
                btnText={'Top Up Account'}
                onPress={TopUpBalance}
                // loading={isLoading}
                // disabled={!weight || isLoading}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Button
                btnType={ButtonType.ERROR}
                btnText={'cancel'}
                onPress={() => setShowWallet(false)}
              />
            </View>
          </View>
        )}
      </View>
      {notify && (
        <Notifications
          show={notify}
          setShow={setNotify}
          type={details.type}
          message={details.message}
        />
      )}
      {showOtp && (
        <Modals
          modalText="Otp validation"
          weight={otp}
          setWeight={setOtp as any}
          label={'Enter otp code to validate provider'}
          show={showOtp}
          setShow={setShowOtp}
          onPress={() => hadleOtp()}
          isLoading={false}
        />
      )}
    </>
  );
};

export default Wallet;
