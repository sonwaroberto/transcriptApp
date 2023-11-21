// ApplyForm.js
import React, {FC, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

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

  // Calculate the values based on 'enroll'
  const calculateValues = (baseValue: number) => {
    if (enroll === 'no') {
      return baseValue + 1000;
    } else {
      return baseValue;
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Applicant Name:', name);
    console.log('Applicant Matricule:', matricule);
    console.log('Amount of Copies:', copies);
    console.log('Enrolled:', enroll);
    console.log('Application Type:', type);
    console.log('Amount:', amount);
    console.log('Payer Phone Number:', number);
  };

  // Update calculated amount when the application type changes
  React.useEffect(() => {
    // Calculate the amount based on the selected application type
    switch (type) {
      case 'sfm':
        setCalculatedAmount(calculateValues(3000).toString());
        break;
      case 'fm':
        setCalculatedAmount(calculateValues(2000).toString());
        break;
      case 'nm':
        setCalculatedAmount(calculateValues(1000).toString());
        break;
      default:
        setCalculatedAmount('');
        break;
    }
  }, [calculateValues, type]);

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
          onPress={() => navigation.navigate('paymentmethod')}>
          <Text style={{color: 'white'}}>Apply</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default ApplyForm;
