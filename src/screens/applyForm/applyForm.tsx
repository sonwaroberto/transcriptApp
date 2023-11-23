import React, {FC, useState} from 'react';
import {View, Text, Alert , TouchableOpacity} from 'react-native';

import styles from './applyForm.style';
import CustomTextInput from '../../components/input/input';

import theme from '../../resources/theme';
import {Icons} from '../../components';
import {IconType} from '../../components/icon/icons.component';

type Props = {
  navigation: any;
};

const ApplyForm: FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [matricule, setMatricule] = useState('');
  const [copies, setCopies] = useState('');
  const [enroll, setEnroll] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [number, setNumber] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState('');

   // Validation functions
   const isValidName = (input: string): boolean => {
    if (input.trim() === '') {
      Alert.alert('Invalid Name', 'Name cannot be empty.');
      return false;
    }
    return true;
  };

  const isValidMatricule = (input: string): boolean => {
    if (input.trim() === '') {
      Alert.alert('Invalid Matricule', 'Matricule cannot be empty.');
      return false;
    }
    return true;
  };

  const isValidCopies = (input: string): boolean => {
    const isNumeric = /^\d+$/.test(input);
    if (!isNumeric) {
      Alert.alert('Invalid Copies', 'Copies must contain only numeric characters.');
      return false;
    }
    return true;
  };

  const isValidPhoneNumber = (input: string): boolean => {
    const isNumeric = /^\d+$/.test(input);
    const startsWith6 = input.startsWith('6');
    const hasValidLength = input.length >= 9;

    if (!isNumeric) {
      Alert.alert('Invalid Phone Number', 'Phone number must contain only numeric characters.');
      return false;
    }

    if (!startsWith6) {
      Alert.alert('Invalid Phone Number', 'Phone number must start with the digit 6.');
      return false;
    }

    if (!hasValidLength) {
      Alert.alert('Invalid Phone Number', 'Phone number must be at least 9 digits long.');
      return false;
    }

    return true;
  };

  // Calculate the values based on 'enroll'
  const calculateValues = (baseValue: number) => {
    if (enroll === 'no') {
      return baseValue + 1000;
    } else {
      return baseValue;
    }
  };

  const handleSubmit = () => {
    if (
      isValidName(name) &&
      isValidMatricule(matricule) &&
      isValidCopies(copies) &&
      isValidPhoneNumber(number)
    ) {
      navigation.navigate('paymentmethod');
      console.log('Applicant Name:', name);
      console.log('Applicant Matricule:', matricule);
      console.log('Amount of Copies:', copies);
      console.log('Enrolled:', enroll);
      console.log('Application Type:', type);
      console.log('Amount:', amount);
      console.log('Payer Phone Number:', number);
    } else {
      console.log('Invalid Information')
    }
  };

  React.useEffect(() => {
    // Calculate amount based on the selected application type
    switch (type) {
      case 'sfm':
        setCalculatedAmount(calculateValues(3000).toString());
        setAdditionalText('Super Fast Mode 24 Hours Delivery');
        break;
      case 'fm':
        setCalculatedAmount(calculateValues(2000).toString());
        setAdditionalText('Fast Mode - 2 Days Delivery');
        break;
      case 'nm':
        setCalculatedAmount(calculateValues(1000).toString());
        setAdditionalText('Normal Mode - 1 Week Delivery');
        break;
      default:
        setCalculatedAmount('');
        setAdditionalText('');
        break;
    }
  }, [calculateValues, type]);

  const [additionalText, setAdditionalText] = useState('');


  return (
    <View style={[styles.container, {backgroundColor: 'white'}]}>  
    
    <View style={styles.headerWrapper}>
      <View style={styles.headerIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icons size={30} icon={IconType.ARROW_LEFT} color='#2372E9' />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Application Form</Text>
          <View style={styles.headerLine} />
      </View>
    </View>

      <View style={[styles.formContainer, {backgroundColor: 'white'}]}>

      <CustomTextInput
        placeholder="Applicant Full Name"
        value={name}
        onChangeText={text => setName(text)}
        icon={<Icons size={20} icon={IconType.USER} color={theme.gray} />}
      />

      <CustomTextInput
        placeholder="Enter your matricule"
        value={matricule}
        onChangeText={text => setMatricule(text)}
        icon={<Icons size={20} icon={IconType.LOCK} color={theme.gray} />}
      />

      <CustomTextInput
        placeholder="Number of Copies"
        value={copies}
        onChangeText={text => setCopies(text)}
        icon={<Icons size={20} icon={IconType.PENCIL} color={theme.gray} />}
        keyboardType='numeric'
      />

      
      <Text style={styles.label}>Enrolled:</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              enroll === 'yes' && styles.selectedRadioButton,
            ]}
            onPress={() => setEnroll('yes')}>
            <Text
              style={[
                styles.radioButtonText,
                enroll === 'yes' && styles.selectedText,
              ]}>
              Yes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.radioButton,
              enroll === 'no' && styles.selectedRadioButton,
            ]}
            onPress={() => setEnroll('no')}>
            <Text
              style={[
                styles.radioButtonText,
                enroll === 'no' && styles.selectedText,
              ]}>
              No
            </Text>
          </TouchableOpacity>
        </View>

       
        <Text style={styles.label}>Application Type:</Text>
        <View style={styles.genderContainer}>
          <Text style={styles.radioText}>{calculateValues(3000)}</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              type === 'sfm' && styles.selectedRadioButton,
            ]}
            onPress={() => setType('sfm')}>
            <Text
              style={[
                styles.radioButtonText,
                type === 'sfm' && styles.selectedText,
              ]}>
              SFM
            </Text>
          </TouchableOpacity>

          <Text style={styles.radioText}>{calculateValues(2000)}</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              type === 'fm' && styles.selectedRadioButton,
            ]}
            onPress={() => setType('fm')}>
            <Text
              style={[
                styles.radioButtonText,
                type === 'fm' && styles.selectedText,
              ]}>
              FM
            </Text>
          </TouchableOpacity>

          <Text style={styles.radioText}>{calculateValues(1000)}</Text>
          <TouchableOpacity
            style={[
              styles.radioButton,
              type === 'nm' && styles.selectedRadioButton,
            ]}
            onPress={() => setType('nm')}>
            <Text
              style={[
                styles.radioButtonText,
                type === 'nm' && styles.selectedText,
              ]}>
              NM
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.additionalText}>{additionalText}</Text>


        <CustomTextInput
        placeholder="Amount Payable"
        value={calculatedAmount}
        onChangeText={text => setCalculatedAmount(text)}
        icon={<Icons size={20} icon={IconType.TRANSACTION_HISTORY} color={theme.gray} />}
        editable={false}
        />

        <CustomTextInput
          placeholder="Payer Phone Number"
          value={number}
          onChangeText={text => setNumber(text)}
          icon={<Icons size={20} icon={IconType.PHONE_MSG} color={theme.gray} />}
        />

       

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}>
          <Text style={{color: 'white'}}>Apply</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default ApplyForm;
