import React, {FC, useState} from 'react';
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

type Props = {
  navigation: any;
};

type InitialValuesInput = {
  email: string;
  password: string;
};

const initialValuesInput: InitialValuesInput = {
  email: '',
  password: '',
};

const LoginScreen: FC<Props> = ({navigation}) => {
  const [remember, setRemeber] = useState(true);

  const handleSignIn = async (values: InitialValuesInput) => {
    console.log('mein values', values);
    navigation.navigate('Dashboard');
  };

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
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="email-address"
        error={errors.email}
        icon={<Icons size={20} icon={IconType.PHONE} color={theme.gray} />}
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
          disabled={!isValid}
          // loading={loading}
          btnText="Sign In"
          onPress={handleSubmit}
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
    </SafeAreaView>
  );
  // }
};

export default LoginScreen;
