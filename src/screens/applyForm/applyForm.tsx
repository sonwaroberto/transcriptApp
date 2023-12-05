import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './applyForm.style';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TranscriptDataType} from '../../interface/auth/AuthTypes';
import {Button, Icons} from '../../components';
import {IconType} from '../../components/icon/icons.component';

type Props = {
  navigation: any;
};

const ApplyForm: FC<Props> = ({navigation}) => {
  const [additionalText, setAdditionalText] = useState('');
  const [paymentType, setPaymentType] = useState<string>('sfm');
  const [academicYear, setAcademicYear] = useState<string>('2023');
  const [level, setLevel] = useState<Date>(new Date());

  const handleApply = async () => {
    console.log('input values', paymentType, academicYear, level);
    navigation.navigate('sucessscreen');
  };

  const calculateValues = (baseValue: number) => {
    return baseValue;
  };

  useEffect(() => {
    switch (paymentType) {
      case 'sfm':
        setAdditionalText('Super Fast Mode 24 Hours Delivery');
        break;
      case 'fm':
        setAdditionalText('Fast Mode - 2 Days Delivery');
        break;
      case 'nm':
        setAdditionalText('Normal Mode - 1 Week Delivery');
        break;
      default:
        setAdditionalText('');
        break;
    }
  }, [paymentType]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.container}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerIcon}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}>
                <Icons size={30} icon={IconType.ARROW_LEFT} color="#2372E9" />
              </TouchableOpacity>
            </View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Application Form</Text>
              <View style={styles.headerLine} />
            </View>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Academic Level:</Text>
            <Picker
              selectedValue={level}
              onValueChange={value => {
                setLevel(value);
              }}
              style={styles.picker}>
              <Picker.Item label="Select Level" value="" />
              <Picker.Item label="Level 200" value="200" />
              <Picker.Item label="Level 300" value="300" />
              <Picker.Item label="Level 400" value="400" />
              <Picker.Item label="Level 500" value="500" />
              <Picker.Item label="Level 600" value="600" />
              <Picker.Item label="Level 700" value="700" />
            </Picker>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 20,
              }}>
              <Text style={styles.label}>Academic Year:</Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date(academicYear)}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || new Date();
                  const selectedYear = currentDate.getFullYear().toString();
                  setAcademicYear(selectedYear);
                }}
              />
            </View>

            <Text style={styles.label}>Application Type:</Text>
            <View style={styles.genderContainer}>
              <Text style={styles.radioText}>{calculateValues(5000)}</Text>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  paymentType === 'sfm' && styles.selectedRadioButton,
                ]}
                onPress={() => {
                  setPaymentType('sfm');
                }}>
                <Text
                  style={[
                    styles.radioButtonText,
                    paymentType === 'sfm' && styles.selectedText,
                  ]}>
                  SFM
                </Text>
              </TouchableOpacity>

              <Text style={styles.radioText}>{calculateValues(2000)}</Text>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  paymentType === 'fm' && styles.selectedRadioButton,
                ]}
                onPress={() => {
                  setPaymentType('fm');
                }}>
                <Text
                  style={[
                    styles.radioButtonText,
                    paymentType === 'fm' && styles.selectedText,
                  ]}>
                  FM
                </Text>
              </TouchableOpacity>

              <Text style={styles.radioText}>{calculateValues(1000)}</Text>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  paymentType === 'nm' && styles.selectedRadioButton,
                ]}
                onPress={() => {
                  setPaymentType('nm');
                }}>
                <Text
                  style={[
                    styles.radioButtonText,
                    paymentType === 'nm' && styles.selectedText,
                  ]}>
                  NM
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.additionalText}>{additionalText}</Text>

            <View style={{paddingTop: 50}}>
              <Button btnText="Apply" onPress={handleApply} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyForm;
