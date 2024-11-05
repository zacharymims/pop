import { Question } from '../../../../types';

export const alaskaPassenger3: Question[] = [
  {
    id: 'ps3-1',
    question: 'What restriction is placed on a CDL if the driver takes the skills test in a vehicle with an automatic transmission?',
    answers: [
      'K - Intrastate Only',
      'L - Vehicles Without Air Brake Systems Only',
      'E - Automatic Transmission Vehicles Only',
      'O - No Tractor Trailer'
    ],
    correctAnswers: ['E - Automatic Transmission Vehicles Only'],
    explanation: 'If the driver takes the skills test in a vehicle that has an automatic transmission, then an "E" no manual transmission restriction is placed on their license.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-2',
    question: 'What restriction is placed on a CDL if the driver does not pass the Air Brakes Knowledge Test or does not take the Skills test in a vehicle with a full air brake system?',
    answers: [
      'K - Intrastate Only',
      'L - Vehicles Without Air Brake Systems Only',
      'E - Automatic Transmission Vehicles Only',
      'O - No Tractor Trailer'
    ],
    correctAnswers: ['L - Vehicles Without Air Brake Systems Only'],
    explanation: 'If the driver does not pass the Air Brakes Knowledge Test or does not take the Skills test in a vehicle with a full air brake system, the driver must have an "L" no full air brake restriction placed on their license.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-3',
    question: 'What restriction is placed on a Class A CDL if the driver obtains their passenger or school bus endorsement in a Class B vehicle?',
    answers: [
      'M - No Class A Passenger Vehicle',
      'N - No Class A and B Passenger Vehicle',
      'K - Intrastate Only',
      'O - No Tractor Trailer'
    ],
    correctAnswers: ['M - No Class A Passenger Vehicle'],
    explanation: 'If a driver possesses a Class A CDL, but obtains his or her passenger or school bus endorsement in a Class B vehicle, the State must place an "M" restriction indicating that the driver can only operate Class B and C passenger vehicle or school buses.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-4',
    question: 'What restriction is placed on a Class B CDL if the driver obtains their passenger or school bus endorsement in a Class C vehicle?',
    answers: [
      'M - No Class A Passenger Vehicle',
      'N - No Class A and B Passenger Vehicle',
      'K - Intrastate Only',
      'O - No Tractor Trailer'
    ],
    correctAnswers: ['N - No Class A and B Passenger Vehicle'],
    explanation: 'If a driver possesses a Class B CDL, but obtains his or her passenger or school bus endorsement in a Class C vehicle, the State must place an "N" restriction indicating that the driver can only operate Class C passenger vehicle or school buses.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-5',
    question: 'What is the minimum age requirement to operate a passenger vehicle in interstate commerce?',
    answers: [
      '18 years old',
      '19 years old',
      '20 years old',
      '21 years old'
    ],
    correctAnswers: ['21 years old'],
    explanation: 'An applicant must be at least twenty-one years of age to operate in interstate commerce.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-6',
    question: 'How long must an applicant have held a valid driver license before applying for a CDL with a passenger endorsement?',
    answers: [
      '6 months',
      '1 year',
      '2 years',
      '3 years'
    ],
    correctAnswers: ['1 year'],
    explanation: 'An applicant must have held a valid driver license for at least one year before applying for a CDL with a passenger endorsement.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-7',
    question: 'What tests are required to obtain a passenger vehicle endorsement?',
    answers: [
      'Only a knowledge test',
      'Only a skills test',
      'Both a knowledge test and a skills test',
      'No additional tests are required'
    ],
    correctAnswers: ['Both a knowledge test and a skills test'],
    explanation: 'An applicant must pass the knowledge, skills and vision test prior to issuance of the CDL with a passenger endorsement.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-8',
    question: 'What is the minimum financial responsibility required for bodily injury or death when operating a passenger-carrying CMV in Alaska?',
    answers: [
      '$300,000',
      '$400,000',
      '$500,000',
      '$600,000'
    ],
    correctAnswers: ['$500,000'],
    explanation: 'Alaska law AS 19.10.300 requires $500,000 for bodily injury or death in a single occurrence for commercial motor vehicles, including passenger-carrying CMVs.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-9',
    question: 'What is the minimum financial responsibility required for property damage when operating a passenger-carrying CMV in Alaska?',
    answers: [
      '$100,000',
      '$150,000',
      '$200,000',
      '$250,000'
    ],
    correctAnswers: ['$200,000'],
    explanation: 'Alaska law AS 19.10.300 requires $200,000 for property damage in a single occurrence for commercial motor vehicles, including passenger-carrying CMVs.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-10',
    question: 'Where must evidence of financial responsibility for passenger-carrying CMV operation be filed in Alaska?',
    answers: [
      'Department of Public Safety',
      'Department of Transportation',
      'Department of Revenue',
      'Department of Natural Resources'
    ],
    correctAnswers: ['Department of Transportation'],
    explanation: 'Evidence of financial responsibility shall be filed with the Department of Transportation, Division of Measurement Standards and Commercial Vehicle Enforcement.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-11',
    question: 'What is the consequence of a first offense DUI while operating a passenger-carrying CMV?',
    answers: [
      '60 day disqualification',
      '1 year disqualification',
      '3 year disqualification',
      'Lifetime disqualification'
    ],
    correctAnswers: ['1 year disqualification'],
    explanation: 'A first offense DUI while operating a CMV, including a passenger-carrying CMV, results in a 1 year disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-12',
    question: 'What is the consequence of refusing a chemical test while operating a passenger-carrying CMV?',
    answers: [
      '60 day disqualification',
      '1 year disqualification',
      '3 year disqualification',
      'Lifetime disqualification'
    ],
    correctAnswers: ['1 year disqualification'],
    explanation: 'Refusing a chemical test while operating a CMV, including a passenger-carrying CMV, results in a 1 year disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-13',
    question: 'What is the consequence of leaving the scene of an accident while operating a passenger-carrying CMV?',
    answers: [
      '60 day disqualification',
      '1 year disqualification',
      '3 year disqualification',
      'Lifetime disqualification'
    ],
    correctAnswers: ['1 year disqualification'],
    explanation: 'Leaving the scene of an accident while operating a CMV, including a passenger-carrying CMV, results in a 1 year disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-14',
    question: 'What is the consequence of a second major offense while operating a passenger-carrying CMV?',
    answers: [
      '1 year disqualification',
      '3 year disqualification',
      '5 year disqualification',
      'Lifetime disqualification'
    ],
    correctAnswers: ['Lifetime disqualification'],
    explanation: 'A second major offense while operating a CMV, including a passenger-carrying CMV, results in a lifetime disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-15',
    question: 'What is considered a serious traffic offense when operating a passenger-carrying CMV?',
    answers: [
      'Parking violations',
      'Speeding 5 mph over the limit',
      'Improper or erratic lane changes',
      'Failure to use turn signals'
    ],
    correctAnswers: ['Improper or erratic lane changes'],
    explanation: 'Improper or erratic lane changes are considered a serious traffic offense when operating a CMV, including a passenger-carrying CMV.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-16',
    question: 'What is the consequence of a second serious traffic offense within 3 years while operating a passenger-carrying CMV?',
    answers: [
      '30 day disqualification',
      '60 day disqualification',
      '90 day disqualification',
      '120 day disqualification'
    ],
    correctAnswers: ['60 day disqualification'],
    explanation: 'A second serious traffic offense within 3 years while operating a CMV, including a passenger-carrying CMV, results in a 60 day disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-17',
    question: 'What is the consequence of a third serious traffic offense within 3 years while operating a passenger-carrying CMV?',
    answers: [
      '60 day disqualification',
      '90 day disqualification',
      '120 day disqualification',
      '180 day disqualification'
    ],
    correctAnswers: ['120 day disqualification'],
    explanation: 'A third serious traffic offense within 3 years while operating a CMV, including a passenger-carrying CMV, results in a 120 day disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-18',
    question: 'What is the consequence of a first railroad-highway grade crossing violation while operating a passenger-carrying CMV?',
    answers: [
      '30 day disqualification',
      '60 day disqualification',
      '90 day disqualification',
      '120 day disqualification'
    ],
    correctAnswers: ['60 day disqualification'],
    explanation: 'A first railroad-highway grade crossing violation while operating a CMV, including a passenger-carrying CMV, results in a 60 day disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-19',
    question: 'What is the consequence of a second railroad-highway grade crossing violation within 3 years while operating a passenger-carrying CMV?',
    answers: [
      '60 day disqualification',
      '90 day disqualification',
      '120 day disqualification',
      '180 day disqualification'
    ],
    correctAnswers: ['120 day disqualification'],
    explanation: 'A second railroad-highway grade crossing violation within 3 years while operating a CMV, including a passenger-carrying CMV, results in a 120 day disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  },
  {
    id: 'ps3-20',
    question: 'What is the consequence of a third or subsequent railroad-highway grade crossing violation within 3 years while operating a passenger-carrying CMV?',
    answers: [
      '120 day disqualification',
      '180 day disqualification',
      '1 year disqualification',
      '3 year disqualification'
    ],
    correctAnswers: ['1 year disqualification'],
    explanation: 'A third or subsequent railroad-highway grade crossing violation within 3 years while operating a CMV, including a passenger-carrying CMV, results in a 1 year disqualification of commercial driving privileges.',
    questionTag: 'passenger-vehicles-3'
  }
];