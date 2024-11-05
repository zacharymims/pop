import { Question } from '../../../../types';

export const alaskaAirBrakes3: Question[] = [
  {
    id: 'ab3-1',
    question: 'What is the purpose of an S-cam in an air brake system?',
    answers: [
      'To increase air pressure',
      'To spread the brake shoes against the drum',
      'To release air from the system',
      'To adjust brake slack'
    ],
    correctAnswers: ['To spread the brake shoes against the drum'],
    explanation: 'The S-cam turns to spread the brake shoes apart and press them against the inside of the brake drum when the brakes are applied.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-2',
    question: 'What is the normal operating range for air pressure in a typical air brake system?',
    answers: [
      '50-80 psi',
      '100-125 psi',
      '150-175 psi',
      '200-225 psi'
    ],
    correctAnswers: ['100-125 psi'],
    explanation: 'The normal operating range for air pressure in a typical air brake system is between 100-125 psi.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-3',
    question: 'At what pressure should the low air pressure warning signal activate?',
    answers: [
      'Below 40 psi',
      'Below 50 psi',
      'Below 60 psi',
      'Below 80 psi'
    ],
    correctAnswers: ['Below 60 psi'],
    explanation: 'The low air pressure warning signal must come on before the pressure drops below 60 psi in the air tank.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-4',
    question: 'What is the purpose of the air tank drain valves?',
    answers: [
      'To increase air pressure',
      'To remove water and oil from the tanks',
      'To regulate air flow to the brake chambers',
      'To cool the compressed air'
    ],
    correctAnswers: ['To remove water and oil from the tanks'],
    explanation: 'Air tank drain valves are used to remove water and compressor oil from the air tanks, as these can lead to system failure if allowed to accumulate.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-5',
    question: 'What happens to spring brakes when air pressure drops below 20-45 psi?',
    answers: [
      'They release automatically',
      'They come on fully',
      'They partially engage',
      'They have no effect'
    ],
    correctAnswers: ['They come on fully'],
    explanation: 'When air pressure drops to a low level (usually between 20-45 psi) in vehicles with spring brakes, the spring brakes come on fully.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-6',
    question: 'What is the primary function of the tractor protection valve?',
    answers: [
      'To increase air pressure in the trailer',
      'To protect the tractor air tanks if the trailer breaks away',
      'To regulate brake pressure between tractor and trailer',
      'To activate the emergency brakes'
    ],
    correctAnswers: ['To protect the tractor air tanks if the trailer breaks away'],
    explanation: 'The tractor protection valve keeps air in the tractor or truck brake system in case the trailer breaks away or develops a bad leak.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-7',
    question: 'What should a driver do if the low air pressure warning comes on while driving?',
    answers: [
      'Continue driving to the next rest stop',
      'Increase speed to build up air pressure',
      'Stop and safely park as soon as possible',
      'Turn off the engine immediately'
    ],
    correctAnswers: ['Stop and safely park as soon as possible'],
    explanation: 'If the low air pressure warning comes on, stop and safely park your vehicle as soon as possible.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-8',
    question: 'What is the correct braking technique for long, steep downgrades with air brakes?',
    answers: [
      'Use the service brake steadily',
      'Alternate between brake and release',
      'Use engine braking and proper gear',
      'Apply full pressure to the brake pedal'
    ],
    correctAnswers: ['Use engine braking and proper gear'],
    explanation: 'The proper braking technique for long, steep downgrades is to go slow enough so that you can use engine braking to control your speed without using the service brakes heavily.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-9',
    question: 'What is the correct emergency stopping technique for vehicles with ABS?',
    answers: [
      'Pump the brakes',
      'Apply steady pressure to the brake pedal',
      'Rapidly press and release the brake pedal',
      'Use the parking brake'
    ],
    correctAnswers: ['Apply steady pressure to the brake pedal'],
    explanation: 'For emergency stops with ABS, apply full brake pressure and hold it. ABS will prevent wheel lock-up and allow you to maintain steering control.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-10',
    question: 'What is the main function of ABS in vehicles with air brakes?',
    answers: [
      'To increase braking power',
      'To allow faster driving in slippery conditions',
      'To prevent wheel lock-up during hard braking',
      'To reduce stopping distance on dry pavement'
    ],
    correctAnswers: ['To prevent wheel lock-up during hard braking'],
    explanation: 'ABS helps prevent wheel lock-up during hard braking situations, allowing you to maintain steering control.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-11',
    question: 'How often should air tanks be drained on a vehicle without automatic tank drains?',
    answers: [
      'Daily',
      'Weekly',
      'Monthly',
      'Annually'
    ],
    correctAnswers: ['Daily'],
    explanation: 'Air tanks should be drained daily on vehicles without automatic tank drains to remove moisture and oil buildup.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-12',
    question: 'What is the purpose of the trailer hand valve?',
    answers: [
      'To release air from the trailer tanks',
      'To apply the trailer brakes independently',
      'To increase air pressure in the trailer system',
      'To activate the trailer lights'
    ],
    correctAnswers: ['To apply the trailer brakes independently'],
    explanation: 'The trailer hand valve allows you to apply the trailer brakes independently of the tractor brakes.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-13',
    question: 'What is brake fade in air brake systems?',
    answers: [
      'A gradual loss of braking power due to heat buildup',
      'A sudden loss of air pressure',
      'An increase in braking efficiency',
      'A malfunction of the air compressor'
    ],
    correctAnswers: ['A gradual loss of braking power due to heat buildup'],
    explanation: 'Brake fade occurs when brakes get too hot, causing a gradual loss of braking power. This can happen during prolonged brake use, such as when descending a long hill.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-14',
    question: 'What is the proper way to check for air leaks in the air brake system?',
    answers: [
      'Listen for hissing sounds while the engine is running',
      'Apply full brake pressure and observe the air gauge for 1 minute',
      'Release the parking brake and drive the vehicle',
      'Pump the brake pedal rapidly'
    ],
    correctAnswers: ['Apply full brake pressure and observe the air gauge for 1 minute'],
    explanation: 'To check for air leaks, apply full brake pressure with the parking brake released, then turn off the engine and observe the air gauge for 1 minute. Air pressure should not drop more than 3 psi in 1 minute for single vehicles or 4 psi for combination vehicles.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-15',
    question: 'What is the function of the air compressor governor?',
    answers: [
      'To compress air for the brake system',
      'To control when the air compressor pumps air into the air storage tanks',
      'To release air pressure from the tanks',
      'To distribute air to the brake chambers'
    ],
    correctAnswers: ['To control when the air compressor pumps air into the air storage tanks'],
    explanation: 'The air compressor governor controls when the air compressor will pump air into the air storage tanks.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-16',
    question: 'What component in an air brake system converts air pressure to mechanical force?',
    answers: [
      'Air compressor',
      'Brake chamber',
      'Slack adjuster',
      'S-cam'
    ],
    correctAnswers: ['Brake chamber'],
    explanation: 'The brake chamber uses compressed air to create mechanical force that applies the brakes by pushing against the brake shoes.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-17',
    question: 'What does rapid air pressure loss during a leak test indicate?',
    answers: [
      'Normal operation of the system',
      'A potential leak in the system',
      'A malfunctioning compressor',
      'Excessive moisture in the tanks'
    ],
    correctAnswers: ['A potential leak in the system'],
    explanation: 'A rapid drop in air pressure during a leak test indicates that there may be a leak somewhere in the braking system that needs to be addressed.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-18',
    question: 'What should you do before leaving your vehicle unattended?',
    answers: [
      'Turn off all lights',
      'Apply parking brakes and remove key',
      'Leave engine running',
      'Check tire pressure'
    ],
    correctAnswers: ['Apply parking brakes and remove key'],
    explanation: 'Always apply parking brakes and remove your key before leaving your vehicle unattended to prevent unauthorized use.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-19',
    question: 'When should you use stab braking with air brakes?',
    answers: [
      'During normal driving conditions',
      'In emergency situations',
      'When driving downhill',
      'When towing heavy loads'
    ],
    correctAnswers: ['In emergency situations'],
    explanation: 'Stab braking involves fully applying and releasing brakes repeatedly during emergencies to maintain control.',
    questionTag: 'air-brakes-3'
  },
  {
    id: 'ab3-20',
    question: 'What is a slack adjuster used for?',
    answers: [
      'Adjusting tire pressure',
      'Compensating for brake wear',
      'Increasing braking power',
      'Regulating airflow'
    ],
    correctAnswers: ['Compensating for brake wear'],
    explanation: 'Slack adjusters automatically adjust themselves to compensate for wear on brake shoes.',
    questionTag: 'air-brakes-3'
  }
];