import React from 'react'
import {Card,Input,Menu,Checkbox,Radio,Space, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import   '../Styles/FilterStyles.css';
const { Search } = Input;
const { SubMenu } = Menu;

//Service Provider Type
let serviceCount=0;
const serviceProviders=[{label:'Consultant',value:'Consultant'},{label:'Freelancer',value:'Freelancer'},{label:'Student',value:'Student'}]

//Hourly Rate
const hourlyRates=["₹5 And Below","₹5 - ₹10","₹10 - ₹20","₹20 - ₹30","₹30 - ₹40","₹40 - ₹50","₹50 - ₹60","₹60 - ₹70","₹70 - ₹80","₹90 - ₹100","₹100 And Above",]

//Industrial experiences
let industrialCount=0;
const industrialExperiences=[{ label: 'Aerospace/Defense', value: 'Aerospace/Defense' },{ label: 'Automotive', value: 'Automotive' },{ label: 'Banking', value: 'Banking' },
{ label: 'Biotechnology', value: 'Biotechnology' },{ label: 'Computer Hardware', value: 'Computer Hardware' },{ label: 'Computer Software & Services', value: 'Computer Software & Services' },
{ label: 'PHP Development', value: 'PHP Development' },{ label: 'Mechanical', value: 'Mechanical' },{ label: 'Medical', value: 'Medical' },{ label: 'Others', value: 'others' }]

//Skills
let skillsCount=0;
const skills=[{ label: 'Android', value: 'Android' },{ label: 'API', value: 'API' },{ label: 'c++', value: 'c++' },{ label: 'Communication', value: 'Communication' },
{ label: 'Content Writing', value: 'Content Writing' },{ label: 'CSS', value: 'CSS' },{ label: 'Facebook API', value: 'Facebook API' },{ label: 'Graphic Design', value: 'Graphic Design' },
{ label: 'HTML 5', value: 'HTML 5' },{ label: 'HTML/CSS', value: 'HTML/CSS' },{ label: 'Java', value: 'Java' },{ label: 'Jquery', value: 'Jquery' },{ label: 'Marketing', value: 'Marketing' },
{ label: 'My SQL', value: 'My SQL' },{ label: 'Photography', value: 'Photography' },{ label: 'PHP', value: 'PHP' },{ label: 'Python', value: 'Python' },{ label: 'SEO', value: 'SEO' },
{ label: 'Social Media', value: 'Social Media' },{ label: 'Solidworks', value: 'Solidworks' },{ label: 'Video Editing', value: 'Video Editing' },{ label: 'Website Design', value: 'Website Design' },
{ label: 'WordPress', value: 'WordPress' }]

//English Levels
let englishCount=0;
const englishLevels=[{label:'Basic',value:'Basic'},{label:'Conversational',value:'Conversational'},{label:'Fluent',value:'Fluent'},{label:'Native Or Bilingual',value:'Native Or Bilingual'},
{label:'Professional',value:'Professional'}]

//Languages
let languageCount=0;
const languages=[{label:'Abkhazian',value:'Abkhazian'},{label:'Afar',value:'Afar'},{label:'Afrikaans',value:'Afrikaans'},{label:'Akan',value:'Akan'},{label:'Albanian',value:'Albanina'},{label:'Amharic',value:'Amharic'},
{label:'Arabic',value:'Arabic'},{label:'Aragonese',value:'Aragonese'},{label:'Armenian',value:'Armenian'},{label:'Assamese',value:'Assamese'},{label:'Avaric',value:'Avaric'},{label:'Avestan',value:'Avestan'},
{label:'Aymara',value:'Aymara'},{label:'Azerbaijani',value:'Azerbaijani'},{label:'Bambara',value:'Bambara'},{label:'Bashkir',value:'Bashkir'},{label:'Basque',value:'Basque'},{label:'Belarusian',value:'Belarusian'},
{label:'Bengali',value:'Bengali'},{label:'Bihari languages',value:'Bihari languages'},{label:'Bislama',value:'Bislama'},{label:'Bosnian',value:'Bosnian'},{label:'Breton',value:'Breton'},{label:'Bulgarian',value:'Bulgarian'},
{label:'Burmese',value:'Burmese'},{label:'Catalan, Catalunya',value:'Catalan, Catalunya'},{label:'Catalan, Valencian',value:'Catalan, Valencian'},{label:'Central Khmer',value:'Central Khmer'},{label:'Chamorro',value:'Chamorro'},
{label:'Chechen',value:'Chechen'},{label:'Chichewa, Chewa, Nyanja',value:'Chichewa, Chewa, Nyanja'},{label:'Chinese',value:'Chinese'},{label:' Church Slavonic, Old Bulgarian, Old Church Slavonic',value:' Church Slavonic, Old Bulgarian, Old Church Slavonic'},
{label:'Chuvash',value:'Chuvash'},{label:'Cornish',value:'Cornish'},{label:'Corsican',value:'Corsican'},{label:'Cree',value:'Cree'},{label:'Croatian',value:'Croatian'},{label:'Czech',value:'Czech'},{label:'Danish',value:'Danish'},
{label:'Divehi, Dhivehi, Maldivian',value:'Divehi, Dhivehi, Maldivian'},{label:'Dutch, Flemish',value:'Dutch, Flemish'},{label:'Dzongkha',value:'Dzongkha'},{label:'English',value:'English'},{label:'Esperanto',value:'Esperanto'},
{label:'Estonian',value:'Estonian'},{label:'Ewe',value:'Ewe'},{label:'Faroese',value:'Faroese'},{label:'Fijian',value:'Fijian'},{label:'Finnish',value:'Finnish'},{label:'French',value:'French'},{label:'Fulah',value:'Fulah'},
{label:'Gaelic, Scottish Gaelic',value:'Gaelic, Scottish Gaelic'},{label:'Galician',value:'Galician'},{label:'Ganda',value:'Ganda'},{label:'Georgian',value:'Georgian'},{label:'German',value:'German'},{label:'Gikuyu, Kikuyu',value:'Gikuyu, Kikuyu'},
{label:'Greek (Modern)',value:'Greek (Modern)'},{label:'Greenlandic, Kalaallisut',value:'Greenlandic, Kalaallisut'},{label:'Guarani',value:'Guarani'},{label:'Gujarati',value:'Gujarati'},{label:'Haitian, Haitian Creole',value:'Haitian, Haitian Creole'},
{label:'Hausa',value:'Hausa'},{label:'Hebrew',value:'Hebrew'},{label:'Herero',value:'Herero'},{label:'Hindi',value:'Hindi'},{label:'Hiri Motu',value:'Hiri Motu'},{label:'Hungarian',value:'Hungarian'},{label:'Icelandic',value:'Icelandic'},{label:'Ido',value:'Ido'},
{label:'Igbo',value:'Igbo'},{label:'Indonesian',value:'Indonesian'},{label:'Interlingua',value:'Interlingua'},{label:'Interlingue',value:'Interlingue'},{label:'Inuktitut',value:'Inuktitut'},{label:'Inupiaq',value:'Inupiaq'},{label:'Irish',value:'Irish'},
{label:'Italian',value:'Italian'},{label:'Japanese',value:'Japanese'},{label:'Javanese',value:'Javanese'},{label:'Kannada',value:'Kannada'},{label:'Kanuri',value:'Kanuri'},{label:'Kashmiri',value:'Kashmiri'},{label:'Kazakh',value:'Kazakh'},
{label:'Kinyarwanda',value:'Kinyarwanda'},{label:'Komi',value:'Komi'},{label:'Kongo',value:'Kongo'},{label:'Kurdish',value:'Kurdish'},{label:'Kwanyama, Kuanyama',value:'Kwanyama, Kuanyama'},{label:'Kyrgyz',value:'Kyrgyz'},{label:'Lao',value:'Lao'},
{label:'Latin',value:'Latin'},{label:'Latvian',value:'Latvian'},{label:'Letzeburgesch, Luxembourgish',value:'Letzeburgesch, Luxembourgish'},{label:'Limburgish, Limburgan, Limburger',value:'Limburgish, Limburgan, Limburger'},{label:'Lingala',value:'Lingala'},
{label:'Lithuanian',value:'Lithuanian'},{label:'Luba-Katanga',value:'Luba-Katanga'},{label:'Macedonian',value:'Macedonian'},{label:'Malagasy',value:'Malagasy'},{label:'Malay',value:'Malay'},{label:'Malayalam',value:'Malayalam'},{label:'Maltese',value:'Maltese'},
{label:'Manx',value:'Manx'},{label:'Maori',value:'Maori'},{label:'Marathi',value:'Marathi'},{label:'Marshallese',value:'Marshallese'},{label:'Moldovan, Moldavian, Romanian',value:'Moldovan, Moldavian, Romanian'},{label:'Mongolian',value:'Mongolian'},
{label:'Nauru',value:'Nauru'},{label:'Navajo, Navaho',value:'Navajo, Navaho'},{label:'Ndonga',value:'Ndonga'},{label:'Nepali',value:'Nepali'},{label:'Northern Ndebele',value:'Northern Ndebele'},{label:'Northern Sami',value:'Northern Sami'},
{label:'Norwegian',value:'Norwegian'},{label:'Norwegian Nynorsk',value:'Norwegian Nynorsk'},{label:'Nuosu, Sichuan Yi',value:'Nuosu, Sichuan Yi'},{label:'Occitan (post 1500)',value:'Occitan (post 1500)'},{label:'Ojibwa',value:'Ojibwa'},{label:'Oriya',value:'Oriya'},
{label:'Oromo',value:'Oromo'},{label:'Ossetian, Ossetic',value:'Ossetian, Ossetic'},{label:'Pali',value:'Pali'},{label:'Panjabi, Punjabi',value:'Panjabi, Punjabi'},{label:'Pashto, Pushto',value:'Pashto, Pushto'},{label:'Persian',value:'Persian'},
{label:'Polish',value:'Polish'},{label:'Portuguese',value:'Portuguese'},{label:'Quechua',value:'Quechua'},{label:'Romansh',value:'Romansh'},{label:'Rundi',value:'Rundi'},{label:'Russian',value:'Russian'},{label:'Sakhyaa',value:'Sakhyaa'},
{label:'Samoan',value:'Samoan'},{label:'Sango',value:'Sango'},{label:'Sanskrit',value:'Sanskrit'},{label:'Sardinian',value:'Sardinian'},{label:'Serbian',value:'Serbian'},{label:'Shona',value:'Shona'},{label:'Sindhi',value:'Sindhi'},
{label:'Sinhala, Sinhalese',value:'Sinhala, Sinhalese'},{label:'Slovak',value:'Slovak'},{label:'Slovenian',value:'Slovenian'},{label:'Somali',value:'Somali'},{label:'Sotho, Southern',value:'Sotho, Southern'},{label:'South Ndebele',value:'South Ndebele'},
{label:'Spanish, Castilian',value:'Spanish, Castilian'},{label:'Sundanese',value:'Sundanese'},{label:'Swahili',value:'Swahili'},{label:'Swati',value:'Swati'},{label:'Swedish',value:'Swedish'},{label:'Tagalog',value:'Tagalog'},{label:'Tahitian',value:'Tahitian'},
{label:'Tajik',value:'Tajik'},{label:'Tamil',value:'Tamil'},{label:'Tatar',value:'Tatar'},{label:'Telugu',value:'Telugu'},{label:'Thai',value:'Thai'},{label:'Tibetan',value:'Tibetan'},{label:'Tigrinya',value:'Tigrinya'},{label:'Tonga',value:'Tonga'},
{label:'Tsonga',value:'Tsonga'},{label:'Tswana',value:'Tswana'},{label:'Turkish',value:'Turkish'},{label:'Turkmen',value:'Turkmen'},{label:'Twi',value:'Twi'},{label:'Uighur, Uyghur',value:'Uighur, Uyghur'},{label:'Ukrainian',value:'Ukrainian'},
{label:'Urdu',value:'Urdu'},{label:'Uzbek',value:'Uzbek'},{label:'Venda',value:'Venda'},{label:'Vietnamese',value:'Vietnamese'},{label:'Volap_k',value:'Volap_k'},{label:'Walloon',value:'Walloon'},{label:'Welsh',value:'Welsh'},
{label:'Western Frisian',value:'Western Frisian'},{label:'Wolof',value:'Wolof'},{label:'Xhosa',value:'Xhosa'},{label:'Yiddish',value:'Yiddish'},{label:'Yoruba',value:'Yoruba'},{label:'Zhuang, Chuang',value:'Zhuang, Chuang'},{label:'Zulu',value:'Zulu'}
]

function FilterBox() {
    return (
        <div>
            <Card type="inner" className="filterCard"  title="  Filter Service Providers by" >
                <div className="cardContent">
                    <div>
                        <span>Start Your Search</span>
                        <span><UnorderedListOutlined className="toggleIcon" /></span>
                    </div>
                    <div>
                         <Search placeholder="Type Keyword"  />
                    </div>
                    <Menu mode="inline" inlineIndent={0} style={{ height: '100%' }}>
                        <SubMenu className="subMenu"   key="sub1"  title={`Service Provider Type: ( ${serviceCount} selected)`}>
                            {
                                serviceProviders.map(obj=>{
                                    return (
                                        <Menu.Item  key={obj.value}><Checkbox className="checkBox">{obj.label}</Checkbox></Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <SubMenu className="subMenu" key="sub2" title="Hourly Rate">
                            <Radio.Group  >
                                <Space  direction="vertical" >
                                    {
                                        hourlyRates.map((hourlyRate,index)=><Radio key={index} value={index}>{hourlyRate}</Radio>)
                                    }
                                </Space>
                            </Radio.Group>
                        </SubMenu>
                        <SubMenu key="sub3" className="subMenu" title={`Industrial experiences: (${industrialCount}selected)`}>
                            <Search placeholder="Industrial Experiences"  />
                            {
                                industrialExperiences.map(obj=>{
                                    return (
                                        <Menu.Item  key={obj.value}><Checkbox className="checkBox">{obj.label}</Checkbox></Menu.Item>
                                        )
                                    })
                            }
                        </SubMenu>
                        <SubMenu key="sub4" className="subMenu" title={`Skills: (${skillsCount}selected)`}>
                            <Search placeholder="Skills"  />
                            {
                                skills.map(obj=>{
                                    return (
                                        <Menu.Item  key={obj.value}><Checkbox >{obj.label}</Checkbox></Menu.Item>
                                        )
                                    })
                            }
                        </SubMenu>
                        <SubMenu key="sub5" className="subMenu" title={`English Level: (${englishCount}selected)`}>
                            {
                                englishLevels.map(obj=>{
                                    return (
                                        <Menu.Item  key={obj.value}><Checkbox >{obj.label}</Checkbox></Menu.Item>
                                        )
                                    })
                            }
                        </SubMenu>
                        <SubMenu key="sub6" className="subMenu" title={`Languages: (${languageCount}selected)`}>
                            <Search placeholder="Search Language"  />
                            {
                                languages.map(obj=>{
                                    return (
                                        <Menu.Item  key={obj.value}><Checkbox className="checkBox">{obj.label}</Checkbox></Menu.Item>
                                        )
                                    })
                            }
                        </SubMenu>
                    </Menu>
                </div>
            </Card>
            <div className='filterText'>
                Click “Apply Filter” to apply <br/> latest changes made by you.
            </div>
            <div  className="filterBtnDiv" >
                <Button className="filterBtn">Apply Filters</Button>
            </div>
        </div>
    )
}

export default FilterBox
