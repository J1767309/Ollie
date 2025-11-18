
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    questionText: 'What is weather?',
    options: [
      'The condition or state of the atmosphere, along with short-term changes, of a certain place at a certain time.',
      'The long-term average of atmospheric conditions over decades.',
      'The movement of tectonic plates below the Earth\'s surface.',
      'The gravitational pull of the moon on the oceans.',
    ],
    correctAnswer:
      'The condition or state of the atmosphere, along with short-term changes, of a certain place at a certain time.',
  },
  {
    id: 2,
    questionText: 'What are the two main causes of weather?',
    options: [
      'Movement and interaction of air masses & Unequal heating of Earth\'s surface.',
      'The Earth\'s rotation and its magnetic field.',
      'Volcanic eruptions and ocean tides.',
      'Solar flares and the changing of seasons.',
    ],
    correctAnswer:
      'Movement and interaction of air masses & Unequal heating of Earth\'s surface.',
  },
  {
    id: 3,
    questionText: 'What is air temperature?',
    options: [
      'The measure of the average kinetic energy of molecules in the air.',
      'The total weight of the air column above a certain point.',
      'The amount of moisture present in the atmosphere.',
      'The speed at which air molecules are moving horizontally.',
    ],
    correctAnswer:
      'The measure of the average kinetic energy of molecules in the air.',
  },
  {
    id: 4,
    questionText: 'Do air molecules move faster in warm air or cool air?',
    options: [
      'Air molecules move FASTER in warm air because they have more energy.',
      'Air molecules move SLOWER in warm air because it is less dense.',
      'They move at the same speed regardless of temperature.',
      'Only cool air molecules move; warm air molecules are stationary.',
    ],
    correctAnswer:
      'Air molecules move FASTER in warm air because they have more energy.',
  },
  {
    id: 5,
    questionText: 'What is air pressure?',
    options: [
      'The force or weight that a column of air applies on the surface or area below it.',
      'The amount of oxygen in the air.',
      'The temperature at which clouds form.',
      'The percentage of water vapor in the atmosphere.',
    ],
    correctAnswer:
      'The force or weight that a column of air applies on the surface or area below it.',
  },
  {
    id: 6,
    questionText: 'What happens to air pressure as elevation increases?',
    options: [
      'Air pressure DECREASES as elevation increases.',
      'Air pressure INCREASES as elevation increases.',
      'Air pressure stays the same regardless of elevation.',
      'Air pressure becomes unpredictable.',
    ],
    correctAnswer: 'Air pressure DECREASES as elevation increases.',
  },
  {
    id: 7,
    questionText: 'What is humidity?',
    options: [
      'The amount of water vapor in the atmosphere or air.',
      'The temperature felt by the human body.',
      'The pressure exerted by water.',
      'The visibility level through the air.',
    ],
    correctAnswer: 'The amount of water vapor in the atmosphere or air.',
  },
  {
    id: 8,
    questionText: 'What is relative humidity?',
    options: [
      'The amount of water vapor present in the air compared to the maximum amount of water vapor the air could contain at that temperature.',
      'The humidity level relative to the previous day.',
      'A measure of how much it feels like it might rain.',
      'The total weight of water in a cloud.',
    ],
    correctAnswer:
      'The amount of water vapor present in the air compared to the maximum amount of water vapor the air could contain at that temperature.',
  },
  {
    id: 9,
    questionText: 'What is a high-pressure system?',
    options: [
      'A large body of descending/sinking air with higher pressure at its center and lower pressure outside.',
      'A large body of rising air that typically brings storms.',
      'An area where the atmospheric pressure is extremely low.',
      'A weather system that only occurs over mountains.',
    ],
    correctAnswer:
      'A large body of descending/sinking air with higher pressure at its center and lower pressure outside.',
  },
  {
    id: 10,
    questionText: 'What is a low-pressure system?',
    options: [
      'A large body of circulating air with lower pressure at its center and higher pressure outside.',
      'A system that guarantees clear, sunny skies.',
      'An area where air is sinking towards the ground.',
      'A small, localized weather event like a dust devil.',
    ],
    correctAnswer:
      'A large body of circulating air with lower pressure at its center and higher pressure outside.',
  },
  {
    id: 11,
    questionText: 'What type of weather does a HIGH-pressure system bring?',
    options: [
      'Clear skies, sunny, fair weather.',
      'Cloudy skies, rain, and storms.',
      'Heavy snowfall and blizzards.',
      'Tornadoes and thunderstorms.',
    ],
    correctAnswer: 'Clear skies, sunny, fair weather.',
  },
  {
    id: 12,
    questionText: 'What type of weather does a LOW-pressure system bring?',
    options: [
      'Cloudy skies, possibly rain or storms.',
      'Sunny and calm conditions.',
      'Dry and desert-like weather.',
      'Guaranteed beautiful, fair weather.',
    ],
    correctAnswer: 'Cloudy skies, possibly rain or storms.',
  },
  {
    id: 13,
    questionText: 'What is an air mass?',
    options: [
      'A large body of air that has similar temperature, similar humidity, and similar pressure characteristics.',
      'The total mass of the Earth\'s atmosphere.',
      'A small pocket of air with different properties from its surroundings.',
      'A cloud that is about to produce rain.',
    ],
    correctAnswer:
      'A large body of air that has similar temperature, similar humidity, and similar pressure characteristics.',
  },
  {
    id: 14,
    questionText: 'How does an air mass form?',
    options: [
      'When a large high-pressure system lingers over an area for multiple days.',
      'When a tornado touches down.',
      'During a solar eclipse.',
      'When a low-pressure system moves quickly over an ocean.',
    ],
    correctAnswer:
      'When a large high-pressure system lingers over an area for multiple days.',
  },
  {
    id: 15,
    questionText: 'What does "Continental" mean for air masses?',
    options: [
      'Continental = forms over LAND = DRY air',
      'Continental = forms over OCEAN = MOIST air',
      'Continental = forms near the poles = COLD air',
      'Continental = forms near the equator = WARM air',
    ],
    correctAnswer: 'Continental = forms over LAND = DRY air',
  },
  {
    id: 16,
    questionText: 'What does "Maritime" mean for air masses?',
    options: [
      'Maritime = forms over OCEAN = MOIST/HUMID air',
      'Maritime = forms over LAND = DRY air',
      'Maritime = forms in mountainous regions = COLD air',
      'Maritime = is always stationary',
    ],
    correctAnswer: 'Maritime = forms over OCEAN = MOIST/HUMID air',
  },
  {
    id: 17,
    questionText: 'What does "Polar" mean for air masses?',
    options: [
      'Polar = from near the poles = COLD air',
      'Polar = from near the equator = WARM air',
      'Polar = forms over oceans = MOIST air',
      'Polar = brings sunny weather',
    ],
    correctAnswer: 'Polar = from near the poles = COLD air',
  },
  {
    id: 18,
    questionText: 'What does "Tropical" mean for air masses?',
    options: [
      'Tropical = from near the equator = WARM/HOT air',
      'Tropical = from near the poles = COLD air',
      'Tropical = forms over land = DRY air',
      'Tropical = brings snowy weather',
    ],
    correctAnswer: 'Tropical = from near the equator = WARM/HOT air',
  },
  {
    id: 19,
    questionText: 'Describe an Arctic air mass.',
    options: [
      'Temperature: Very cold; Moisture Level: Dry',
      'Temperature: Very hot; Moisture Level: Humid',
      'Temperature: Mild; Moisture Level: Moist',
      'Temperature: Freezing; Moisture Level: Very Humid',
    ],
    correctAnswer: 'Temperature: Very cold; Moisture Level: Dry',
  },
  {
    id: 20,
    questionText: 'Describe a Continental Polar air mass.',
    options: [
      'Temperature: Cold; Moisture Level: Dry',
      'Temperature: Hot; Moisture Level: Humid',
      'Temperature: Warm; Moisture Level: Moist',
      'Temperature: Cold; Moisture Level: Humid',
    ],
    correctAnswer: 'Temperature: Cold; Moisture Level: Dry',
  },
  {
    id: 21,
    questionText: 'Describe a Maritime Polar air mass.',
    options: [
      'Temperature: Cool/Cold; Moisture Level: Moist/Humid',
      'Temperature: Hot; Moisture Level: Dry',
      'Temperature: Very Cold; Moisture Level: Dry',
      'Temperature: Warm; Moisture Level: Dry',
    ],
    correctAnswer: 'Temperature: Cool/Cold; Moisture Level: Moist/Humid',
  },
  {
    id: 22,
    questionText: 'Describe a Continental Tropical air mass.',
    options: [
      'Temperature: Hot; Moisture Level: Dry',
      'Temperature: Cold; Moisture Level: Humid',
      'Temperature: Warm; Moisture Level: Moist',
      'Temperature: Very Hot; Moisture Level: Humid',
    ],
    correctAnswer: 'Temperature: Hot; Moisture Level: Dry',
  },
  {
    id: 23,
    questionText: 'Describe a Maritime Tropical air mass.',
    options: [
      'Temperature: Warm/Hot; Moisture Level: Very Moist/Humid',
      'Temperature: Cold; Moisture Level: Dry',
      'Temperature: Cool; Moisture Level: Dry',
      'Temperature: Hot; Moisture Level: Dry',
    ],
    correctAnswer: 'Temperature: Warm/Hot; Moisture Level: Very Moist/Humid',
  },
  {
    id: 24,
    questionText: 'What causes global winds?',
    options: [
      'The unequal heating of Earth\'s surfaces.',
      'The gravitational pull of the sun.',
      'The rotation of the moon around the Earth.',
      'The movement of ocean currents.',
    ],
    correctAnswer: 'The unequal heating of Earth\'s surfaces.',
  },
  {
    id: 25,
    questionText: 'What do ocean currents do?',
    options: [
      'Transport warm water from the equator toward the poles, and cold water from the poles back to the tropics.',
      'Only move cold water from the poles.',
      'Create volcanoes on the ocean floor.',
      'Have no effect on global weather patterns.',
    ],
    correctAnswer:
      'Transport warm water from the equator toward the poles, and cold water from the poles back to the tropics.',
  },
  {
    id: 26,
    questionText: 'What is wind?',
    options: [
      'The process of air moving from an area of high pressure to low pressure, moving horizontally.',
      'The process of air moving vertically up into the atmosphere.',
      'The rotation of the Earth on its axis.',
      'The sound that air makes as it cools.',
    ],
    correctAnswer:
      'The process of air moving from an area of high pressure to low pressure, moving horizontally.',
  },
  {
    id: 27,
    questionText: 'What is dew point?',
    options: [
      'The temperature at which air is saturated and condensation can occur.',
      'The point on a plant where dew forms.',
      'The highest temperature recorded in a day.',
      'The amount of pressure required to create rain.',
    ],
    correctAnswer:
      'The temperature at which air is saturated and condensation can occur.',
  },
  {
    id: 28,
    questionText: 'What happens when air reaches its dew point?',
    options: [
      'Water vapor condenses and forms tiny water droplets, which appear as clouds.',
      'The air becomes completely dry.',
      'It starts to snow, regardless of the temperature.',
      'The wind stops blowing.',
    ],
    correctAnswer:
      'Water vapor condenses and forms tiny water droplets, which appear as clouds.',
  },
  {
    id: 29,
    questionText: 'When does precipitation occur?',
    options: [
      'When water droplets combine and become large enough to fall back to Earth\'s surface.',
      'Any time there are clouds in the sky.',
      'When the sun is shining brightly.',
      'Only during a low-pressure system.',
    ],
    correctAnswer:
      'When water droplets combine and become large enough to fall back to Earth\'s surface.',
  },
  {
    id: 30,
    questionText: 'What is rain?',
    options: [
      'Liquid water droplets that fall when temperature is above freezing.',
      'Frozen ice crystals that fall from the sky.',
      'Water vapor that is visible in the air.',
      'A mixture of snow and hail.',
    ],
    correctAnswer:
      'Liquid water droplets that fall when temperature is above freezing.',
  },
  {
    id: 31,
    questionText: 'What is snow?',
    options: [
      'Ice crystals that form when temperature is below freezing throughout the atmosphere.',
      'Rain that freezes on its way down.',
      'Small pellets of ice formed in thunderstorms.',
      'Fluffy clouds that are close to the ground.',
    ],
    correctAnswer:
      'Ice crystals that form when temperature is below freezing throughout the atmosphere.',
  },
  {
    id: 32,
    questionText: 'What is sleet?',
    options: [
      'Rain that freezes as it falls through a layer of cold air near the ground, creating ice pellets.',
      'A very light, misty rain.',
      'Large chunks of ice that fall during thunderstorms.',
      'Snow that is partially melted.',
    ],
    correctAnswer:
      'Rain that freezes as it falls through a layer of cold air near the ground, creating ice pellets.',
  },
  {
    id: 33,
    questionText: 'What is hail?',
    options: [
      'Balls or chunks of ice that form in thunderstorms.',
      'Frozen raindrops.',
      'A type of very cold snow.',
      'Sleet that has been on the ground for a while.',
    ],
    correctAnswer: 'Balls or chunks of ice that form in thunderstorms.',
  },
  {
    id: 34,
    questionText: 'What happens at 100% relative humidity?',
    options: [
      'Air will start to form dew or rain because it cannot hold any more water vapor.',
      'The air becomes completely dry.',
      'The temperature drops to freezing.',
      'It becomes impossible for clouds to form.',
    ],
    correctAnswer:
      'Air will start to form dew or rain because it cannot hold any more water vapor.',
  },
  {
    id: 35,
    questionText: 'In a low-pressure system, what happens to air inside the system?',
    options: [
      'Air inside the low-pressure system RISES.',
      'Air inside the low-pressure system SINKS.',
      'Air inside the low-pressure system remains stationary.',
      'Air inside the low-pressure system moves outwards horizontally.',
    ],
    correctAnswer: 'Air inside the low-pressure system RISES.',
  },
  {
    id: 36,
    questionText: 'Why do clouds block light and become visible?',
    options: [
      'Thousands of tiny water droplets block and reflect light.',
      'Clouds are made of a dark, opaque gas.',
      'They absorb all light that hits them.',
      'Clouds have their own internal light source.',
    ],
    correctAnswer: 'Thousands of tiny water droplets block and reflect light.',
  },
  {
    id: 37,
    questionText: 'What is climate?',
    options: [
      'The average weather conditions in an area over a LONG period of time.',
      'The weather forecast for the next 24 hours.',
      'A single weather event, like a hurricane.',
      'The temperature of the ocean.',
    ],
    correctAnswer:
      'The average weather conditions in an area over a LONG period of time.',
  },
  {
    id: 38,
    questionText: 'Which direction does air move in relation to pressure?',
    options: [
      'Air moves FROM high pressure TO low pressure.',
      'Air moves FROM low pressure TO high pressure.',
      'Air moves randomly, regardless of pressure.',
      'Air only moves vertically, not based on pressure.',
    ],
    correctAnswer: 'Air moves FROM high pressure TO low pressure.',
  },
  {
    id: 39,
    questionText:
      'What would you expect the weather to be like if a Maritime Tropical air mass moved over Florida?',
    options: [
      'Warm/hot temperatures and very humid conditions.',
      'Cold, dry, and sunny conditions.',
      'Freezing rain and sleet.',
      'Mild temperatures with no humidity.',
    ],
    correctAnswer: 'Warm/hot temperatures and very humid conditions.',
  },
  {
    id: 40,
    questionText:
      'What would you expect the weather to be like if a Continental Polar air mass moved over Florida?',
    options: [
      'Cold temperatures and dry conditions.',
      'Hot, humid, and rainy conditions.',
      'A major hurricane would form.',
      'It would have no effect on Florida\'s weather.',
    ],
    correctAnswer: 'Cold temperatures and dry conditions.',
  },
  // Chapter 4: Weathering, Erosion & Deposition
  {
    id: 41,
    questionText: 'What is weathering?',
    options: [
      'The physical and chemical processes that change rocks and minerals over long periods of time. Weathering happens IN PLACE (rock doesn\'t move).',
      'The process of moving broken rocks from one place to another.',
      'The formation of new rocks from molten lava.',
      'The growth of plants on rock surfaces.',
    ],
    correctAnswer: 'The physical and chemical processes that change rocks and minerals over long periods of time. Weathering happens IN PLACE (rock doesn\'t move).',
  },
  {
    id: 42,
    questionText: 'What is the difference between weathering and erosion?',
    options: [
      'WEATHERING = Breaking down rocks IN PLACE (rock stays put) | EROSION = MOVING the broken pieces somewhere else',
      'Weathering moves rocks, erosion breaks them down.',
      'They are the same process with different names.',
      'Weathering happens underwater, erosion happens on land.',
    ],
    correctAnswer: 'WEATHERING = Breaking down rocks IN PLACE (rock stays put) | EROSION = MOVING the broken pieces somewhere else',
  },
  {
    id: 43,
    questionText: 'What is physical weathering?',
    options: [
      'When rocks naturally break into smaller pieces WITHOUT changing their chemical composition. Same material, just smaller!',
      'When rocks change their chemical structure completely.',
      'When rocks melt into liquid form.',
      'When rocks combine with other minerals to form new compounds.',
    ],
    correctAnswer: 'When rocks naturally break into smaller pieces WITHOUT changing their chemical composition. Same material, just smaller!',
  },
  {
    id: 44,
    questionText: 'What is chemical weathering?',
    options: [
      'Changes the composition (what it\'s made of) or minerals that are part of a rock into different materials. The rock\'s chemical structure changes.',
      'Breaks rocks into smaller pieces without changing what they\'re made of.',
      'Only happens when rocks are exposed to extreme heat.',
      'The process of rocks being carried away by water.',
    ],
    correctAnswer: 'Changes the composition (what it\'s made of) or minerals that are part of a rock into different materials. The rock\'s chemical structure changes.',
  },
  {
    id: 45,
    questionText: 'Describe the ice wedging process.',
    options: [
      '1. Water enters cracks in rocks 2. Water freezes and expands 3. Expanding ice pushes against rock, widening crack 4. Ice melts, more water enters 5. Process repeats until rock breaks apart',
      'Ice forms on top of rocks and melts quickly.',
      'Rocks freeze solid and shatter immediately.',
      'Water flows over rocks without entering cracks.',
    ],
    correctAnswer: '1. Water enters cracks in rocks 2. Water freezes and expands 3. Expanding ice pushes against rock, widening crack 4. Ice melts, more water enters 5. Process repeats until rock breaks apart',
  },
  {
    id: 46,
    questionText: 'What is abrasion?',
    options: [
      'The wearing away of rock surfaces as particles are carried by water, wind, ice, or gravity. Moving particles scrape against rocks, wearing both down.',
      'The chemical breakdown of rocks by acid rain.',
      'The formation of caves in limestone.',
      'The growth of moss and lichen on rock surfaces.',
    ],
    correctAnswer: 'The wearing away of rock surfaces as particles are carried by water, wind, ice, or gravity. Moving particles scrape against rocks, wearing both down.',
  },
  {
    id: 47,
    questionText: 'Give an example of physical weathering by plants.',
    options: [
      'Plant roots grow in rock cracks. As roots expand, they push against the rock, widening cracks until the rock splits apart. Example: tree roots breaking up sidewalks.',
      'Plants secrete acids that dissolve rocks.',
      'Plants only grow on top of rocks without affecting them.',
      'Leaves falling on rocks cause them to decay.',
    ],
    correctAnswer: 'Plant roots grow in rock cracks. As roots expand, they push against the rock, widening cracks until the rock splits apart. Example: tree roots breaking up sidewalks.',
  },
  {
    id: 48,
    questionText: 'What is oxidation?',
    options: [
      'A chemical weathering process that combines oxygen with other elements or compounds. When iron oxidizes, it\'s called "rusting."',
      'A physical weathering process involving ice.',
      'The removal of oxygen from rocks.',
      'A process that only affects plant materials.',
    ],
    correctAnswer: 'A chemical weathering process that combines oxygen with other elements or compounds. When iron oxidizes, it\'s called "rusting."',
  },
  {
    id: 49,
    questionText: 'Why does rain in cities cause MORE chemical weathering than rain in the countryside?',
    options: [
      'City rainwater mixes with pollution (car exhaust, factory emissions), creating weak acids. Acids are more chemically reactive and break down rocks faster than plain rainwater.',
      'City rain falls harder than countryside rain.',
      'Cities have more rocks exposed to rain.',
      'Countryside rain is warmer and less effective.',
    ],
    correctAnswer: 'City rainwater mixes with pollution (car exhaust, factory emissions), creating weak acids. Acids are more chemically reactive and break down rocks faster than plain rainwater.',
  },
  {
    id: 50,
    questionText: 'What are the three types of rocks in the rock cycle?',
    options: [
      '1. IGNEOUS - formed from cooled magma/lava 2. SEDIMENTARY - formed from compressed sediment 3. METAMORPHIC - formed by heat and pressure changing existing rocks',
      'Granite, marble, and sandstone.',
      'Hard rocks, soft rocks, and medium rocks.',
      'Surface rocks, underground rocks, and ocean rocks.',
    ],
    correctAnswer: '1. IGNEOUS - formed from cooled magma/lava 2. SEDIMENTARY - formed from compressed sediment 3. METAMORPHIC - formed by heat and pressure changing existing rocks',
  },
  {
    id: 51,
    questionText: 'What is erosion?',
    options: [
      'The wearing away and removal of weathered material from one place to another. Erosion MOVES material.',
      'The breaking down of rocks in place.',
      'The formation of new soil from rock.',
      'The settling of sediment in one location.',
    ],
    correctAnswer: 'The wearing away and removal of weathered material from one place to another. Erosion MOVES material.',
  },
  {
    id: 52,
    questionText: 'What is deposition?',
    options: [
      'The laying down or settling of eroded material (sediment). Happens when the agent of erosion slows down or stops.',
      'The movement of rocks from one place to another.',
      'The breaking apart of large rocks into small pieces.',
      'The chemical change of rock composition.',
    ],
    correctAnswer: 'The laying down or settling of eroded material (sediment). Happens when the agent of erosion slows down or stops.',
  },
  {
    id: 53,
    questionText: 'Name the four main agents of erosion.',
    options: [
      '1. Water (rivers, rain, waves) 2. Wind 3. Ice (glaciers) 4. Gravity (landslides, rockfalls)',
      'Heat, cold, pressure, and time.',
      'Plants, animals, humans, and weather.',
      'Rain, snow, hail, and sleet.',
    ],
    correctAnswer: '1. Water (rivers, rain, waves) 2. Wind 3. Ice (glaciers) 4. Gravity (landslides, rockfalls)',
  },
  {
    id: 54,
    questionText: 'What factors affect the rate of erosion?',
    options: [
      '1. Steepness of slope 2. Type of vegetation (more plants = less erosion) 3. Amount of rainfall 4. Wind speed 5. Type of rock/soil 6. Human activity',
      'Only the amount of rainfall matters.',
      'Temperature and humidity are the only factors.',
      'Erosion happens at the same rate everywhere.',
    ],
    correctAnswer: '1. Steepness of slope 2. Type of vegetation (more plants = less erosion) 3. Amount of rainfall 4. Wind speed 5. Type of rock/soil 6. Human activity',
  },
  {
    id: 55,
    questionText: 'Why are many depositional areas located along or in water?',
    options: [
      'Because water slows down when it reaches larger bodies of water. When water slows, it loses energy and drops the sediment it\'s carrying. Gravity pulls sediment down to settle.',
      'Water creates more rocks than any other agent.',
      'Fish and other organisms build up sediment.',
      'Water is the only place where deposition can occur.',
    ],
    correctAnswer: 'Because water slows down when it reaches larger bodies of water. When water slows, it loses energy and drops the sediment it\'s carrying. Gravity pulls sediment down to settle.',
  },
  {
    id: 56,
    questionText: 'Give an example of a depositional area on land.',
    options: [
      'Sand dunes in deserts. Wind carries sand particles, and when wind slows down (blocked by rocks or plants), it drops the sand. Sand accumulates into dunes.',
      'Mountain peaks where rocks pile up.',
      'Volcanoes where lava flows.',
      'Forests where trees grow.',
    ],
    correctAnswer: 'Sand dunes in deserts. Wind carries sand particles, and when wind slows down (blocked by rocks or plants), it drops the sand. Sand accumulates into dunes.',
  },
  {
    id: 57,
    questionText: 'What is mass wasting?',
    options: [
      'The downslope movement of a large amount of rock or soil because of the pull of gravity. Gravity must be the dominant cause.',
      'The gradual wearing away of rocks by wind.',
      'The chemical breakdown of minerals in soil.',
      'The formation of new landforms by volcanic activity.',
    ],
    correctAnswer: 'The downslope movement of a large amount of rock or soil because of the pull of gravity. Gravity must be the dominant cause.',
  },
  {
    id: 58,
    questionText: 'Name three types of mass wasting.',
    options: [
      '1. Landslides - rapid movement down slope 2. Mudflows - water-saturated soil flowing 3. Rockfalls - rocks falling from cliffs (Also: slumps, creep)',
      'Wind erosion, water erosion, and ice erosion.',
      'Weathering, erosion, and deposition.',
      'Physical, chemical, and biological breakdown.',
    ],
    correctAnswer: '1. Landslides - rapid movement down slope 2. Mudflows - water-saturated soil flowing 3. Rockfalls - rocks falling from cliffs (Also: slumps, creep)',
  },
  {
    id: 59,
    questionText: 'What landform is created by water EROSION?',
    options: [
      'Canyon or Gorge - deep, narrow valleys carved by flowing water over long periods. Example: Grand Canyon.',
      'Sand dunes formed by wind.',
      'U-shaped valleys formed by glaciers.',
      'Deltas formed at river mouths.',
    ],
    correctAnswer: 'Canyon or Gorge - deep, narrow valleys carved by flowing water over long periods. Example: Grand Canyon.',
  },
  {
    id: 60,
    questionText: 'What landform is created by glacier EROSION?',
    options: [
      'U-shaped Valley - wide, flat-bottomed valleys shaped by glacier movement. Glaciers are very powerful!',
      'V-shaped canyons carved by rivers.',
      'Sand dunes in deserts.',
      'Coastal cliffs from wave action.',
    ],
    correctAnswer: 'U-shaped Valley - wide, flat-bottomed valleys shaped by glacier movement. Glaciers are very powerful!',
  },
  {
    id: 61,
    questionText: 'What is an alluvial fan?',
    options: [
      'A fan-shaped DEPOSIT of water-transported sediment at the mouth of a mountain stream. Forms where fast-moving stream suddenly slows at the base of a mountain.',
      'A type of glacier formation.',
      'A wind-eroded valley.',
      'A volcanic feature.',
    ],
    correctAnswer: 'A fan-shaped DEPOSIT of water-transported sediment at the mouth of a mountain stream. Forms where fast-moving stream suddenly slows at the base of a mountain.',
  },
  {
    id: 62,
    questionText: 'What is a delta?',
    options: [
      'A landform formed by DEPOSITION at the mouth of a river where it deposits sediments into a body of water. Often triangular shaped.',
      'A canyon carved by a river.',
      'A mountain formed by tectonic plates.',
      'A cave formed by chemical weathering.',
    ],
    correctAnswer: 'A landform formed by DEPOSITION at the mouth of a river where it deposits sediments into a body of water. Often triangular shaped.',
  },
  {
    id: 63,
    questionText: 'What is a sand dune?',
    options: [
      'A mound of sand formed by wind DEPOSITION, common in deserts and beaches. Dunes can actually move as wind continues to blow!',
      'A rock formation created by water.',
      'A type of glacier.',
      'A valley carved by ice.',
    ],
    correctAnswer: 'A mound of sand formed by wind DEPOSITION, common in deserts and beaches. Dunes can actually move as wind continues to blow!',
  },
  {
    id: 64,
    questionText: 'What are coastal cliffs?',
    options: [
      'Steep faces of rock along coastlines shaped by wave EROSION. Waves constantly pound and wear away the rock.',
      'Sand deposits left by ocean currents.',
      'Underwater valleys.',
      'Mountain ranges near the ocean.',
    ],
    correctAnswer: 'Steep faces of rock along coastlines shaped by wave EROSION. Waves constantly pound and wear away the rock.',
  },
  {
    id: 65,
    questionText: 'What is a sandbar or spit?',
    options: [
      'A narrow strip of sand extending into water, formed by DEPOSITION of sediments. Created by wave action depositing sand.',
      'A deep canyon underwater.',
      'A volcanic island.',
      'A cliff formed by erosion.',
    ],
    correctAnswer: 'A narrow strip of sand extending into water, formed by DEPOSITION of sediments. Created by wave action depositing sand.',
  },
  {
    id: 66,
    questionText: 'What weathering type is most common in humid tropical rainforests?',
    options: [
      'BOTH chemical AND physical weathering. Lots of water + heat = fast chemical reactions. Heavy rain also causes physical breakdown.',
      'Only physical weathering occurs.',
      'Only chemical weathering occurs.',
      'No weathering happens in rainforests.',
    ],
    correctAnswer: 'BOTH chemical AND physical weathering. Lots of water + heat = fast chemical reactions. Heavy rain also causes physical breakdown.',
  },
  {
    id: 67,
    questionText: 'What weathering type is most common in deserts?',
    options: [
      'PHYSICAL weathering (minimal overall). Little water means little chemical weathering. Day/night temperature changes cause expansion and contraction.',
      'Chemical weathering from acid rain.',
      'No weathering occurs in deserts.',
      'Only biological weathering from plants.',
    ],
    correctAnswer: 'PHYSICAL weathering (minimal overall). Little water means little chemical weathering. Day/night temperature changes cause expansion and contraction.',
  },
  {
    id: 68,
    questionText: 'What weathering type is most common in mountainous regions?',
    options: [
      'PHYSICAL weathering, especially ice wedging. Water freezes and thaws repeatedly, splitting rocks apart.',
      'Chemical weathering from pollution.',
      'Biological weathering from animals.',
      'No weathering occurs at high elevations.',
    ],
    correctAnswer: 'PHYSICAL weathering, especially ice wedging. Water freezes and thaws repeatedly, splitting rocks apart.',
  },
  {
    id: 69,
    questionText: 'What weathering type is most common in coastal areas?',
    options: [
      'CHEMICAL weathering mostly. Salt water is very corrosive, and high humidity keeps rocks wet, speeding up chemical reactions.',
      'Only physical weathering from waves.',
      'No weathering occurs near oceans.',
      'Only wind weathering happens.',
    ],
    correctAnswer: 'CHEMICAL weathering mostly. Salt water is very corrosive, and high humidity keeps rocks wet, speeding up chemical reactions.',
  },
  {
    id: 70,
    questionText: 'Put these in order: deposition, weathering, erosion',
    options: [
      '1. WEATHERING (breaks down) 2. EROSION (moves) 3. DEPOSITION (drops/settles) Always in this order!',
      '1. Erosion 2. Deposition 3. Weathering',
      '1. Deposition 2. Weathering 3. Erosion',
      'They happen at the same time.',
    ],
    correctAnswer: '1. WEATHERING (breaks down) 2. EROSION (moves) 3. DEPOSITION (drops/settles) Always in this order!',
  },
  {
    id: 71,
    questionText: 'What\'s the difference between a canyon and a U-shaped valley?',
    options: [
      'CANYON: Created by water erosion (V-shaped, narrow, carved by rivers) | U-SHAPED VALLEY: Created by glacier erosion (wide, flat-bottomed, carved by ice)',
      'They are the same landform with different names.',
      'Canyons are made by wind, valleys by water.',
      'Canyons are shallow, valleys are deep.',
    ],
    correctAnswer: 'CANYON: Created by water erosion (V-shaped, narrow, carved by rivers) | U-SHAPED VALLEY: Created by glacier erosion (wide, flat-bottomed, carved by ice)',
  },
  {
    id: 72,
    questionText: 'Why is evidence of glacial erosion so easy to see?',
    options: [
      'Because glaciers are HUGE and incredibly powerful. They leave distinctive patterns: U-shaped valleys, scratches on rocks, smooth polish, and create unique landforms that couldn\'t form any other way.',
      'Glaciers leave no visible evidence.',
      'Glacial erosion looks identical to water erosion.',
      'Only scientists can detect glacial erosion.',
    ],
    correctAnswer: 'Because glaciers are HUGE and incredibly powerful. They leave distinctive patterns: U-shaped valleys, scratches on rocks, smooth polish, and create unique landforms that couldn\'t form any other way.',
  },
  {
    id: 73,
    questionText: 'Why do glaciers deposit larger rocks than rivers?',
    options: [
      'Glaciers have IMMENSE power and rocks are frozen IN the ice (don\'t need water to carry them). When ice melts, it simply drops everything, including house-sized boulders. Rivers can only carry rocks that water current can lift.',
      'Rivers are stronger than glaciers.',
      'Glaciers only deposit small pebbles.',
      'Rivers and glaciers deposit the same size rocks.',
    ],
    correctAnswer: 'Glaciers have IMMENSE power and rocks are frozen IN the ice (don\'t need water to carry them). When ice melts, it simply drops everything, including house-sized boulders. Rivers can only carry rocks that water current can lift.',
  },
  {
    id: 74,
    questionText: 'What are glacial erratics?',
    options: [
      'HUGE boulders (sometimes car-sized or bigger) deposited by glaciers. They\'re called "erratics" because they\'re different rock types from the area they\'re found in—carried from far away by ice.',
      'Small pebbles left by rivers.',
      'Sand dunes formed by wind.',
      'Volcanic rocks ejected from eruptions.',
    ],
    correctAnswer: 'HUGE boulders (sometimes car-sized or bigger) deposited by glaciers. They\'re called "erratics" because they\'re different rock types from the area they\'re found in—carried from far away by ice.',
  },
  {
    id: 75,
    questionText: 'What is sediment?',
    options: [
      'Small pieces of weathered rock, sand, shells, or other materials. Sediment is what gets moved during erosion and settles during deposition.',
      'Only large boulders.',
      'Molten rock from volcanoes.',
      'Ice crystals in glaciers.',
    ],
    correctAnswer: 'Small pieces of weathered rock, sand, shells, or other materials. Sediment is what gets moved during erosion and settles during deposition.',
  },
  {
    id: 76,
    questionText: 'How do weathering and erosion work together?',
    options: [
      'Weathering PREPARES rocks by breaking them down. Erosion then MOVES the weathered pieces. They work as a team—weathering is the setup, erosion is the action!',
      'They work against each other.',
      'They are the same process.',
      'Erosion happens first, then weathering.',
    ],
    correctAnswer: 'Weathering PREPARES rocks by breaking them down. Erosion then MOVES the weathered pieces. They work as a team—weathering is the setup, erosion is the action!',
  },
  {
    id: 77,
    questionText: 'What type of rock forms from deposited sediment?',
    options: [
      'SEDIMENTARY rock. When sediment is deposited, buried, compressed, and cemented together over time, it becomes sedimentary rock.',
      'Igneous rock from cooled lava.',
      'Metamorphic rock from heat and pressure.',
      'Sediment never forms rock.',
    ],
    correctAnswer: 'SEDIMENTARY rock. When sediment is deposited, buried, compressed, and cemented together over time, it becomes sedimentary rock.',
  },
  {
    id: 78,
    questionText: 'What happens when iron oxidizes?',
    options: [
      'It rusts! Iron combines with oxygen and water to form iron oxide (rust). The metal becomes reddish-brown, weak, and crumbly.',
      'It becomes stronger and shinier.',
      'Nothing happens to iron.',
      'It turns into gold.',
    ],
    correctAnswer: 'It rusts! Iron combines with oxygen and water to form iron oxide (rust). The metal becomes reddish-brown, weak, and crumbly.',
  },
  {
    id: 79,
    questionText: 'Name three factors that trigger mass wasting.',
    options: [
      '1. Heavy rainfall (adds weight, reduces friction) 2. Earthquakes (shaking loosens material) 3. Removal of vegetation (roots no longer hold soil)',
      'Sunlight, wind, and temperature.',
      'Ocean tides, moon phases, and seasons.',
      'Animal activity, plant growth, and rain.',
    ],
    correctAnswer: '1. Heavy rainfall (adds weight, reduces friction) 2. Earthquakes (shaking loosens material) 3. Removal of vegetation (roots no longer hold soil)',
  },
  {
    id: 80,
    questionText: 'What\'s the difference between igneous and metamorphic rock?',
    options: [
      'IGNEOUS: Forms from cooled magma or lava (melted rock that cools) | METAMORPHIC: Forms when existing rocks are changed by heat and pressure (transformed, not melted)',
      'They are the same type of rock.',
      'Igneous is soft, metamorphic is hard.',
      'Metamorphic comes from volcanoes, igneous from oceans.',
    ],
    correctAnswer: 'IGNEOUS: Forms from cooled magma or lava (melted rock that cools) | METAMORPHIC: Forms when existing rocks are changed by heat and pressure (transformed, not melted)',
  },
  {
    id: 81,
    questionText: 'Why do plants increase physical weathering?',
    options: [
      'Plant roots grow into cracks and expand as they grow. The expanding roots push against the rock with tremendous force, eventually splitting it apart.',
      'Plants create acids that dissolve rocks.',
      'Plants prevent all weathering.',
      'Plants only affect soil, not rocks.',
    ],
    correctAnswer: 'Plant roots grow into cracks and expand as they grow. The expanding roots push against the rock with tremendous force, eventually splitting it apart.',
  },
  {
    id: 82,
    questionText: 'What\'s the connection between weathering/erosion/deposition and the rock cycle?',
    options: [
      'Weathering and erosion break down existing rocks. Deposition lays down sediment. Over time, this sediment becomes SEDIMENTARY ROCK, continuing the rock cycle!',
      'They have no connection to the rock cycle.',
      'Only weathering affects the rock cycle.',
      'The rock cycle stops after deposition.',
    ],
    correctAnswer: 'Weathering and erosion break down existing rocks. Deposition lays down sediment. Over time, this sediment becomes SEDIMENTARY ROCK, continuing the rock cycle!',
  },
  {
    id: 83,
    questionText: 'How does steep slope affect erosion?',
    options: [
      'Steeper slopes = FASTER erosion. Gravity pulls material down more strongly on steep slopes, and water flows faster, carrying more material away.',
      'Steep slopes prevent erosion.',
      'Slope has no effect on erosion rate.',
      'Flat areas erode faster than steep slopes.',
    ],
    correctAnswer: 'Steeper slopes = FASTER erosion. Gravity pulls material down more strongly on steep slopes, and water flows faster, carrying more material away.',
  },
  {
    id: 84,
    questionText: 'How does vegetation affect erosion?',
    options: [
      'MORE plants = LESS erosion. Plant roots hold soil in place like anchors. Areas without plants (like construction sites or deforested areas) erode much faster.',
      'Plants increase erosion significantly.',
      'Vegetation has no effect on erosion.',
      'Only trees affect erosion, not other plants.',
    ],
    correctAnswer: 'MORE plants = LESS erosion. Plant roots hold soil in place like anchors. Areas without plants (like construction sites or deforested areas) erode much faster.',
  },
  {
    id: 85,
    questionText: 'What conditions are needed for ice wedging to occur?',
    options: [
      '1. Cracks or gaps in rocks 2. Water to enter the cracks 3. Temperatures that freeze and thaw (above and below 32°F/0°C) 4. Repeated freeze-thaw cycles',
      'Only extremely cold temperatures are needed.',
      'Ice wedging can happen anywhere, anytime.',
      'Only heat is required.',
    ],
    correctAnswer: '1. Cracks or gaps in rocks 2. Water to enter the cracks 3. Temperatures that freeze and thaw (above and below 32°F/0°C) 4. Repeated freeze-thaw cycles',
  },
  {
    id: 86,
    questionText: 'How are river rocks so smooth and rounded?',
    options: [
      'ABRASION! As rocks tumble along the river bottom, they constantly scrape against each other and the riverbed. This wears off rough edges over time, creating smooth, rounded rocks.',
      'Chemicals in the water dissolve rough edges.',
      'Fish polish the rocks.',
      'Rocks are naturally smooth when formed.',
    ],
    correctAnswer: 'ABRASION! As rocks tumble along the river bottom, they constantly scrape against each other and the riverbed. This wears off rough edges over time, creating smooth, rounded rocks.',
  },
  {
    id: 87,
    questionText: 'What\'s the difference between erosion and deposition?',
    options: [
      'EROSION = picking up and MOVING material away | DEPOSITION = DROPPING or settling material down. They\'re opposites! One moves, one drops.',
      'They are the same process.',
      'Erosion only happens on mountains.',
      'Deposition only happens in oceans.',
    ],
    correctAnswer: 'EROSION = picking up and MOVING material away | DEPOSITION = DROPPING or settling material down. They\'re opposites! One moves, one drops.',
  },
  {
    id: 88,
    questionText: 'When does deposition occur?',
    options: [
      'When the agent of erosion loses energy and slows down or stops. Without enough energy, it can no longer carry sediment and drops it.',
      'When erosion speeds up.',
      'Only during earthquakes.',
      'Deposition happens randomly.',
    ],
    correctAnswer: 'When the agent of erosion loses energy and slows down or stops. Without enough energy, it can no longer carry sediment and drops it.',
  },
];
