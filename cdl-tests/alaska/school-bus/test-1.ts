import { Question } from '../../../../types';

export const alaskaSchoolBus1: Question[] = [
  {
    id: 'sb1-1',
    question: 'What endorsement is required to operate a school bus carrying children to and from school?',
    answers: [
      'P endorsement',
      'S endorsement',
      'B endorsement',
      'N endorsement'
    ],
    correctAnswers: ['S endorsement'],
    explanation: 'An S endorsement is required for operating a school bus carrying children to and from school.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-2',
    question: 'What tests are required to obtain a school bus endorsement?',
    answers: [
      'Only a knowledge test',
      'Only a road skills test',
      'Both a knowledge test and a road skills test',
      'No additional tests are required'
    ],
    correctAnswers: ['Both a knowledge test and a road skills test'],
    explanation: 'To obtain a school bus endorsement, both a knowledge test and a road skills test are required.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-3',
    question: 'What is the minimum age requirement to operate a school bus in interstate commerce?',
    answers: [
      '18 years old',
      '19 years old',
      '20 years old',
      '21 years old'
    ],
    correctAnswers: ['21 years old'],
    explanation: 'An applicant must be at least twenty-one years of age to operate in interstate commerce, which includes school bus operations across state lines.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-4',
    question: 'What is the minimum age requirement to operate a school bus in intrastate commerce in Alaska?',
    answers: [
      '18 years old',
      '19 years old',
      '20 years old',
      '21 years old'
    ],
    correctAnswers: ['18 years old'],
    explanation: 'An applicant must be at least eighteen years of age to operate in intrastate commerce at the time of application, which includes school bus operations within Alaska.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-5',
    question: 'How long must an applicant hold a Commercial Learner's Permit (CLP) before taking a road skills test for a school bus endorsement?',
    answers: [
      '7 days',
      '14 days',
      '30 days',
      '60 days'
    ],
    correctAnswers: ['14 days'],
    explanation: 'An applicant must hold a Commercial Learner's Permit (CLP) for at least 14 days before taking a road skills test, including for a school bus endorsement.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-6',
    question: 'What is the fee for a commercial driver license with a school bus endorsement in Alaska?',
    answers: [
      '$50',
      '$75',
      '$100',
      '$125'
    ],
    correctAnswers: ['$100'],
    explanation: 'The commercial driver license fee in Alaska is $100.00, which includes endorsements like the school bus endorsement.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-7',
    question: 'What is the minimum passing score for the school bus endorsement knowledge test?',
    answers: [
      '70%',
      '75%',
      '80%',
      '85%'
    ],
    correctAnswers: ['80%'],
    explanation: 'The minimum passing score for all knowledge tests, including the school bus endorsement, is 80%.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-8',
    question: 'How often can an applicant take the school bus endorsement knowledge test?',
    answers: [
      'Once per week',
      'Once per day',
      'Twice per day',
      'As many times as needed in a day'
    ],
    correctAnswers: ['Once per day'],
    explanation: 'Under Department of Administration regulation 2 AAC 90.420, the knowledge tests may be taken once per day until successful completion.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-9',
    question: 'What restriction is placed on a Class A CDL if the driver obtains their school bus endorsement in a Class B vehicle?',
    answers: [
      'K - Intrastate Only',
      'L - Vehicles Without Air Brake Systems Only',
      'M - No Class A Passenger Vehicle',
      'N - No Class A and B Passenger Vehicle'
    ],
    correctAnswers: ['M - No Class A Passenger Vehicle'],
    explanation: 'If a driver possesses a Class A CDL, but obtains his or her school bus endorsement in a Class B vehicle, the State must place an "M" restriction indicating that the driver can only operate Class B and C passenger vehicle or school buses.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-10',
    question: 'What restriction is placed on a Class B CDL if the driver obtains their school bus endorsement in a Class C vehicle?',
    answers: [
      'K - Intrastate Only',
      'L - Vehicles Without Air Brake Systems Only',
      'M - No Class A Passenger Vehicle',
      'N - No Class A and B Passenger Vehicle'
    ],
    correctAnswers: ['N - No Class A and B Passenger Vehicle'],
    explanation: 'If a driver possesses a Class B CDL, but obtains his or her school bus endorsement in a Class C vehicle, the State must place an "N" restriction indicating that the driver can only operate Class C passenger vehicle or school buses.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-11',
    question: 'What is the consequence of using a CMV to transport school children without the proper endorsement?',
    answers: [
      'A warning',
      'A fine',
      'A serious traffic offense',
      'Immediate arrest'
    ],
    correctAnswers: ['A serious traffic offense'],
    explanation: 'Driving a CMV without the proper class of CDL and/or endorsements for the specific vehicle group being operated or for the passengers being transported is considered a serious traffic offense.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-12',
    question: 'What is the disqualification period for a second serious traffic offense within 3 years while operating a school bus?',
    answers: [
      '30 days',
      '60 days',
      '90 days',
      '120 days'
    ],
    correctAnswers: ['60 days'],
    explanation: 'A second serious traffic offense in 3 years results in a 60 day disqualification of commercial driving privileges, including for school bus operations.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-13',
    question: 'What is the disqualification period for a third serious traffic offense within 3 years while operating a school bus?',
    answers: [
      '60 days',
      '90 days',
      '120 days',
      '180 days'
    ],
    correctAnswers: ['120 days'],
    explanation: 'A third serious traffic offense in 3 years results in a 120 day disqualification of commercial driving privileges, including for school bus operations.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-14',
    question: 'What is the consequence of causing a fatality through negligent operation of a school bus?',
    answers: [
      '60 day disqualification',
      '120 day disqualification',
      '1 year disqualification',
      '3 year disqualification'
    ],
    correctAnswers: ['1 year disqualification'],
    explanation: 'Causing a fatality while driving a CMV by negligent driving is considered a major offense, resulting in a 1 year disqualification for the first offense.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-15',
    question: 'What is the consequence of using an electronic device while driving a school bus?',
    answers: [
      'A warning',
      'A fine',
      'A serious traffic offense',
      'Immediate arrest'
    ],
    correctAnswers: ['A serious traffic offense'],
    explanation: 'Use of an electronic device while driving a CMV, including a school bus, is considered a serious traffic offense.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-16',
    question: 'What is the minimum financial responsibility required for bodily injury or death when operating a school bus in Alaska?',
    answers: [
      '$300,000',
      '$400,000',
      '$500,000',
      '$600,000'
    ],
    correctAnswers: ['$500,000'],
    explanation: 'Alaska law AS 19.10.300 requires $500,000 for bodily injury or death in a single occurrence for commercial motor vehicles, including school buses.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-17',
    question: 'What is the minimum financial responsibility required for property damage when operating a school bus in Alaska?',
    answers: [
      '$100,000',
      '$150,000',
      '$200,000',
      '$250,000'
    ],
    correctAnswers: ['$200,000'],
    explanation: 'Alaska law AS 19.10.300 requires $200,000 for property damage in a single occurrence for commercial motor vehicles, including school buses.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-18',
    question: 'Where must evidence of financial responsibility for school bus operation be filed in Alaska?',
    answers: [
      'Department of Public Safety',
      'Department of Transportation',
      'Department of Revenue',
      'Department of Natural Resources'
    ],
    correctAnswers: ['Department of Transportation'],
    explanation: 'Evidence of financial responsibility shall be filed with the Department of Transportation, Division of Measurement Standards and Commercial Vehicle Enforcement.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-19',
    question: 'What form must the evidence of financial responsibility be in for school bus operation?',
    answers: [
      'A verbal agreement',
      'A handwritten note',
      'A policy or certificate of insurance by an approved insurer',
      'A personal bank statement'
    ],
    correctAnswers: ['A policy or certificate of insurance by an approved insurer'],
    explanation: 'The evidence must be in the form of a policy or certificate of insurance by an insurer acceptable to the Department, or other security approved by the Department.',
    questionTag: 'school-bus-1'
  },
  {
    id: 'sb1-20',
    question: 'What is the consequence of a first railroad-highway grade crossing violation while operating a school bus?',
    answers: [
      '30 day disqualification',
      '60 day disqualification',
      '90 day disqualification',
      '120 day disqualification'
    ],
    correctAnswers: ['60 day disqualification'],
    explanation: 'A first railroad-highway grade crossing violation while operating a CMV, including a school bus, results in a 60 day disqualification of commercial driving privileges.',
    questionTag: 'school-bus-1'
  }
];