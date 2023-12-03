import React, { FC, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './applyForm.style';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomTextInput from '../../components/input/input';
import transcriptValidationSchema from '../../schema/applyForm';
import { TranscriptDataType } from '../../interface/auth/AuthTypes';
import theme from '../../resources/theme';
import { Icons } from '../../components';
import { IconType } from '../../components/icon/icons.component';

type Props = {
  navigation: any;
};

const initialValuesInput: TranscriptDataType = {
  fullName: '',
  matricule: '',
  level: '',
  date: '',
  type: '',
  // amount: '',
};

const ApplyForm: FC<Props> = ({ navigation }) => {

  const [calculatedAmount, setCalculatedAmount] = useState<number>(0);
  const [additionalText, setAdditionalText] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleApply = async (values: TranscriptDataType) => {
    console.log('input values', values);
    navigation.navigate('paymentmethod');
  };

  const calculateValues = (baseValue: number) => {
    return baseValue;
  };

  const renderForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isValid,
  }
    : any) => (
    <>
      <CustomTextInput
        placeholder="Applicant Full Name"
        onChangeText={handleChange('fullName')}
        onBlur={handleBlur('fullName')}
        value={values.fullName}
        error={errors.fullName}
        icon={<Icons size={20} icon={IconType.USER} color={theme.gray} />}
      />

      <CustomTextInput
        placeholder="Enter your matricule"
        onChangeText={handleChange('matricule')}
        onBlur={handleBlur('matricule')}
        value={values.matricule}
        error={errors.matricule}
        icon={<Icons size={20} icon={IconType.LOCK} color={theme.gray} />}
      />

      <Text style={styles.label}>Academic Level:</Text>
      <Picker
        selectedValue={values.level}
        onValueChange={handleChange('level')}
        onBlur={handleBlur('level')}
        style={styles.picker}
      >
        <Picker.Item label="Select Level" value="" />
        <Picker.Item label="Level 100" value="100" />
        <Picker.Item label="Level 200" value="200" />
        <Picker.Item label="Level 300" value="300" />
        <Picker.Item label="Level 400" value="400" />
        <Picker.Item label="Level 500" value="500" />
        <Picker.Item label="Level 600" value="600" />
        <Picker.Item label="Level 700" value="700" />
      </Picker>

      <Text style={styles.label}>Academic Year:</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.datePickerInput}
      >
        <Text>{values.date ? values.date : 'Select Academic Year'}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={values.date ? new Date(values.date) : new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            const currentDate = selectedDate || new Date();
            const selectedYear = currentDate.getFullYear().toString();
            handleChange('date')(selectedYear);
          }}
        />
      )}
      
      <Text style={styles.label}>Application Type:</Text>
      <View style={styles.genderContainer}>
        <Text style={styles.radioText}>{calculateValues(3000)}</Text>
        <TouchableOpacity
          style={[
            styles.radioButton,
            values.type === 'sfm' && styles.selectedRadioButton,
          ]}
          onPress={() => {
            handleChange('type')('sfm');

          }}
          onBlur={handleBlur('type')}>
          <Text
            style={[
              styles.radioButtonText,
              values.type === 'sfm' && styles.selectedText,
            ]}>
            SFM
          </Text>
        </TouchableOpacity>

        <Text style={styles.radioText}>{calculateValues(2000)}</Text>
        <TouchableOpacity
          style={[
            styles.radioButton,
            values.type === 'fm' && styles.selectedRadioButton,
          ]}
          onPress={() => {
            handleChange('type')('fm');

          }}
          onBlur={handleBlur('type')}>
          <Text
            style={[
              styles.radioButtonText,
              values.type === 'fm' && styles.selectedText,
            ]}>
            FM
          </Text>
        </TouchableOpacity>

        <Text style={styles.radioText}>{calculateValues(1000)}</Text>
        <TouchableOpacity
          style={[
            styles.radioButton,
            values.type === 'nm' && styles.selectedRadioButton,
          ]}
          onPress={() => {
            handleChange('type')('nm');
          }}
          onBlur={handleBlur('type')}>
          <Text
            style={[
              styles.radioButtonText,
              values.type === 'nm' && styles.selectedText,
            ]}>
            NM
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.additionalText}>{additionalText}</Text>

      <Text style={styles.label2}>Amount Payable:</Text>
      <CustomTextInput
        placeholder="Amount Payable"
        value={calculatedAmount.toString()}
        icon={<Icons size={20} icon={IconType.TRANSACTION_HISTORY} color={theme.gray} />}
        editable={false}
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
