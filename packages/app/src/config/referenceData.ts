// Reference data used in select options
const titles = ['Miss', 'Mr', 'Mrs', 'Ms', 'N/K', 'Other'];

const formTypes = ['l1', 'l2', 'sq'];

const gender = ['Female', 'Male'];

const countries = ['United Kingdom',
  'Other',
  'Afghanistan',
  'Aland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia And Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Channel Islands',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo, The Dem Rep Of The',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Isl & Mcdonald Isl',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle Of Man',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea (DPR)',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Terr., Occupied',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts And Nevis',
  'Saint Lucia',
  'Saint Pierre And Miquelon',
  'Samoa',
  'San Marino',
  'Sao Tome And Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St. Vincent & The Grenadines',
  'Sth Georgia & Sth Sndwch Isl',
  'Sudan',
  'Suriname',
  'Svalbard And Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad And Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks And Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United States',
  'Uruguay',
  'USA Minor Outlying Islands',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis And Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Unspec Australasian Country',
  'Unspec Caribbean Country',
  'Unspec Cent. American Cntry',
  'Unspec Cent. Asian Cntry',
  'Unspec East African Country',
  'Unspec East Europe. Country',
  'Unspec Far Eastern Country',
  'Unspec Indian Ocean Island',
  'Unspec Melanesian Country',
  'Unspec Micronesian Country',
  'Unspec Middle Eastern Cntry',
  'Unspec Near Eastern Country',
  'Unspec North African Country',
  'Unspec North American Cntry',
  'Unspec North Atlantic Island',
  'Unspec North European Cntry',
  'Unspec Polynesian Country',
  'Unspec South African Country',
  'Unspec South American Cntry',
  'Unspec South Asian Country',
  'Unspec South Atlantic Island',
  'Unspec South European Cntry',
  'Unspec Southeast Asian Cntry',
  'Unspec Southern Ocean Isl',
  'Unspec West African Country',
  'Unspec West European Cntry',
  'Unspecified'];

const nationalities = ['British',
  'Other',
  'Unknown',
  'Adeni',
  'Afghan',
  'Albanian',
  'Algerian',
  'American',
  'American Samoan',
  'Andorran',
  'Angolan',
  'Anguillan',
  'Antarctica',
  'Antiguan',
  'Argentinian',
  'Armenian',
  'Aruban',
  'Australian',
  'Austrian',
  'Azeri',
  'Bahamian',
  'Bahraini',
  'Bangladeshi',
  'Barbadian',
  'Basotho',
  'Belgian',
  'Belizean',
  'Belorussian',
  'Beninese',
  'Bermudian',
  'Bhutanese',
  'Bolivian',
  'Bosnian',
  'Botswanan',
  'Bouvet Island',
  'Brazilian',
  'British Indian Ocean Territory',
  'Bruneian',
  'Bulgarian',
  'Burknabe',
  'Burmese',
  'Burundian',
  'Cambodian',
  'Cameroonian',
  'Canadian',
  'Cape Verdean',
  'Caymanian',
  'Central African',
  'Chadian',
  'Chechen',
  'Chilean',
  'Chinese',
  'Christmas Islander',
  'Cocossian',
  'Colombian',
  'Comoran',
  'Congolese',
  'Cook Islander',
  'Costa Rican',
  'Crimean',
  'Croatian',
  'Cuban',
  'Cypriot',
  'Czech',
  'Dahomeyan (Beninese)',
  'Danish',
  'Democratic Congolese',
  'Djiboutian',
  'Dominican',
  'Dominican Republic',
  'Dutch',
  'East German',
  'East Timorese',
  'Ecuadorian',
  'Egyptian',
  'Emirati',
  'Equatoguinean',
  'Eritrean',
  'Estonian',
  'Ethiopian',
  'Falklander',
  'Faroese',
  'Fijian',
  'Filipino',
  'Finnish',
  'Formerly Russian',
  'French',
  'French Southern Territories',
  'Gabonese',
  'Gambian',
  'Georgian',
  'German',
  'Ghanaian',
  'Gibraltarian',
  'Greek',
  'Greek Cypriot',
  'Greenlander',
  'Grenadian',
  'Guadeloupian',
  'Guamanadian',
  'Guatemalan',
  'Guianese',
  'Guinean',
  'Guyanese',
  'Haitian',
  'Heard Isl & Mcdonald Isl',
  'Honduran',
  'Hong Kong Chinese',
  'Hungarian',
  'I - Kiribati',
  'Icelander',
  'Indian',
  'Indonesian',
  'Iranian',
  'Iraqi',
  'Irish',
  'Israeli',
  'Italian',
  'Ivorian',
  'Jamaican',
  'Japanese',
  'Jordanian',
  'Kampuchean (Cambodian)',
  'Kazakh',
  'Kenyan',
  'Kittitian Or Nevisian',
  'Korean',
  'Kosovan',
  'Kurd',
  'Kuwaiti',
  'Kyrgyz',
  'Laotian',
  'Latvian',
  'Lebanese',
  'Lett (Latvian)',
  'Liberian',
  'Libyan',
  'Liechtensteiner',
  'Lithuanian',
  'Luxembourger',
  'Macanian',
  'Macedonian',
  'Madagascan',
  'Mahoran',
  'Malawian',
  'Malaysian',
  'Maldivian',
  'Malian',
  'Maltese',
  'Manx',
  'Marshallese',
  'Martican',
  'Mauritanian',
  'Mauritian',
  'Mexican',
  'Micronesian',
  'Moldovian',
  'Monegasque',
  'Mongolian',
  'Montenegran',
  'Montserratian',
  'Moroccan',
  'Mozambican',
  'Namibian',
  'Nauruan',
  'Nepalese',
  'Netherlands Antilles',
  'New Caledonian',
  'New Guinea',
  'New Zealander',
  'Nicaraguan',
  'Nigerian',
  'Nigerois',
  'Niuean',
  'Ni-Vanuatu',
  'Norfolk Islander',
  'North Korean',
  'North Vietnamese',
  'North Yemeni',
  'Northern Irish',
  'Northern Mariana Islands',
  'Northern Rhodesian',
  'Norwegian',
  'Nyasalander (Malawian)',
  'Omani',
  'Pakistani',
  'Palauan',
  'Palestinian',
  'Panamanian',
  'Papua New Guinean',
  'Paraguayan',
  'Persian (Iranian)',
  'Peruvian',
  'Pitcairn Islander',
  'Polish',
  'Polynesian',
  'Portuguese',
  'Puerto Rican',
  'Qatari',
  'Reunionnaises',
  'Rhodesian',
  'Romanian',
  'Russian',
  'Russian (Formerly Soviet)',
  'Rwandan',
  'Sahrawi',
  'Saint Helenan',
  'Saint Lucian',
  'Saint Pierre And Miquelon',
  'Salvadoran',
  'Sammarinese',
  'Samoan',
  'Santomean',
  'Saudi',
  'Scottish',
  'Senegalese',
  'Serbian',
  'Seychellois',
  'Siberian',
  'Sierra Leonean',
  'Singaporean',
  'Sinhalese (Sri Lankan)',
  'Slovakian',
  'Slovenian',
  'Solomon Islander',
  'Somalian',
  'South African',
  'South Korean',
  'South Sudanese',
  'South Vietnamese',
  'South Yemeni',
  'Southern Rhodesian',
  'Soviet',
  'Spanish',
  'Sri Lankan',
  'St. Vincent & The Grenadines',
  'Stateless',
  'Sth Georgia & Sth Sndwch Isl',
  'Sudanese',
  'Surinamese',
  'Swazi',
  'Swedish',
  'Swiss',
  'Syrian',
  'Taiwanese',
  'Tajik',
  'Tanzanian',
  'Thai',
  'Tibetan',
  'Togolese',
  'Tokelauan',
  'Tongan',
  'Trinidad and Tobago',
  'Tunisian',
  'Turkish',
  'Turkish Cypriot',
  'Turkmen',
  'Turks And Caicos Islander',
  'Tuvaluan',
  'U.S.S.R',
  'Ugandan',
  'Ukrainian',
  'United Arab Republic',
  'Uruguayan',
  'Uzbek',
  'Vatican City',
  'Venezuelan',
  'Vietnamese',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis And Futuna',
  'Welsh',
  'West German',
  'Yemeni',
  'Yugoslav',
  'Zairean (Dem. Congolese)',
  'Zambian',
  'Zimbabwean'];

const counties = ['Other',
  'Aberdeenshire',
  'Abergavenny',
  'Alabama',
  'Alaska',
  'Alsace',
  'Anambra',
  'Anglesey',
  'Angus',
  'Argyll',
  'Argyllshire',
  'Arizona',
  'Arkansas',
  'Australian Capital Territory',
  'Ayrshire',
  'Baden-Wurttemberg',
  'Banffshire',
  'Bavaria',
  'Bedfordshire',
  'Berkshire',
  'Berwickshire',
  'Borno State',
  'Breconshire',
  'Buckinghamshire',
  'Bute',
  'Buteshire',
  'Caithness',
  'California',
  'Cambridgeshire',
  'Cardiganshire',
  'Carmarthenshire',
  'Ceredigion',
  'Channel Islands',
  'Cheshire',
  'Clackmannanshire',
  'Clwyd',
  'Colorado',
  'Connecticut',
  'Cornwall',
  'Coruche',
  'County Antrim',
  'County Armagh',
  'County Carlow',
  'County Cavan',
  'County Clare',
  'County Cork',
  'County Donegal',
  'County Down',
  'County Dublin',
  'County Durham',
  'County Fermanagh',
  'County Galway',
  'County Kerry',
  'County Kildare',
  'County Kilkenny',
  'County Laois',
  'County Leitrim',
  'County Limerick',
  'County Londonderry',
  'County Longford',
  'County Louth',
  'County Mayo',
  'County Meath',
  'County Monaghan',
  'County Offaly',
  'County Roscommon',
  'County Sligo',
  'County Tipperary',
  'County Tyrone',
  'County Waterford',
  'County Westmeath',
  'County Wexford',
  'County Wicklow',
  'Cumbria',
  'Delaware',
  'Denbighshire',
  'Derbyshire',
  'Devon',
  'District of Columbia',
  'Dorset',
  'Dumbartonshire',
  'Dumfriesshire',
  'Dunbartonshire',
  'Durham',
  'Dyfed',
  'East Lothian',
  'East Sussex',
  'East Yorkshire',
  'Essex',
  'Fife',
  'Flintshire',
  'Florida',
  'Gauteng',
  'Georgia',
  'Gloucestershire',
  'Grand Port',
  'Greater London',
  'Greater Manchester',
  'Guernsey',
  'Gujarat',
  'Gwent',
  'Gwynedd',
  'Hampshire',
  'Hawaii',
  'Herefordshire',
  'Hertfordshire',
  'Hessen',
  'Idaho',
  'Illinois',
  'Indiana',
  'Inverness shire',
  'Iowa',
  'Isle of Arran',
  'Isle of Lewis',
  'Isle of Man',
  'Isle of Skye',
  'Isle of Wight',
  'Jersey',
  'Kansas',
  'Kent',
  'Kentucky',
  'Kerala',
  'Kincardineshire',
  'Kinross shire',
  'Kirkcudbrightshire',
  'Kronoberg',
  'Kt Bern',
  'Lagos State',
  'Lanarkshire',
  'Lancashire',
  'Lanzarote',
  'Leicestershire',
  'Lincolnshire',
  'London',
  'Lothian',
  'Louisiana',
  'Madeira',
  'Maine',
  'Markischer Kreis',
  'Maryland',
  'Massachusetts',
  'Merseyside',
  'Michigan',
  'Mid Glamorgan',
  'Midlothian',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Monmouthshire',
  'Montana',
  'Moray',
  'Morayshire',
  'Morbihan',
  'Nairnshire',
  'Namosi',
  'Natal',
  'Nebraska',
  'Nevada',
  'New Brunswick',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New South Wales',
  'New York',
  'Norfolk',
  'North Carolina',
  'North Dakota',
  'North Lincolnshire',
  'Northeast Lincolnshire',
  'North Yorkshire',
  'Northamptonshire',
  'Northern Territory',
  'Northumberland',
  'Nottinghamshire',
  'Ohio',
  'Oklahoma',
  'Ontario',
  'Orange Free State',
  'Oregon',
  'Orkney',
  'Outer Hebrides',
  'Oxfordshire',
  'Oyo State',
  'Pangasinan',
  'Peeblesshire',
  'Pembrokeshire',
  'Pennsylvania',
  'Perth and Kinross',
  'Perthshire',
  'Plateau State',
  'Powys',
  'Punjab',
  'Queensland',
  'Renfrewshire',
  'Rhode Island',
  'Riverstate',
  'Roxburghshire',
  'Rutland',
  'Sark',
  'Saxony',
  'Selkirkshire',
  'Shetland',
  'Shropshire',
  'Somerset',
  'South Australia',
  'South Carolina',
  'South Dakota',
  'South Glamorgan',
  'South Tyneside',
  'South Wales',
  'South Yorkshire',
  'Staffordshire',
  'Stirlingshire',
  'Suffolk',
  'Surrey',
  'Sutherland',
  'Sylhet',
  'Tamil Nadu',
  'Tasmania',
  'Tennessee',
  'Texas',
  'Tibet',
  'Tyne And Wear',
  'Union Island',
  'Utah',
  'Uttar Pradesh',
  'Vermont',
  'Victoria',
  'Virginia',
  'Warwickshire',
  'Washington',
  'West Bank Demerara',
  'West Glamorgan',
  'West Lothian',
  'West Midlands',
  'West Sussex',
  'West Virginia',
  'West Yorkshire',
  'Western Australia',
  'Wigtownshire',
  'Wiltshire',
  'Wisconsin',
  'Worcestershire',
  'Wyoming',
  'Yorkshire'];

export {
  countries, nationalities, titles, counties, formTypes, gender,
};