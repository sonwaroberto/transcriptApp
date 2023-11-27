import React, {FC, useState} from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './viewtranscript.style';
import theme from '../../resources/theme';
import {Icons} from '../../components';
import {IconType} from '../../components/icon/icons.component';


  type Props = {
    navigation: any;
  };

  type TableItem = {
    id: string;
    code: string;
    title: string;
  };

  const ViewTranscript: FC<Props> = ({ navigation }) => {
    const [tableData, setTableData] = useState<TableItem[][]>([
      [
        { id: '1', code: 'COURSE CODE', title: 'ENG101' },
        { id: '2', code: 'COURSE TITLE', title: 'USE OF ENGLISH' },
        { id: '3', code: 'CREDIT VALUE', title: '2' },
        { id: '4', code: 'CA MARK', title: '20' },
        { id: '5', code: 'EXAM MARK', title: '40' },
        { id: '6', code: 'FINAL MARK', title: '60' },
        { id: '7', code: 'GRADE', title: 'B' }
      ],
      [
        { id: '1', code: 'COURSE CODE', title: 'PHY301' },
        { id: '2', code: 'COURSE TITLE', title: 'MODERN PHYSICS' },
        { id: '3', code: 'CREDIT VALUE', title: '4' },
        { id: '4', code: 'CA MARK', title: '22' },
        { id: '5', code: 'EXAM MARK', title: '38' },
        { id: '6', code: 'FINAL MARK', title: '60' },
        { id: '7', code: 'GRADE', title: 'B' }
      ],
      [
        { id: '1', code: 'COURSE CODE', title: 'ENG102' },
        { id: '2', code: 'COURSE TITLE', title: 'USE OF ENGLISH 2' },
        { id: '3', code: 'CREDIT VALUE', title: '2' },
        { id: '4', code: 'CA MARK', title: '20' },
        { id: '5', code: 'EXAM MARK', title: '40' },
        { id: '6', code: 'FINAL MARK', title: '60' },
        { id: '7', code: 'GRADE', title: 'B' }
      ]
    ]);

    const attemptedCreditRow = [
        { id: '1', code: 'Attempted Credit:', title: '4', },
      ];
    
      const creditEarnRow = [
        { id: '1', code: 'Credit Earn:', title: '4', },
      ];
    
      const gpaRow = [
        { id: '1', code: 'GPA/4.0:', title: '3', },
      ];
  
      const TableHeader = () => (
        <View style={[styles.tableBlock, { borderBottomWidth: 1, borderColor: '#ccc' }]}>
          <View style={{ flex: 4, backgroundColor: '#2372E9', padding: 20 }}>
            <Text style={{ fontWeight: '400', fontSize: 20, color: 'white' }}>Final Examination Results for the 2022/2023
              and Semester 1 for Registered Courses</Text>
          </View>
        </View>
      );
    
      const renderTableRow = (row: TableItem[], index: number) => (
        <View key={index} style={[styles.tableBlock, { borderBottomWidth: 1, borderColor: '#ccc' }]}>
          <View style={styles.column}>
            {row.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.label, styles.marginBottom]}>{item.code}</Text>
            ))}
          </View>
          <View style={styles.spaceColumn} />
          <View style={styles.column}>
            {row.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.value, styles.marginBottom]}>{item.title}</Text>
            ))}
          </View>
        </View>
      );
    
      return (
        <ScrollView style={{ padding: 20 }} >
          <View style={styles.headerWrapper}>
            <View style={styles.headerIcon}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Text><Icons size={30} icon={IconType.ARROW_LEFT} color='#2372E9' /></Text>
              </TouchableOpacity>
            </View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Result Preview</Text>
              <View style={styles.headerLine} />
            </View>
          </View>
    
          <TableHeader />
          {tableData.map((row, index) => renderTableRow(row, index))}
          <View style={styles.tableBlock}>
            {attemptedCreditRow.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.label, styles.marginBottom]}>{item.code}</Text>
            ))}
            <View style={styles.spaceColumn} />
            {attemptedCreditRow.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.value, styles.marginBottom]}>{item.title}</Text>
            ))}
          
            {creditEarnRow.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.label, styles.marginBottom]}>{item.code}</Text>
            ))}
            <View style={styles.spaceColumn} />
            {creditEarnRow.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.value, styles.marginBottom]}>{item.title}</Text>
            ))}
          
            {gpaRow.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.label, styles.marginBottom]}>{item.code}</Text>
            ))}
            <View style={styles.spaceColumn} />
            {gpaRow.map((item, itemIndex) => (
              <Text key={itemIndex} style={[styles.value, styles.marginBottom]}>{item.title}</Text>
            ))}
          </View>
    
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => {}}>
            <Text style={styles.downloadButtonText}>
                Download
            <Text>   </Text>
            <Icons size={15} icon={IconType.FILE} color="#fff" /></Text>
          </TouchableOpacity>
        </ScrollView>
      );
    };

export default ViewTranscript
