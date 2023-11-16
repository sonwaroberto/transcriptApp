import React, {FC, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import styles from './applyForm.style';

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

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Text style={styles.headerTitle}>Application Form</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          {/* <Icon name="arrow-back" size={30} color="black" /> */}
        </TouchableOpacity>
        
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Name */}
        <Text style={styles.label}>Applicant Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name:"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* Matricule */}
        <Text style={styles.label}>Applicant Matricule:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your matricule:"
          value={matricule}
          onChangeText={(text) => setMatricule(text)}
        />

        {/* Copies */}
        <Text style={styles.label}>Amount of Copies:</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount of Copies:"
          value={copies}
          onChangeText={(text) => setCopies(text)}
        />

        {/* Enrolled */}
        <Text style={styles.label}>Enrolled:</Text>
        <View style={styles.genderContainer}>
          <Text style={styles.radioText}>100</Text>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setEnroll('yes')}
          >
            <Text>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setEnroll('no')}
          >
            <Text>No</Text>
          </TouchableOpacity>
        </View>

        {/* Type */}
        <Text style={styles.label}>Application Type:</Text>
        <View style={styles.genderContainer}>
        <Text style={styles.radioText}>100</Text>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setType('sfm')}
          >
            <Text>SFM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setType('fm')}
          >
            <Text>FM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setType('nm')}
          >
            <Text>NM</Text>
          </TouchableOpacity>
        </View>

        {/* Amount */}
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter The Amount:"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />

        {/* Number */}
        <Text style={styles.label}>Payer Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Payer Number:"
          value={number}
          onChangeText={(text) => setNumber(text)}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('sucessscreen')}>
          <Text style={{ color: 'white' }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyForm;
