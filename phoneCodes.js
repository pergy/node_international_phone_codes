const countryCodes = [
  {
    id: '+65',
    name: 'Singapore',
    code: 'SG'
  },
  {
    id: '+60',
    name: 'Malaysia',
    code: 'MY'
  },
  {
    id: '+61',
    name: 'Australia',
    code: 'AU'
  },
  {
    id: '+62',
    name: 'Indonesia',
    code: 'ID'
  },
  {
    id: '+91',
    name: 'India',
    code: 'IN'
  },
  {
    id: '+93',
    name: 'Afghanistan',
    code: 'AF'
  },
  {
    id: '+358',
    name: 'Aland Islands',
    code: 'AX'
  },
  {
    id: '+355',
    name: 'Albania',
    code: 'AL'
  },
  {
    id: '+213',
    name: 'Algeria',
    code: 'DZ'
  },
  {
    id: '+1684',
    name: 'AmericanSamoa',
    code: 'AS'
  },
  {
    id: '+376',
    name: 'Andorra',
    code: 'AD'
  },
  {
    id: '+244',
    name: 'Angola',
    code: 'AO'
  },
  {
    id: '+1264',
    name: 'Anguilla',
    code: 'AI'
  },
  {
    id: '+672',
    name: 'Antarctica',
    code: 'AQ'
  },
  {
    id: '+1268',
    name: 'Antigua and Barbuda',
    code: 'AG'
  },
  {
    id: '+54',
    name: 'Argentina',
    code: 'AR'
  },
  {
    id: '+374',
    name: 'Armenia',
    code: 'AM'
  },
  {
    id: '+297',
    name: 'Aruba',
    code: 'AW'
  },
  {
    id: '+43',
    name: 'Austria',
    code: 'AT'
  },
  {
    id: '+994',
    name: 'Azerbaijan',
    code: 'AZ'
  },
  {
    id: '+1242',
    name: 'Bahamas',
    code: 'BS'
  },
  {
    id: '+973',
    name: 'Bahrain',
    code: 'BH'
  },
  {
    id: '+880',
    name: 'Bangladesh',
    code: 'BD'
  },
  {
    id: '+1246',
    name: 'Barbados',
    code: 'BB'
  },
  {
    id: '+375',
    name: 'Belarus',
    code: 'BY'
  },
  {
    id: '+32',
    name: 'Belgium',
    code: 'BE'
  },
  {
    id: '+501',
    name: 'Belize',
    code: 'BZ'
  },
  {
    id: '+229',
    name: 'Benin',
    code: 'BJ'
  },
  {
    id: '+1441',
    name: 'Bermuda',
    code: 'BM'
  },
  {
    id: '+975',
    name: 'Bhutan',
    code: 'BT'
  },
  {
    id: '+591',
    name: 'Bolivia, Plurinational State of',
    code: 'BO'
  },
  {
    id: '+387',
    name: 'Bosnia and Herzegovina',
    code: 'BA'
  },
  {
    id: '+267',
    name: 'Botswana',
    code: 'BW'
  },
  {
    id: '+55',
    name: 'Brazil',
    code: 'BR'
  },
  {
    id: '+246',
    name: 'British Indian Ocean Territory',
    code: 'IO'
  },
  {
    id: '+673',
    name: 'Brunei Darussalam',
    code: 'BN'
  },
  {
    id: '+359',
    name: 'Bulgaria',
    code: 'BG'
  },
  {
    id: '+226',
    name: 'Burkina Faso',
    code: 'BF'
  },
  {
    id: '+257',
    name: 'Burundi',
    code: 'BI'
  },
  {
    id: '+855',
    name: 'Cambodia',
    code: 'KH'
  },
  {
    id: '+237',
    name: 'Cameroon',
    code: 'CM'
  },
  {
    id: '+1',
    name: 'Canada',
    code: 'CA'
  },
  {
    id: '+238',
    name: 'Cape Verde',
    code: 'CV'
  },
  {
    id: '+ 345',
    name: 'Cayman Islands',
    code: 'KY'
  },
  {
    id: '+236',
    name: 'Central African Republic',
    code: 'CF'
  },
  {
    id: '+235',
    name: 'Chad',
    code: 'TD'
  },
  {
    id: '+56',
    name: 'Chile',
    code: 'CL'
  },
  {
    id: '+86',
    name: 'China',
    code: 'CN'
  },
  {
    id: '+61',
    name: 'Christmas Island',
    code: 'CX'
  },
  {
    id: '+61',
    name: 'Cocos (Keeling) Islands',
    code: 'CC'
  },
  {
    id: '+57',
    name: 'Colombia',
    code: 'CO'
  },
  {
    id: '+269',
    name: 'Comoros',
    code: 'KM'
  },
  {
    id: '+242',
    name: 'Congo',
    code: 'CG'
  },
  {
    id: '+243',
    name: 'Congo, The Democratic Republic of the Congo',
    code: 'CD'
  },
  {
    id: '+682',
    name: 'Cook Islands',
    code: 'CK'
  },
  {
    id: '+506',
    name: 'Costa Rica',
    code: 'CR'
  },
  {
    id: '+225',
    name: "Cote d'Ivoire",
    code: 'CI'
  },
  {
    id: '+385',
    name: 'Croatia',
    code: 'HR'
  },
  {
    id: '+53',
    name: 'Cuba',
    code: 'CU'
  },
  {
    id: '+357',
    name: 'Cyprus',
    code: 'CY'
  },
  {
    id: '+420',
    name: 'Czech Republic',
    code: 'CZ'
  },
  {
    id: '+45',
    name: 'Denmark',
    code: 'DK'
  },
  {
    id: '+253',
    name: 'Djibouti',
    code: 'DJ'
  },
  {
    id: '+1767',
    name: 'Dominica',
    code: 'DM'
  },
  {
    id: '+1849',
    name: 'Dominican Republic',
    code: 'DO'
  },
  {
    id: '+593',
    name: 'Ecuador',
    code: 'EC'
  },
  {
    id: '+20',
    name: 'Egypt',
    code: 'EG'
  },
  {
    id: '+503',
    name: 'El Salvador',
    code: 'SV'
  },
  {
    id: '+240',
    name: 'Equatorial Guinea',
    code: 'GQ'
  },
  {
    id: '+291',
    name: 'Eritrea',
    code: 'ER'
  },
  {
    id: '+372',
    name: 'Estonia',
    code: 'EE'
  },
  {
    id: '+251',
    name: 'Ethiopia',
    code: 'ET'
  },
  {
    id: '+500',
    name: 'Falkland Islands (Malvinas)',
    code: 'FK'
  },
  {
    id: '+298',
    name: 'Faroe Islands',
    code: 'FO'
  },
  {
    id: '+679',
    name: 'Fiji',
    code: 'FJ'
  },
  {
    id: '+358',
    name: 'Finland',
    code: 'FI'
  },
  {
    id: '+33',
    name: 'France',
    code: 'FR'
  },
  {
    id: '+594',
    name: 'French Guiana',
    code: 'GF'
  },
  {
    id: '+689',
    name: 'French Polynesia',
    code: 'PF'
  },
  {
    id: '+241',
    name: 'Gabon',
    code: 'GA'
  },
  {
    id: '+220',
    name: 'Gambia',
    code: 'GM'
  },
  {
    id: '+995',
    name: 'Georgia',
    code: 'GE'
  },
  {
    id: '+49',
    name: 'Germany',
    code: 'DE'
  },
  {
    id: '+233',
    name: 'Ghana',
    code: 'GH'
  },
  {
    id: '+350',
    name: 'Gibraltar',
    code: 'GI'
  },
  {
    id: '+30',
    name: 'Greece',
    code: 'GR'
  },
  {
    id: '+299',
    name: 'Greenland',
    code: 'GL'
  },
  {
    id: '+1473',
    name: 'Grenada',
    code: 'GD'
  },
  {
    id: '+590',
    name: 'Guadeloupe',
    code: 'GP'
  },
  {
    id: '+1671',
    name: 'Guam',
    code: 'GU'
  },
  {
    id: '+502',
    name: 'Guatemala',
    code: 'GT'
  },
  {
    id: '+44',
    name: 'Guernsey',
    code: 'GG'
  },
  {
    id: '+224',
    name: 'Guinea',
    code: 'GN'
  },
  {
    id: '+245',
    name: 'Guinea-Bissau',
    code: 'GW'
  },
  {
    id: '+595',
    name: 'Guyana',
    code: 'GY'
  },
  {
    id: '+509',
    name: 'Haiti',
    code: 'HT'
  },
  {
    id: '+379',
    name: 'Holy See (Vatican City State)',
    code: 'VA'
  },
  {
    id: '+504',
    name: 'Honduras',
    code: 'HN'
  },
  {
    id: '+852',
    name: 'Hong Kong',
    code: 'HK'
  },
  {
    id: '+36',
    name: 'Hungary',
    code: 'HU'
  },
  {
    id: '+354',
    name: 'Iceland',
    code: 'IS'
  },
  {
    id: '+98',
    name: 'Iran, Islamic Republic of Persian Gulf',
    code: 'IR'
  },
  {
    id: '+964',
    name: 'Iraq',
    code: 'IQ'
  },
  {
    id: '+353',
    name: 'Ireland',
    code: 'IE'
  },
  {
    id: '+44',
    name: 'Isle of Man',
    code: 'IM'
  },
  {
    id: '+972',
    name: 'Israel',
    code: 'IL'
  },
  {
    id: '+39',
    name: 'Italy',
    code: 'IT'
  },
  {
    id: '+1876',
    name: 'Jamaica',
    code: 'JM'
  },
  {
    id: '+81',
    name: 'Japan',
    code: 'JP'
  },
  {
    id: '+44',
    name: 'Jersey',
    code: 'JE'
  },
  {
    id: '+962',
    name: 'Jordan',
    code: 'JO'
  },
  {
    id: '+77',
    name: 'Kazakhstan',
    code: 'KZ'
  },
  {
    id: '+254',
    name: 'Kenya',
    code: 'KE'
  },
  {
    id: '+686',
    name: 'Kiribati',
    code: 'KI'
  },
  {
    id: '+850',
    name: "Korea, Democratic People's Republic of Korea",
    code: 'KP'
  },
  {
    id: '+82',
    name: 'Korea, Republic of South Korea',
    code: 'KR'
  },
  {
    id: '+965',
    name: 'Kuwait',
    code: 'KW'
  },
  {
    id: '+996',
    name: 'Kyrgyzstan',
    code: 'KG'
  },
  {
    id: '+856',
    name: 'Laos',
    code: 'LA'
  },
  {
    id: '+371',
    name: 'Latvia',
    code: 'LV'
  },
  {
    id: '+961',
    name: 'Lebanon',
    code: 'LB'
  },
  {
    id: '+266',
    name: 'Lesotho',
    code: 'LS'
  },
  {
    id: '+231',
    name: 'Liberia',
    code: 'LR'
  },
  {
    id: '+218',
    name: 'Libya',
    code: 'LY'
  },
  {
    id: '+423',
    name: 'Liechtenstein',
    code: 'LI'
  },
  {
    id: '+370',
    name: 'Lithuania',
    code: 'LT'
  },
  {
    id: '+352',
    name: 'Luxembourg',
    code: 'LU'
  },
  {
    id: '+853',
    name: 'Macao',
    code: 'MO'
  },
  {
    id: '+389',
    name: 'Macedonia',
    code: 'MK'
  },
  {
    id: '+261',
    name: 'Madagascar',
    code: 'MG'
  },
  {
    id: '+265',
    name: 'Malawi',
    code: 'MW'
  },
  {
    id: '+960',
    name: 'Maldives',
    code: 'MV'
  },
  {
    id: '+223',
    name: 'Mali',
    code: 'ML'
  },
  {
    id: '+356',
    name: 'Malta',
    code: 'MT'
  },
  {
    id: '+692',
    name: 'Marshall Islands',
    code: 'MH'
  },
  {
    id: '+596',
    name: 'Martinique',
    code: 'MQ'
  },
  {
    id: '+222',
    name: 'Mauritania',
    code: 'MR'
  },
  {
    id: '+230',
    name: 'Mauritius',
    code: 'MU'
  },
  {
    id: '+262',
    name: 'Mayotte',
    code: 'YT'
  },
  {
    id: '+52',
    name: 'Mexico',
    code: 'MX'
  },
  {
    id: '+691',
    name: 'Micronesia, Federated States of Micronesia',
    code: 'FM'
  },
  {
    id: '+373',
    name: 'Moldova',
    code: 'MD'
  },
  {
    id: '+377',
    name: 'Monaco',
    code: 'MC'
  },
  {
    id: '+976',
    name: 'Mongolia',
    code: 'MN'
  },
  {
    id: '+382',
    name: 'Montenegro',
    code: 'ME'
  },
  {
    id: '+1664',
    name: 'Montserrat',
    code: 'MS'
  },
  {
    id: '+212',
    name: 'Morocco',
    code: 'MA'
  },
  {
    id: '+258',
    name: 'Mozambique',
    code: 'MZ'
  },
  {
    id: '+95',
    name: 'Myanmar',
    code: 'MM'
  },
  {
    id: '+264',
    name: 'Namibia',
    code: 'NA'
  },
  {
    id: '+674',
    name: 'Nauru',
    code: 'NR'
  },
  {
    id: '+977',
    name: 'Nepal',
    code: 'NP'
  },
  {
    id: '+31',
    name: 'Netherlands',
    code: 'NL'
  },
  {
    id: '+687',
    name: 'New Caledonia',
    code: 'NC'
  },
  {
    id: '+64',
    name: 'New Zealand',
    code: 'NZ'
  },
  {
    id: '+505',
    name: 'Nicaragua',
    code: 'NI'
  },
  {
    id: '+227',
    name: 'Niger',
    code: 'NE'
  },
  {
    id: '+234',
    name: 'Nigeria',
    code: 'NG'
  },
  {
    id: '+683',
    name: 'Niue',
    code: 'NU'
  },
  {
    id: '+672',
    name: 'Norfolk Island',
    code: 'NF'
  },
  {
    id: '+1670',
    name: 'Northern Mariana Islands',
    code: 'MP'
  },
  {
    id: '+47',
    name: 'Norway',
    code: 'NO'
  },
  {
    id: '+968',
    name: 'Oman',
    code: 'OM'
  },
  {
    id: '+92',
    name: 'Pakistan',
    code: 'PK'
  },
  {
    id: '+680',
    name: 'Palau',
    code: 'PW'
  },
  {
    id: '+970',
    name: 'Palestine, State of',
    code: 'PS'
  },
  {
    id: '+507',
    name: 'Panama',
    code: 'PA'
  },
  {
    id: '+675',
    name: 'Papua New Guinea',
    code: 'PG'
  },
  {
    id: '+595',
    name: 'Paraguay',
    code: 'PY'
  },
  {
    id: '+51',
    name: 'Peru',
    code: 'PE'
  },
  {
    id: '+63',
    name: 'Philippines',
    code: 'PH'
  },
  {
    id: '+872',
    name: 'Pitcairn',
    code: 'PN'
  },
  {
    id: '+48',
    name: 'Poland',
    code: 'PL'
  },
  {
    id: '+351',
    name: 'Portugal',
    code: 'PT'
  },
  {
    id: '+1939',
    name: 'Puerto Rico',
    code: 'PR'
  },
  {
    id: '+974',
    name: 'Qatar',
    code: 'QA'
  },
  {
    id: '+40',
    name: 'Romania',
    code: 'RO'
  },
  {
    id: '+7',
    name: 'Russia',
    code: 'RU'
  },
  {
    id: '+250',
    name: 'Rwanda',
    code: 'RW'
  },
  {
    id: '+262',
    name: 'Reunion',
    code: 'RE'
  },
  {
    id: '+590',
    name: 'Saint Barthelemy',
    code: 'BL'
  },
  {
    id: '+290',
    name: 'Saint Helena, Ascension and Tristan Da Cunha',
    code: 'SH'
  },
  {
    id: '+1869',
    name: 'Saint Kitts and Nevis',
    code: 'KN'
  },
  {
    id: '+1758',
    name: 'Saint Lucia',
    code: 'LC'
  },
  {
    id: '+590',
    name: 'Saint Martin',
    code: 'MF'
  },
  {
    id: '+508',
    name: 'Saint Pierre and Miquelon',
    code: 'PM'
  },
  {
    id: '+1784',
    name: 'Saint Vincent and the Grenadines',
    code: 'VC'
  },
  {
    id: '+685',
    name: 'Samoa',
    code: 'WS'
  },
  {
    id: '+378',
    name: 'San Marino',
    code: 'SM'
  },
  {
    id: '+239',
    name: 'Sao Tome and Principe',
    code: 'ST'
  },
  {
    id: '+966',
    name: 'Saudi Arabia',
    code: 'SA'
  },
  {
    id: '+221',
    name: 'Senegal',
    code: 'SN'
  },
  {
    id: '+381',
    name: 'Serbia',
    code: 'RS'
  },
  {
    id: '+248',
    name: 'Seychelles',
    code: 'SC'
  },
  {
    id: '+232',
    name: 'Sierra Leone',
    code: 'SL'
  },
  {
    id: '+421',
    name: 'Slovakia',
    code: 'SK'
  },
  {
    id: '+386',
    name: 'Slovenia',
    code: 'SI'
  },
  {
    id: '+677',
    name: 'Solomon Islands',
    code: 'SB'
  },
  {
    id: '+252',
    name: 'Somalia',
    code: 'SO'
  },
  {
    id: '+27',
    name: 'South Africa',
    code: 'BO'
  },
  {
    id: '+211',
    name: 'South Sudan',
    code: 'SS'
  },
  {
    id: '+500',
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS'
  },
  {
    id: '+34',
    name: 'Spain',
    code: 'ES'
  },
  {
    id: '+94',
    name: 'Sri Lanka',
    code: 'LK'
  },
  {
    id: '+249',
    name: 'Sudan',
    code: 'SD'
  },
  {
    id: '+597',
    name: 'Suriname',
    code: 'SR'
  },
  {
    id: '+47',
    name: 'Svalbard and Jan Mayen',
    code: 'SJ'
  },
  {
    id: '+46',
    name: 'Sweden',
    code: 'SE'
  },
  {
    id: '+41',
    name: 'Switzerland',
    code: 'CH'
  },
  {
    id: '+963',
    name: 'Syrian Arab Republic',
    code: 'SY'
  },
  {
    id: '+886',
    name: 'Taiwan',
    code: 'TW'
  },
  {
    id: '+992',
    name: 'Tajikistan',
    code: 'TJ'
  },
  {
    id: '+255',
    name: 'Tanzania, United Republic of Tanzania',
    code: 'TZ'
  },
  {
    id: '+66',
    name: 'Thailand',
    code: 'TH'
  },
  {
    id: '+670',
    name: 'Timor-Leste',
    code: 'TL'
  },
  {
    id: '+228',
    name: 'Togo',
    code: 'TG'
  },
  {
    id: '+690',
    name: 'Tokelau',
    code: 'TK'
  },
  {
    id: '+676',
    name: 'Tonga',
    code: 'TO'
  },
  {
    id: '+1868',
    name: 'Trinidad and Tobago',
    code: 'TT'
  },
  {
    id: '+216',
    name: 'Tunisia',
    code: 'TN'
  },
  {
    id: '+90',
    name: 'Turkey',
    code: 'TR'
  },
  {
    id: '+993',
    name: 'Turkmenistan',
    code: 'TM'
  },
  {
    id: '+1649',
    name: 'Turks and Caicos Islands',
    code: 'TC'
  },
  {
    id: '+688',
    name: 'Tuvalu',
    code: 'TV'
  },
  {
    id: '+256',
    name: 'Uganda',
    code: 'UG'
  },
  {
    id: '+380',
    name: 'Ukraine',
    code: 'UA'
  },
  {
    id: '+971',
    name: 'United Arab Emirates',
    code: 'AE'
  },
  {
    id: '+44',
    name: 'United Kingdom',
    code: 'GB'
  },
  {
    id: '+1',
    name: 'United States',
    code: 'US'
  },
  {
    id: '+598',
    name: 'Uruguay',
    code: 'UY'
  },
  {
    id: '+998',
    name: 'Uzbekistan',
    code: 'UZ'
  },
  {
    id: '+678',
    name: 'Vanuatu',
    code: 'VU'
  },
  {
    id: '+58',
    name: 'Venezuela, Bolivarian Republic of Venezuela',
    code: 'VE'
  },
  {
    id: '+84',
    name: 'Vietnam',
    code: 'VN'
  },
  {
    id: '+1284',
    name: 'Virgin Islands, British',
    code: 'VG'
  },
  {
    id: '+1340',
    name: 'Virgin Islands, U.S.',
    code: 'VI'
  },
  {
    id: '+681',
    name: 'Wallis and Futuna',
    code: 'WF'
  },
  {
    id: '+967',
    name: 'Yemen',
    code: 'YE'
  },
  {
    id: '+260',
    name: 'Zambia',
    code: 'ZM'
  },
  {
    id: '+263',
    name: 'Zimbabwe',
    code: 'ZW'
  }
];

module.exports = countryCodes;
