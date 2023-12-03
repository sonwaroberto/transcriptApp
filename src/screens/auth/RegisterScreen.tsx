import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './LoginScreen.style';
import {Formik} from 'formik';
import Button from '../../components/button/button';
import CustomTextInput from '../../components/input/input';
import signUpValidationSchema from '../../schema/register';
import {RegisterDataType} from '../../interface/auth/AuthTypes';
import {Icons} from '../../components';
import {IconType} from '../../components/icon/icons.component';
import theme from '../../resources/theme';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import {RootState} from '../../redux/store';
import Notifications, {
  NotificationType,
} from '../../components/notification/notification.component';
import {registerFunc} from '../../redux/auth/thunk/auth.thunk';
import {AnyAction} from 'redux';

type Props = {
  navigation: any;
};
const initialValuesInput: RegisterDataType = {
  fullName: '',
  phoneNumber: '+237654194160',
  email: 'test@gmail.com',
  password: '1robertoA#',
  confirmPassword: '1robertoA#',
  matricule: '',
};

const RegisterScreen: FC<Props> = ({navigation}) => {
  const loginState = useAppSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [notify, setNotify] = useState<boolean>(false);
  const [details, setDetails] = useState({
    type: NotificationType.DEFAULT,
    message: 'password error',
  });

  const handleSignUp = async (values: RegisterDataType) => {
    console.log('mein values', values);
    setSubmitted(true);
    dispatch(registerFunc(values) as unknown as AnyAction);
  };

  useEffect(() => {
    if (loginState.isSuccess && loginState.user?.id) {
      console.log('login state', loginState.user);
      navigation.navigate('Dashboard');
    }
  }, [dispatch, loginState, navigation]);

  useEffect(() => {
    if (submitted) {
      if (loginState.isError) {
        setNotify(true);
        setDetails({
          type: NotificationType.DANGER,
          message: loginState.message,
        });
        setSubmitted(false);
      }
      if (loginState.isSuccess) {
        setNotify(true);
        setDetails({
          type: NotificationType.SUCCESS,
          message: 'successfully login',
        });
        setSubmitted(false);
      }
    }
  }, [loginState, submitted]);

  const renderForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isValid,
  }: any) => (
    <>
      <CustomTextInput
        placeholder="Matriculation Number"
        onChangeText={handleChange('matricule')}
        onBlur={handleBlur('matricule')}
        value={values.matricule}
        error={errors.matricule}
        icon={
          <Icons size={20} icon={IconType.IDENTIFICATION} color={theme.gray} />
        }
      />
      <CustomTextInput
        placeholder="Full Name"
        onChangeText={handleChange('fullName')}
        onBlur={handleBlur('fullName')}
        value={values.fullName}
        error={errors.fullName}
        icon={<Icons size={20} icon={IconType.USER} color={theme.gray} />}
      />
      <CustomTextInput
        placeholder="Phone Number"
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
        value={values.phoneNumber}
        error={errors.phoneNumber}
        icon={<Icons size={20} icon={IconType.PHONE} color={theme.gray} />}
      />
      <CustomTextInput
        placeholder="Email Address"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="email-address"
        error={errors.email}
        icon={<Icons size={20} icon={IconType.EMAIL} color={theme.gray} />}
      />
      <CustomTextInput
        placeholder="Password"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        secure={true}
        error={errors.password}
        icon={<Icons size={20} icon={IconType.LOCK} color={theme.gray} />}
      />
      <CustomTextInput
        placeholder="Confirm Password"
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
        secure={true}
        error={errors.confirmPassword}
        icon={<Icons size={20} icon={IconType.LOCK} color={theme.gray} />}
      />
      <View style={styles.buttonWrapper}>
        <Button
          disabled={!isValid}
          btnText="Register"
          onPress={handleSubmit}
          // loading={loading}
        />
      </View>
    </>
  );

  // if (isError) {
  //   alertMessage('An error occured', errorMessage || '');
  // }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.textBold]}>
              Join E-Transcript
            </Text>
            <Text style={styles.text}>Please provide the following</Text>
          </View>
          <View style={styles.formContainer}>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={initialValuesInput}
              onSubmit={handleSignUp}>
              {renderForm}
            </Formik>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.text2}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.text2, styles.textSignUp]}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {notify && (
        <Notifications
          show={notify}
          setShow={setNotify}
          type={details.type}
          message={details.message}
        />
      )}
    </SafeAreaView>
  );
};

export default RegisterScreen;
