import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './profile.style';
import { Formik } from 'formik';
import theme from '../../resources/theme';
import CustomTextInput from '../../components/input/input';
import Icons, { IconType } from '../../components/icon/icons.component';
import Button from '../../components/button/button';

type Props = {
  navigation?: any;
};

const update = () => {
  // Update Api
  console.log("Account upadated")
};

type InitialValuesInput = {
  name: string;
  matricle: String;
  department: string;
  email: string;
  specialty: string;
  password: string;
};

const initialValuesInput: InitialValuesInput = {
  name: '',
  matricle: '',
  department: '',
  email: '',
  specialty: '',
  password: '',
};

const handleSignIn = async (values: InitialValuesInput) => {
  console.log('mein values', values);
};

const renderForm = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  errors,
  isValid,
}: any) => (
  <View style={{marginHorizontal: 20, top: theme.screenHeight * 0.2}}>
    <CustomTextInput
      placeholder="Name"
      icon={<Icons size={20} icon={IconType.USERINFO} color={theme.gray} />}
    />
    <CustomTextInput
      placeholder="Matricule"
      icon={<Icons size={20} icon={IconType.IDENTIFICATION} color={theme.gray} />}
    />
    <CustomTextInput
      placeholder="Department"
      icon={<Icons size={20} icon={IconType.PLANNING} color={theme.gray} />}
    />
    <CustomTextInput
      placeholder="Specialty"
      icon={<Icons size={20} icon={IconType.SUMMARY} color={theme.gray} />}
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
    {<View style={styles.buttonWrapper}>
      <Button
        disabled={!isValid}
        // loading={loading}
        btnText="Save"
        onPress={update}
      />
    </View>}
  </View>
);

const ProfileScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{left: theme.screenWidth * 0.02}}>
              <Icons size={20} icon={IconType.ARROW_LEFT} color={theme.white} />
            </TouchableOpacity>          
        </View>
        <View style={styles.avatar}>
          <Text style={styles.username}>NE</Text>
        </View>
        <View style={styles.formContainer}>
            <Formik
              initialValues={initialValuesInput}
              onSubmit={handleSignIn}>
              {renderForm}
            </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
