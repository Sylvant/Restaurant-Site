
export const navItems = {
  ids: ["home", "menu", "gallery", "contact"],
  EN: ["Home", "Menu", "Gallery", "Contact"],
  BG: ['Начало', 'Меню', 'Снимки', 'За контакт'],
};

export const menu = {
  salads: {
    title: { EN: "Salads", BG: "Салати" },
    items: [
      [["Домати с краве сирене", 'Tomatoes with Sirene'], "домати, маслини, сирене", 250, 3.8],
      [
        ["Овчарска салата", 'Shepherd\'s Salad'],
        "домати, краставици, лук, шунка, кашкавал, гъби, яйца, маслини, печена капия, сирене",
        400,
        6.9,
      ],
      [
        ["Шопска салата", 'Shopska Salad'],
        "домати, краставици, печена капия, лук, сирене",
        350,
        4.5,
      ],
      [['Горска салата', 'Forest Salad'], 'домати, краставици, лук, чушка, гъби, яйце, сирене', 400, 5.90],
      [["Краставици с краве сирене", 'Cucumber with Sirene'], "краставици, сирене, маслини", 250, 3.8],
      [["Салата Снежанка", 'Snezhanka'], "цедено мляко, краставица, чесън, копър", 200, 4.9],
      [
        ["Зелена салата", 'Green Salad'],
        "зелена салата, краставици, домат, маслини, яйце",
        250,
        4.20,
      ],
      [
        ["Зелена салата с риба тон", 'Green Tuna Salad'],
        "риба тон, зелена салата, домати, краставица, маслини",
        300,
        5.5,
      ],
      [
        ["Витаминозна салата", 'Vitamin Salad'],
        "зеле, моркови, маслини, зехтин",
        300,
        3.5,
      ],
      [
        ["Печени чушки със сирене", 'Roast Peppers and Sirene'],
        "печени чушки, краве сирене, чесън, копър",
        250,
        4.5,
      ],
      [["Селска салата", 'Country Salad'], "домати, печена капия, чесън, сирене", 400, 4.5],
      [
        ["Яйчена салата", 'Egg Salad'],
        "цедено мляко, чесън, майонеза, яйца, сирене",
        200,
        5.5,
      ],
    ],
  },
  dishes: {
    title: { EN: "Side Dishes", BG: "Предястия и аламинути" },
    items: [
      [["Панирани пилешки хапки с чеснов сос", 'Chicken Nuggets with Garlic Sauce'], 200, 6.5],
      [["Пилешки флейки със сусам и чеснов сос", 'Sesame Chicken Nuggets with Garlic Sauce'], 200, 6.50],
      
      [["Миш-маш", 'Mish-Mash'], 'яйца, сирене, чушка, домат',300, 4.2],
      [["Пържени тиквички с кисело мляко и чесън", 'Fried Courgette with Garlic Sauce'], 200, 4.2],
      [["Хапки с корнфлекс и чеснов сос.", 'Cornflake Chicken Nuggets and Garlic Sauce'], 300, 6.5],
      [["Панирани топени сиренца сьс сладко", 'Creamy Cheese Bites with Sweet'], 200, 4.9],
      [["Пилешки дробчета с лук", 'Chicken Liver and Onion'], 250, 5.4],
      [["Пилешки късчета", 'Chicken Chunks'], "пилешко месо, гъби, бекон, кашкавал,  домат", 400, 9.9,],
      [["Гъби в масло", 'Mushroom in Butter'], 200, 4.9],
      [["Пилешки сърца с лук", 'Chicken Hearts with Onion'], 250, 5.9],
      [["Свински език пане", 'Breaded Pork Tongue'], 150, 6.9],
      [["Пикантни картофи с чеснов сос", 'Crispy Potatoes with Garlic Sauce'], 250, 4.5],
      [["Пържени картофи(домашни)", 'Homemade French Fries'], 200, 3.2],
      [["Пържени картофи със сирене(домашни)", 'French Fries with Cheese'], 250, 3.8],
      [["Картофи асорти", 'Potatoes Assorti'], "картофи, печена капия, бекон, кашкавал, луканка, шунка", 400, 7.4,],
      [["Пълнени печурки с кашкавал", 'Stuffed Mushrooms with Cheese'], 250, 7.5],
      [["Панирани сиренца", 'Fried Sirene Chops'], 200, 4.9],
      [["Чушки бюрек", 'Burek Peppers'], '2 броя', 200, 5.5],
      [["Панирани кашкавалчета", 'Fried Cheese Sticks'], 200, 5.5],
      [["Ролца от раци пане с чеснов сос", 'Crab Rolls with Garlic Sauce'], 250, 5.5],
      [["Пилешки дробчета по селски", 'Country Chicken Liver'], "пилешки дробчета, лук, чушки, домати, магданоз", 300, 6.4,],
      [['Палачинка със зеленчуци', 'Thin Pancake with Vegetables'], 'домати, гъби, чушки, кашкавал', 300, 5.89],
      [['Палачинка с пилешко месо', 'Thin Pancake with Chicken Meat'], 'пилешко месо, кисели краставички, кашкавал', 300, 7.65],
    ],
  },

  main : {
    title: {BG:'Основни ястия', EN:'Main Courses'},
    items: [
      [["Сирене по шопски", 'Sirene by Shopski'], "сирене, домат, яйце, люта чушка, магданоз", 350, 4.9,],
      [["Кавърма по Радомирски", 'Rhodope\'s Kavarma'], "пилешко или свинско месо, лук, чушки, домат, гъби, яйце, магданоз,люто чушле", 400, 7.4,],
      [["Свинска вратна пържола с гъби и гъбен сос", 'Pork Steak in Mushroom Gravy'], 300, 9.9],
      [["Пилешка пържола бут с гъби и гъбен сос", 'Chicken Steak in Mushroom Gravy'], 300, 9.9],
      [["Пиле Аржентина", 'Argentina Chicken'], "пилешка пържола, кисели краставички, шунка, кашкавал, пържени картофи", 400, 10.9,],
      [['Пържола с комбо гарнитура', 'Combo Steak' ], 'пържола по избор, пържени картофи, чеснов сос, хлебче', 400, 10.29],
      [['Стек Антоанета', 'Steak Antoinette'], 'свинска пържола, ябълка, шунка, домат, кашкавал, пържени картофи', 400, 10.29],
      [["Огретен", 'Potatoes au Gratin'], "картофи, сирене, яйца, масло, кашкавал", 400, 5.9],
    ]
  },

  pizza: {
    title: { EN: "Pizza", BG: "Пици" },
    items: [
      [["Пица Маргарита", 'Margherita'],
        "доматен сос, кашкавал, пресни домати, маслини, босилек", 400, 6.5, 700, 7.5, 1000, 11.2,],
      [["Пица Вегетариана", 'Vegetariana'],
        "доматен сос, кашкавал, грах, чушки, гъби, пресни домати, лук, босилек", 550, 7.4, 800, 8.90, 1000, 13.9,],
      [
        ["Пица Порто фино", 'Porto Fino'],
        "доматен сос, кашкавал, риба тон, ролца от раци, лимон, чеснова паста, босилек",
        550,
        8.4,
        800,
        10.4,
        1000,
        14.9,
      ],
      [
        ["Пица Туна", 'Tuna'],
        "доматен сос, кашкавал, лук, чушки, маслини, риба тон, пресни домати, босилек",
        550,
        8.4,
        800,
        10.4,
        1000,
        14.9,
      ],

      [
        ["Пица Пармезан", 'Parmesan'],
        "доматен сос, кашкавал, сирене, пушено сирене, пармезан, босилек",
        550,
        8.4,
        800,
        10.4,
        1000,
        14.9,
      ],

      [
        ["Пица Джери", 'Jerry'],
        "сметана, пармезан, пресни домати, кашкавал, кисели краставички, босилек",
        550,
        8.4,
        800,
        10.4,
        1000,
        14.9,
      ],
      [
        ["Пица Лукчо", 'Onion'],
        "доматен сос, кашкавал, бекон, лук, запечено яйце, босилек",
        550,
        8.4,
        800,
        10.4,
        1000,
        14.9,
      ],

      [
        ["Пица Редхот", 'Redhot'],
        "доматен сос, кашкавал, пушено сирене, пилешко филе, царевица, босилек, люти чушки",
        550,
        8.40,
        800,
        10.4,
        1000,
        15.9,
      ],

      [
        ["Пица Господин Грах", 'Mr. Pea'],
        "доматен сос, кашкавал, пилешко филе, грах, кисели краставички, варено яйце, босилек",
        550,
        8.4,
        800,
        10.4,
        1000,
        15.9,
      ],
      [
        ["Пица Дон Вито", 'Don Vito'],
        "сметана, пилешко филе, бекон, топено сирене, кашкавал, маслини, босилек",
        550,
        9.4,
        800,
        11.4,
        1200,
        17.5,
      ],

      [
        ["Пица Тоскана", 'Toscana'],
        "доматен сос, кашкавал, свинско филе, кисели краставички, топено сирене, яйце, маслини, босилек",
        550,
        8.4,
        800,
        10.4,
        1200,
        17.5,
      ],
      [
        ["Пица Модена", 'Modena'],
        "доматен сос, кашкавал, свинско филе, пушено сирене, домат, варено яйце, босилек",
        550,
        8.4,
        800,
        10.4,
        1200,
        17.5,
      ],

      [
        ["Пица Тоти", 'Totti'],
        "доматен сос, кашкавал, шунка, бекон, луканка, чушки, яйце",
        550,
        10.4,
        800,
        12.7,
        1200,
        19.3,
      ],

      [
        ["Пица Куатро ди карне", 'Quattro di Carne'],
        "доматен сос, кашкавал, луканка, шунка, бекон, пилешко филе, маслини",
        550,
        10.4,
        800,
        12.7,
        1200,
        19.3,
      ],
      [
        ["Пица Ветрило", 'Pizza Fan'],
        "доматен сос, бекон, шпек салам, кисели краставички, гъби, чушки, кашкавал",
        550,
        9.4,
        800,
        11.4,
        1200,
        18.3,
      ],

      [["Детска пица", 'Pizza Kid'], "доматен сос, кашкавал, шунка, играчка", 300, 8.7],

      [
        ["Пица Хам", 'Ham'],
        "доматен сос, шунка, кашкавал",
        550,
        7.4,
        800,
        9.4,
        1200,
        13.9,
      ],
    ],
  },

  grill: {
    title: { BG: "Скара", EN: "Grill" },
    items: [
      [
        ["Свинска мешана скара", 'Grilled Pork Mix'],
        "вратна пържола, кюфте, кебапче, свинско шишче",
        450,
        13.0,
      ],
      [["Шишчета от месо", 'Meat Skewer'], '2 броя, пилешки или свински', 200, 5.6],
      [["Свинска вратна пържола", 'Pork Shoulder Steak'], 200, 7.5],
      [["Кюфтета", 'Meatballs'], '3 броя', 240, 5.1],
      [["Кебапчета", 'Kebabs'], '3 броя', 240 ,5.1],
      [["Свински ребърца на скара", 'Pork Ribs'], 400, 8.5],
      [
        ["Кюфтета на плоча", 'Meatballs on Plate'],
        "5бр. кюфтета, гарнитура задушени картофи",
        500,
        9.9,
      ],
      [["Пилешка пържола от бут или филе", 'Chicken Steak, Breasts or Fillet'], 200, 6.5],
      [["Мариновани пилешки крилца", 'Marinated Chicken Wings'], 400, 6.5],
      [["Свински дроб на скара", 'Grilled Pork Liver'], 250, 5.5],
    ],
  },

  dessert: {
    title: {BG: 'Десерти', EN: 'Desserts'},
    items: [
      [['Палачинка', 'Thin Pancake'], 'с конфитюр или шоколад', 150, 3],
      [['Гофрета', 'Gaufrette'], 'с конфитюр или шоколад', 150, 3]
    ]
  },

  other: {
    title: {BG: 'Други', EN: 'Others'},
    items: [
    [["Сач", 'Sache'], "филе(пилешко или свинско), лук, чушки, гъби, домати", 400, 11.9],
    [["Вегетариански сач", 'Sache Vegetarianne'], "домати, чушки, гъби, кашкавал, пармезан", 400, 9.5],
    [["Риба на скара", 'Grilled Fish'], ["Скумрия", 200, 7.5], ["Пъстърва", 200, 8.5]],
    [['Бургер с картофки и чеснов сос', 'Burger'], 'хлебче, пилешко месо или телешко кюфте, кашкавал, домат, зелена салата, пържени картофи, чеснов сос',  ['обикновен', 400, 6.99], ['голям', 600, 9.19]],
    [['Пърленка', 'Parlenka'], ["чеснова", 200, 2.5], ["с кашкавал", 300, 3.5], ["със сирене и кашкавал", 300, 4.2]]
  ]},

};

export const home = {
  title: [
    'Вкусна кухня на достъпни цени',
    'Exquisite cuisine on reasonable price',
  ],
  description: [
    'В Пицария BG Party ще опитате разнообразно меню от вкусни изкушения- пица, скара, сачове, рибни ястия, разядки, мезета и десерти. Приветливият персонал ще ви обслужи с усмивка, а уютната обстановка ще ви предразположи да се впуснете в неустоими кулинарни приключения. Заведението разполага със закрита част и открита прохладна градина. Организира семейни, фирмени тържества и рожденни дни.',
    'In pizza restaurant BG Party you will taste rich menu of delicious temptetions- pizza, grill, traditional Bulgarian cuisine, fish dishes, appetizers and desserts. The friendly staff will receive you with smile and the cosy environment will inspire you to dive in irresistible culinary adventures. The place offers indoor hall and refreshing outdoor garden. We host family, corporate events and birthday parties.',
  ],
};

export const contactInfo = {
  phone: {
    label: [
      'Телефон за резервации и поръчки:',
      'Call us to order or make a reservation:',
    ],
    icon: 'phone',
    data: [
      // Real phones: 0878 749 559, 064 84 64 04
      ['0123 456 789', '012 34 56 78'],
      ['0123 456 789', '012 34 56 78'],
    ],
  },
  schedule: {
    label: ['Работно време:', 'Work Schedule:'],
    icon: 'clock',
    data: ['12:00 - 22:00', '12pm - 10pm'],
  },
  holiday: {
    label: ['Почивен ден:', 'Holiday:'],
    icon: 'calendar',
    data: ['Неделя', 'Sunday'],
  },
  capacity: {
    label: ['Брой места:', 'Capacity:'],
    icon: 'chair',
    data: [['40 на закрито', '30 на открито'], ['40 indoors', '30 outdoors']],
  },
  address: {
    label: ['Адрес:', 'Address:'],
    // Real address: Панайот Волов № 2
    data:[['Плевен', 'Въведете Улица', '№ '+2], ['Pleven', 'Insert Street', '№ '+2]],
    icon: 'location',
  }
};

export const address = {
  city: ['Плевен', 'Pleven'],
  // Real address: Панайот Волов № 2
  street: ['Въведете Улица', 'Insert Street'],
  number: 2,
  title: ['Адрес', 'Address'],
  labels: [['гр.', 'ул.'], ['city:', 'street:']],
  icon: 'location'
};

export const lexicon={
  Sirene: 'Traditional Bulgarian white brine cheese, similar to feta cheese, with salt flavour, made of cattle milk, usually cow\'s',
  'Shopska Salad': 'Traditional Bulgarian salad',
  'Shepherd\'s Salad': 'Shepherd\'s, or also known as it\'s Bulgarian form "Ovcharska" salad, is commonly known salad, made of large range of products, including meat',
  Snezhanka: 'Snezhanka, or it\'s English call- Snow White Salad, is traditional Bulgarian salad, made of strained yogurt, cucumber, garlic and other ingredients of choice. It\'s sometimes described as milk salad',
  'Sirene by Shopski': 'Sirene by Shopski is another dish named after its formal creators, the Shopi, folks populating a particular aria in Bulgaria and the Balkans. Like the name suggests, it\'s key ingredient is traditional Bulgarian Cheese(Sirene)',
  'Mish-Mash': 'commonly made dish in Bulgaria, which consists of scrambled eggs, Bulgarian Sirene, peppers, tomato and other ingredients of choice',
  'Rhodope\'s Kavarma': 'Rhodope\'s Kavarma, or just Kavarma, is traditional bulgarian dish, commonly cooked in particular vessel called "Gyuvetche". Its ingredients consists of meat and vegetables. The Rhodopes are a mountain range found in Southwestern Bulgaria, where this particular type of Kavarma originates',
  'Sache': 'large ceramic plate, used to cook and serve food',
  'Meatball': 'Bulgarian meatballs, also called "kiufte" are made of spiced minced meat',
  'Kebab': 'Bulgarian kebab(kebabche) is made of spiced minced meat',
  'Burek Peppers': 'cooked peppers filled with sirene and spices',
  /*'Kabob': 'Kabobs offered in our menu represent grilled meat cubes on skewer',*/
  'Parlenka': 'Parlenka is traditional Bulgarian thin flat bread',
  'Bulgarian yogurt': 'traditional Bulgarian yogurt, commonly simply called "sour milk"'
}

export const menuDesc={
  desc: {
    BG: '* Думите означени със знак * предлагат допълнително пояснение',
    EN: '* Hover over words tagged with * sign to see their description, or scroll down for complete menu descpription'
  },
  title: {BG: 'Пояснения', EN:'Additional Info'},
  list: {BG:{
    Зехтин: 'добавка 50 гр. зехтин на цена 1 лев',
    Играчка: 'Към детското меню се предлага играчка подарък изненада',
    'Кутия за вкъщи': 'опаковачната кутия за вкъщи се заплаща на цена 50 стотинки',
    'Чеснов сос': 'Нашият чеснов сос включва кисело мляко, чеснова паста и допълнителни съставки за вкус '
  },EN: {
  'Garlic Sauce': 'Our Garlic Sauce is made of Bulgarian yogurt, garlic and other flavouring ingredients',
  'Box for home': 'price: 0.5lv.',
  'Olive Oil': 'addition 50g olive oil for 1lv.',
  'Toy': 'medium size children toy present',
  }}
}

