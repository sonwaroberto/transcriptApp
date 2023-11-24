import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './dashboard.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';
import Icons, {IconType} from '../../components/icon/icons.component';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

type Props = {
  navigation?: any;
};

const data = [
  {
    studNo: 'CT22A287',
    name: {fname: 'NEBA', others: 'EMMANUEL FUH'},
    date: '03 SEPTEMBER 2023',
    dob: '01/10/2001',
    pob: 'Kumba',
    sex: 'M',
    doe: 'SEPTEMBER 2023',
    faculty: 'COLLEGE OF TECHNOLOGY',
    dept: 'COMPUTER ENGINEERING',
    major: 'COMPUTER ENGINEERING',
    minor: '',
    degree: 'B.Tech COMPUTER ENGINEERING',
    degreeCon: '',
    fsemester: [
      {
        code: 'CEC321',
        title: 'Programming with UML',
        type: 'C',
        creditValue: 4,
        grade: 'B+',
        creditsEarned: 4,
        creditGpa: 4,
        gradePoints: 3.5,
      },
      {
        code: 'CEC419',
        title: 'Design Project',
        type: 'C',
        creditValue: 6,
        grade: 'B+',
        creditsEarned: 6,
        creditGpa: 6,
        gradePoints: 3.5,
      },
      {
        code: 'ENG101',
        title: 'USE OF ENGLISH I',
        type: 'C',
        creditValue: 2,
        grade: 'A',
        creditsEarned: 2,
        creditGpa: 2,
        gradePoints: 4,
      },
      {
        code: 'SPT100',
        title: 'SPORTS',
        type: 'C',
        creditValue: 2,
        grade: 'B+',
        creditsEarned: 2,
        creditGpa: 2,
        gradePoints: 3.5,
      },
      {
        tce: 36,
        gce: 36,
        tca: 40,
        gca: 40,
        sgpa: 3.5,
      },
    ],
    ssemester: [
      {
        code: 'CEC304',
        title: 'Data Security and Intergrity',
        type: 'C',
        creditValue: 4,
        grade: 'B+',
        creditsEarned: 4,
        creditGpa: 4,
        gradePoints: 3.5,
      },
      {
        code: 'CEC418',
        title: 'Software Construction and Evolution',
        type: 'C',
        creditValue: 4,
        grade: 'B+',
        creditsEarned: 4,
        creditGpa: 4,
        gradePoints: 3.5,
      },
      {
        code: 'CEC430',
        title: 'Full Stack Web Development Technologies',
        type: 'C',
        creditValue: 4,
        grade: 'A',
        creditsEarned: 4,
        creditGpa: 4,
        gradePoints: 4,
      },
      {
        code: 'CVE100',
        title: 'Civics and Ethics',
        type: 'C',
        creditValue: 4,
        grade: 'B',
        creditsEarned: 4,
        creditGpa: 4,
        gradePoints: 3.0,
      },
      {
        tce: 36,
        gce: 36,
        tca: 40,
        gca: 40,
        sgpa: 3.5,
      },
    ],
  },
];
const createPDF = async () => {
const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
<style>
table{
  /* width: 100%; */
  text-align: center;
  border-collapse: collapse;
}
</style>
</head>
<body>
<div>
<table border="1">
${data
.map(
  info => `
  <tr style="height: -50%;">
      <td rowspan="2" colspan="4" style="background-color: rgb(196, 188, 188);; text-align: left; font-size: 24px; font-weight: bold;">
          <span>UNIVERSITY OF BUEA<br>
          P.O. BOX 63 <br>
          BUEA, CAMEROON</span>
      </td>
      <td rowspan="2" colspan="4" style="background-color: rgb(196, 188, 188); font-size: 24px; font-weight: bold; border-left: 2px;">
          STUDENT ACADEMIC RECORD
      </td>
      <td colspan="6">
          <div style="display: flex; flex-direction: row; justify-content: space-around;">
              <div>
                  <span><b>STUDENT NO.</b><br>
                  
                  ${info.studNo}</span>
              </div>
              <div>
                  <span><b>DATE PRINTED</b><br>
                  ${info.date}</span>
              </div>
          </div>
      </td>
      <td colspan="2">
          <span><b>PAGE</b><br>
          1 0f 1</span>
      </td>
  </tr>
  <tr>
      <td colspan="8">
          <div>
              <b>STUDENT NAME</b>
              <div style="display: flex; flex-direction: row; justify-content: space-around;">
                  <span><b>FIRST NAME:</b> ${info.name.fname}</span><br>
                  <span><b>OTHER NAMES:</b> ${info.name.others}</span>
              </div>
          </div>
      </td>
  </tr>
  <!-- Third row -->
  <tr>
      <td colspan="2">
          <span><b>DATE OF BIRTH</b><br>
          ${info.dob}</p>
      </td>
      <td colspan="5">
          <div style="display: flex; flex-direction: row; justify-content: space-around;">
              <div>
                  <span><b>PLACE OF BIRTH</b><br>
                  ${info.pob}</p>
              </div>
              <div>
                  <span><b>SEX</b><br>
                  ${info.sex}</p>
              </div>
          </div>
      </td>
      <td colspan="4">
          <span>SCHOOL LAST ATTENDED</span>
      </td>
      <td colspan="5" style="font-size: 14px;">
          <span>THIS TRANSCRIPT IS NOT VALID WITHOUT THE<br>SIGNATURE OF THE REGISTRAR AND THE<br>ENDORSED SEAL OF THE UNIVERSITY</span>
      </td>
  </tr>
  <!-- Fourth row -->
  <tr>
      <td colspan="4">
          <span><b>DATE OF ENROLMENT</b><br>
          ${info.doe}</span>
      </td>
      <td rowspan="2" colspan="2">
          <span>STUDENT ADDRESS</span>
      </td>
      <td rowspan="2" colspan="2">
          <span>PARENT ADDRESS</span>
      </td>
      <td rowspan="2" colspan="2">
          <span>REMARKS</span>
      </td>
      <td rowspan="2" colspan="6">
          <p><b>GRADE SYSTEM</b></p>
          <div style="text-align: left; font-size: 12px;">
                      <p>A  - 4.0GP    80 - 100%   C - COMPULSORY<br>
                      B+ - 3.5GP    70 - 79%    R - REQUIRED<br>
                      B  - 3.0GP    60 - 69%    E - ELECTIVE<br>
                      C+ - 2.5GP    55 - 59%    G - UNIVERSITY REQUIREMENTS<br>
                      C  - 2.0GP    50 - 54%<br>
                      D+ - 1.5GP    45 - 49%    W - 0.0GP WITHDREW<br>
                      D  - 1.0GP    40 - 44%    I - 0.0GP INCOMPLETE<br>
                      F  - 0.0GP     0 - 39%    X - 0.0GP ABSENT FROM EXAM<br>
                      N - 0.0GP NO CREDIT<br>
                      P - 0.0GP NO CREDIT</p>
                  </div>
      </td>
  </tr>
  <tr>
      <td colspan="4" style="text-align: left; font-size: 12px">
          <p><b>FAC/SCH:</b> ${info.faculty}</p>
          <P><b>DEPT:</b> ${info.dept}</P>
          <P><b>MAJOR:</b> ${info.major}</P>
          <P><b>MINOR:</b> ${info.minor}</P>
          <P><b>DEGREE PROPOSED:</b> ${info.degree}</P>
          <P><b>DEGREE CONFERRED:</b> ${info.degreeCon}</P>
      </td>
  </tr>
  <!-- Semesters -->
  <tr>
      <th colspan="8"><p>FIRST SEMESTER 2022/2023</p></th>
      <th colspan="8"><p>SECOND SEMESTER 2022/2023</p></th>
  </tr>
  <!-- courses -->
  <tr>
      <th>CSE CODE & CSE NO.</th>
      <th>COURSE TITLE</th>
      <th>TYPE</th>
      <th>CREDIT VALUE</th>
      <th>GRADE</th>
      <th>CREDITS EARNED</th>
      <th>CREDITS FOR GPA</th>
      <th>GRADE POINTS</th>

      <th>CSE CODE & CSE NO.</th>
      <th>COURSE TITLE</th>
      <th>TYPE</th>
      <th>CREDIT VALUE</th>
      <th>GRADE</th>
      <th>CREDITS EARNED</th>
      <th>CREDITS FOR GPA</th>
      <th>GRADE POINTS</th>
  </tr>
  <tr>
      <td>${info.fsemester[0].code}</td>
      <td>${info.fsemester[0].title}</td>
      <td>${info.fsemester[0].type}</td>
      <td>${info.fsemester[0].creditValue}</td>
      <td>${info.fsemester[0].grade}</td>
      <td>${info.fsemester[0].creditsEarned}</td>
      <td>${info.fsemester[0].creditGpa}</td>
      <td>${info.fsemester[0].gradePoints}</td>
      <!-- second semester -->
      <td>${info.ssemester[0].code}</td>
      <td>${info.ssemester[0].title}</td>
      <td>${info.ssemester[0].type}</td>
      <td>${info.ssemester[0].creditValue}</td>
      <td>${info.ssemester[0].grade}</td>
      <td>${info.ssemester[0].creditsEarned}</td>
      <td>${info.ssemester[0].creditGpa}</td>
      <td>${info.ssemester[0].gradePoints}</td>
  </tr>
  <tr>
      <td>${info.fsemester[1].code}</td>
      <td>${info.fsemester[1].title}</td>
      <td>${info.fsemester[1].type}</td>
      <td>${info.fsemester[1].creditValue}</td>
      <td>${info.fsemester[1].grade}</td>
      <td>${info.fsemester[1].creditsEarned}</td>
      <td>${info.fsemester[1].creditGpa}</td>
      <td>${info.fsemester[1].gradePoints}</td>
      <!-- second semester -->
      <td>${info.ssemester[1].code}</td>
      <td>${info.ssemester[1].title}</td>
      <td>${info.ssemester[1].type}</td>
      <td>${info.ssemester[1].creditValue}</td>
      <td>${info.ssemester[1].grade}</td>
      <td>${info.ssemester[1].creditsEarned}</td>
      <td>${info.ssemester[1].creditGpa}</td>
      <td>${info.ssemester[1].gradePoints}</td>
  </tr>
  <tr>
      <td>${info.fsemester[2].code}</td>
      <td>${info.fsemester[2].title}</td>
      <td>${info.fsemester[2].type}</td>
      <td>${info.fsemester[2].creditValue}</td>
      <td>${info.fsemester[2].grade}</td>
      <td>${info.fsemester[2].creditsEarned}</td>
      <td>${info.fsemester[2].creditGpa}</td>
      <td>${info.fsemester[2].gradePoints}</td>
      <!-- second semester -->
      <td>${info.ssemester[2].code}</td>
      <td>${info.ssemester[2].title}</td>
      <td>${info.ssemester[2].type}</td>
      <td>${info.ssemester[2].creditValue}</td>
      <td>${info.ssemester[2].grade}</td>
      <td>${info.ssemester[2].creditsEarned}</td>
      <td>${info.ssemester[2].creditGpa}</td>
      <td>${info.ssemester[2].gradePoints}</td>
  </tr>
  <tr>
      <td>${info.fsemester[3].code}</td>
      <td>${info.fsemester[3].title}</td>
      <td>${info.fsemester[3].type}</td>
      <td>${info.fsemester[3].creditValue}</td>
      <td>${info.fsemester[3].grade}</td>
      <td>${info.fsemester[3].creditsEarned}</td>
      <td>${info.fsemester[3].creditGpa}</td>
      <td>${info.fsemester[3].gradePoints}</td>
      <!-- second semester -->
      <td>${info.ssemester[3].code}</td>
      <td>${info.ssemester[3].title}</td>
      <td>${info.ssemester[3].type}</td>
      <td>${info.ssemester[3].creditValue}</td>
      <td>${info.ssemester[3].grade}</td>
      <td>${info.ssemester[3].creditsEarned}</td>
      <td>${info.ssemester[3].creditGpa}</td>
      <td>${info.ssemester[3].gradePoints}</td>
  </tr>
  <tr>
      <td colspan="8">
          <div style="display: flex; flex-direction: row; justify-content: space-around; font-size: 14px;">
              <P>TOTAL CREDIT ATTEMPTED: ${info.fsemester[4].tca} <br>
                  GPA CREDIT ATTEMPTED: ${info.fsemester[4].gca} <br>
                  SEMESTER GPA: ${info.fsemester[4].sgpa}
              </P>
              <P>TOTAL CREDIT EARNED: ${info.fsemester[4].tce} <br>
                  GPA CREDIT EARNED: ${info.fsemester[4].gce} 
              </P>
          </div>
      </td>
      <td colspan="8">
          <div style="display: flex; flex-direction: row; justify-content: space-around; font-size: 14px;">
          <P>TOTAL CREDIT ATTEMPTED: ${info.ssemester[4].tca} <br>
              GPA CREDIT ATTEMPTED: ${info.ssemester[4].gca} <br>
              SEMESTER GPA: ${info.ssemester[4].sgpa}
          </P>
          <P>TOTAL CREDIT EARNED: ${info.ssemester[4].tce} <br>
              GPA CREDIT EARNED: ${info.ssemester[4].gce} 
          </P>
          </div>
      </td>
  </tr>
  `,
)
.join('')}
</table>
</div>
</body>
</html>   
  `;

  let options = {
    html: htmlContent,
    fileName: 'transcript',
    directory: 'Documents',
    width: 850,
    height: 595,
  };

  let file = await RNHTMLtoPDF.convert(options);
  console.log(file.filePath);
  // alert(file.filePath);
};

const appliedTranscript = [
  {id: 1, number: 0o1},
  {id: 2, number: 0o2},
  {id: 3, number: 0o3},
  {id: 4, number: 0o4},
  {id: 5, number: 0o5},
];

const DashboardScreen: FC<Props> = ({navigation}) => {
  const renderApplication = (
    <FlatList
      keyExtractor={transcript => transcript.id.toString()}
      data={appliedTranscript}
      renderItem={({item}) => {
        return (
          <View style={styles.transContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: theme.screenHeight * 0.025,
                left: theme.screenWidth * 0.01,
              }}>
              <Image
                source={require('../../resources/icons/summary.png')}
                style={styles.transcript}
              />
              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  left: theme.screenWidth * 0.07,
                }}>
                Student Academic Record N-{item.number}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 55,
                top: theme.screenHeight * 0.035,
                left: theme.screenWidth * 0.01,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={createPDF}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar />
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: theme.screenHeight * 0.2,
                alignItems: 'center',
                justifyContent: 'center',
                left: theme.screenWidth * 0.03,
              }}>
              <Text
                style={{
                  fontSize: theme.fontSizeLarge,
                  fontWeight: '800',
                  color: 'black',
                }}>
                Neba Emmanuel
              </Text>
              <Text style={{color: 'black', fontSize: theme.fontSizeNormal}}>
                CT22A287
              </Text>
              <Text style={{color: 'black', fontSize: theme.fontSizeNormal}}>
                Computer Engineering
              </Text>
            </View>
            <View style={{left: theme.screenWidth * 0.08}}>
              <Icons size={30} icon={IconType.NOTIFICATION} color={theme.black}/>
            </View>
          </View>
          {/* <Icons size={30} icon={IconType.NOTIFICATION} color={theme.black} /> */}
        </View>
        <View style={styles.applyContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/apply.png')}
              style={styles.apply}
            />
            <Text
              style={{
                width: 100,
                fontSize: 16,
                fontStyle: 'italic',
                color: '#fff',
                fontWeight: '800',
                marginLeft: 10,
              }}>
              Transcript Request
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Apply')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                marginTop: 20,
                fontSize: 16,
                color: '#fff',
              }}>
              Apply Now
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: '#000', marginVertical: 15}}>History</Text>
          <View style={{paddingBottom: theme.screenHeight * 1, marginBottom: theme.screenHeight * 0.2 }}>
            {renderApplication}
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
