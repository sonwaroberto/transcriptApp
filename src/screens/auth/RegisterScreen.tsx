import React, {FC} from 'react';
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
// import {useDispatch, useSelector} from 'react-redux';
// import {RootState} from '../../redux/store';
// import {registerFunc} from '../../redux/slices/user';
import {RegisterDataType} from '../../interface/auth/AuthTypes';
// import {alertMessage} from '../../utils/alert';
import {Icons} from '../../components';
import {IconType} from '../../components/icon/icons.component';
import theme from '../../resources/theme';
// import {AnyAction} from 'redux';

type Props = {
  navigation: any;
};
const initialValuesInput: RegisterDataType = {
  fullName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterScreen: FC<Props> = ({navigation}) => {
  // const dispatch = useDispatch();
  // const {loading, isError, user, errorMessage, isSuccess} = useSelector(
  //   (state: RootState) => state.users,
  // );

  const handleSignUp = async (values: RegisterDataType) => {
    console.log('mein values', values);
    navigation.navigate('Login');
    // dispatch(registerFunc(values) as unknown as AnyAction);
  };

  // useEffect(() => {
  //   if (isSuccess && user) {
  //     navigation.navigate('Dashboard');
  //   }
  // }, [dispatch, isSuccess, navigation, user]);

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
    </SafeAreaView>
  );
};

export default RegisterScreen;
