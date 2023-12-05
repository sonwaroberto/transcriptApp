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
import {loginValidationSchema} from '../../schema/login';
import CustomTextInput from '../../components/input/input';
import CheckBox from '../../components/checkBox/checkBox';
import Icons, {IconType} from '../../components/icon/icons.component';
import theme from '../../resources/theme';
import {RootState} from '../../redux/store';
import {useAppDispatch, useAppSelector} from '../../redux/typings';
import Notifications, {
  NotificationType,
} from '../../components/notification/notification.component';
import {loginFunc} from '../../redux/auth/thunk/auth.thunk';
import {resetIsState} from '../../redux/auth/slices/auth.slice';

type Props = {
  navigation: any;
};

type InitialValuesInput = {
  matricule: string;
  password: string;
};

const initialValuesInput: InitialValuesInput = {
  matricule: '',
  password: '',
};

const LoginScreen: FC<Props> = ({navigation}) => {
  const [remember, setRemeber] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const loginState = useAppSelector((state: RootState) => state.authSlice);
  const dispatch = useAppDispatch();

  const [notify, setNotify] = useState<boolean>(false);
  const [details, setDetails] = useState({
    type: NotificationType.DEFAULT,
    message: 'password error',
  });

  const handleSignIn = async (values: InitialValuesInput) => {
    setSubmitted(true);
    console.log('mein values', values);
    return dispatch(
      loginFunc({matricule: values.matricule, password: values.password}),
    );
  };

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

  useEffect(() => {
    return () => {
      dispatch(resetIsState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loginState.user?.id) {
      return;
    }
    if (loginState.user?.id) {
      navigation.navigate('Dashboard');
    }
  }, [dispatch, navigation, loginState]);

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
        placeholder="Password"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        error={errors.password}
        secure={true}
        icon={<Icons size={20} icon={IconType.LOCK} color={theme.gray} />}
      />
      <View style={styles.forgotContainer}>
        <View>
          <CheckBox
            checkText="Remember Me"
            value={remember}
            setValue={setRemeber}
            iconType={IconType.CHECK}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.textForgot}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          btnText="Sign In"
          onPress={handleSubmit}
          loading={submitted && loginState.isLoading}
          disabled={submitted && (!isValid || loginState.isLoading)}
        />
      </View>
    </>
  );

  // if (isSuccess) {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.textBold]}>Welcome Back !</Text>
            <Text style={styles.text}>Log in to your account</Text>
          </View>
          <View style={styles.formContainer}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={initialValuesInput}
              onSubmit={handleSignIn}>
              {renderForm}
            </Formik>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.text2}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.text2, styles.textSignUp]}> Sign Up</Text>
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
  // }
};

export default LoginScreen;
