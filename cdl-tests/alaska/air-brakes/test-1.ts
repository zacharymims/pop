import { Question } from '../../../../types';

export const alaskaAirBrakes1: Question[] = [
  {
    id: 'ab-1',
    question: 'What are the three systems that make up the air brake system?',
    answers: [
      'Service, parking, and emergency brake systems',
      'Hydraulic, pneumatic, and electric systems',
      'Compressor, governor, and tank systems',
      'Primary, secondary, and tertiary systems'
    ],
    correctAnswers: ['Service, parking, and emergency brake systems'],
    explanation: 'The air brake system is made up of three braking systems: service, parking, and emergency brake systems.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-2',
    question: 'What is the purpose of the air compressor governor?',
    answers: [
      'To compress air for the brake system',
      'To control when the air compressor will pump air into the air storage tanks',
      'To release air pressure from the tanks',
      'To distribute air to the brake chambers'
    ],
    correctAnswers: ['To control when the air compressor will pump air into the air storage tanks'],
    explanation: 'The air compressor governor controls when the air compressor will pump air into the air storage tanks.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-3',
    question: 'What is the normal air pressure operating range for air brake systems?',
    answers: [
      '80-100 psi',
      '100-125 psi',
      '125-150 psi',
      '150-175 psi'
    ],
    correctAnswers: ['100-125 psi'],
    explanation: 'The normal operating pressure range for air brake systems is 100-125 psi.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-4',
    question: 'At what pressure should the low air pressure warning signal activate?',
    answers: [
      'Below 40 psi',
      'Below 50 psi',
      'Below 60 psi',
      'Below 70 psi'
    ],
    correctAnswers: ['Below 60 psi'],
    explanation: 'The low air pressure warning signal must come on before the pressure drops below 60 psi in the air tank.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-5',
    question: 'What is the purpose of the safety valve on air tanks?',
    answers: [
      'To release air if the governor is not working',
      'To prevent tank overpressurization',
      'To regulate air flow to the brake chambers',
      'To remove moisture from the air system'
    ],
    correctAnswers: ['To release air if the governor is not working'],
    explanation: 'The safety valve protects the tank and the rest of the system from too much pressure. It is usually set to open at 150 psi and is designed to release air if the governor is not working.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-6',
    question: 'What component spreads the brake shoes apart and presses them against the inside of the brake drum?',
    answers: [
      'Brake chamber',
      'S-cam',
      'Slack adjuster',
      'Push rod'
    ],
    correctAnswers: ['S-cam'],
    explanation: 'When you push the brake pedal, air is let into each brake chamber. Air pressure pushes the rod out, moving the slack adjuster, thus twisting the brake camshaft. This turns the S-cam, which spreads the brake shoes apart and presses them against the inside of the brake drum.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-7',
    question: 'What is the maximum allowable air loss rate for a single vehicle with the engine off and brakes on?',
    answers: [
      '1 psi per minute',
      '2 psi per minute',
      '3 psi per minute',
      '4 psi per minute'
    ],
    correctAnswers: ['3 psi per minute'],
    explanation: 'With the engine off and brakes on, air pressure should not drop more than 3 psi in one minute for single vehicles.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-8',
    question: 'What is the purpose of the air tank drain valves?',
    answers: [
      'To release excess air pressure',
      'To remove water and compressor oil',
      'To regulate air flow to the brake chambers',
      'To adjust brake pressure'
    ],
    correctAnswers: ['To remove water and compressor oil'],
    explanation: 'Air tank drain valves are used to remove water and compressor oil from the air tanks, as water and oil can lead to system failure if allowed to accumulate.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-9',
    question: 'What is the purpose of an alcohol evaporator in an air brake system?',
    answers: [
      'To cool the compressed air',
      'To lubricate the brake components',
      'To remove moisture from the air',
      'To prevent air line freeze-ups'
    ],
    correctAnswers: ['To prevent air line freeze-ups'],
    explanation: 'An alcohol evaporator puts alcohol into the air system to prevent air line freeze-ups in cold weather.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-10',
    question: 'What is the function of spring brakes?',
    answers: [
      'To provide additional braking power',
      'To serve as parking brakes',
      'To assist in emergency stops',
      'To adjust brake shoe clearance'
    ],
    correctAnswers: ['To serve as parking brakes'],
    explanation: 'Spring brakes are used for parking and will apply when air pressure drops too low.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-11',
    question: 'What happens if the air pressure falls below 20-45 psi in vehicles with spring brakes?',
    answers: [
      'The brakes release automatically',
      'The spring brakes come on fully',
      'The low air warning signal activates',
      'The brake drums overheat'
    ],
    correctAnswers: ['The spring brakes come on fully'],
    explanation: 'On trucks and buses, a parking brake spring applies the brakes when air pressure drops to a low level (usually between 20-45 psi). This causes a sudden stop and can be dangerous if it happens while driving.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-12',
    question: 'What is the purpose of the tractor protection valve?',
    answers: [
      'To protect the tractor air tanks if the trailer breaks away',
      'To increase air pressure in the trailer',
      'To regulate brake pressure between tractor and trailer',
      'To cool the tractor brakes'
    ],
    correctAnswers: ['To protect the tractor air tanks if the trailer breaks away'],
    explanation: 'The tractor protection valve keeps air in the tractor or truck brake system in case the trailer breaks away or develops a bad leak.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-13',
    question: 'What is the correct order of brake tests for a truck or bus with air brakes?',
    answers: [
      'Service brake, parking brake, low pressure warning',
      'Low pressure warning, parking brake, service brake',
      'Parking brake, service brake, low pressure warning',
      'Low pressure warning, service brake, parking brake'
    ],
    correctAnswers: ['Low pressure warning, parking brake, service brake'],
    explanation: 'The proper order for brake tests is: 1) Test low pressure warning signal. 2) Test parking brake. 3) Test service brakes.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-14',
    question: 'What should you do if the low air pressure warning comes on while driving?',
    answers: [
      'Continue driving to the next rest stop',
      'Increase speed to build up air pressure',
      'Stop and safely park as soon as possible',
      'Turn off the engine immediately'
    ],
    correctAnswers: ['Stop and safely park as soon as possible'],
    explanation: 'If the low air pressure warning comes on, stop and safely park your vehicle as soon as possible.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-15',
    question: 'What is brake fade?',
    answers: [
      'A gradual loss of braking power due to heat buildup',
      'A sudden failure of the air compressor',
      'A leak in the air brake system',
      'Uneven wear of brake shoes'
    ],
    correctAnswers: ['A gradual loss of braking power due to heat buildup'],
    explanation: 'Brake fade is a gradual loss of braking power that occurs when brakes get very hot from excessive use.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-16',
    question: 'What is the proper braking technique for long, steep downgrades?',
    answers: [
      'Use the service brake steadily',
      'Alternate between brake and release',
      'Use engine braking and proper gear',
      'Apply full pressure to the brake pedal'
    ],
    correctAnswers: ['Use engine braking and proper gear'],
    explanation: 'The proper braking technique for long, steep downgrades is to go slow enough so that you can use engine braking to control your speed without using the service brakes heavily.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-17',
    question: 'What is the emergency stopping technique for vehicles with ABS?',
    answers: [
      'Pump the brakes',
      'Apply steady pressure to the brake pedal',
      'Rapidly press and release the brake pedal',
      'Use the parking brake'
    ],
    correctAnswers: ['Apply steady pressure to the brake pedal'],
    explanation: 'For emergency stops with ABS, apply full brake pressure and hold it. ABS will prevent wheel lock-up and allow you to maintain steering control.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-18',
    question: 'What does ABS do in vehicles with air brakes?',
    answers: [
      'Increases braking power',
      'Allows you to drive faster in slippery conditions',
      'Prevents wheel lock-up during hard braking',
      'Reduces stopping distance on dry pavement'
    ],
    correctAnswers: ['Prevents wheel lock-up during hard braking'],
    explanation: 'ABS helps prevent wheel lock-up during hard braking situations, allowing you to maintain steering control.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-19',
    question: 'How often should you drain air tanks on a vehicle without automatic tank drains?',
    answers: [
      'Daily',
      'Weekly',
      'Monthly',
      'Annually'
    ],
    correctAnswers: ['Daily'],
    explanation: 'Air tanks should be drained daily on vehicles without automatic tank drains to remove moisture and oil buildup.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab-20',
    question: 'What is the purpose of the trailer hand valve (also called the trolley valve)?',
    answers: [
      'To release air from the trailer tanks',
      'To apply the trailer brakes independently',
      'To increase air pressure in the trailer system',
      'To activate the trailer lights'
    ],
    correctAnswers: ['To apply the trailer brakes independently'],
    explanation: 'The trailer hand valve (trolley valve) allows you to apply the trailer brakes independently of the tractor brakes.',
    questionTag: 'air-brakes-1'
  }
];