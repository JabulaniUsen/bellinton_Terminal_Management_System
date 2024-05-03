import React, {useState} from 'react';
import Switch from "react-switch";


const languages = [
  'Language', 
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Dutch',
  'Russian',
  'Chinese (Simplified)',
  'Chinese (Traditional)',
  'Japanese',
  'Korean',
  'Arabic',
  'Turkish',
  'Hindi',
  'Bengali',
  'Urdu',
  'Punjabi',
  'Tamil',
  'Telugu',
  'Marathi',
  'Gujarati',
  'Malayalam',
  'Kannada',
  'Odia',
  'Assamese',
  'Nepali',
  'Sinhala',
  'Thai',
  'Vietnamese',
  'Malay',
  'Indonesian',
  'Filipino',
  'Swahili',
  'Yoruba',
  'Zulu',
  'Afrikaans',
  'Dutch',
  'Finnish',
  'Swedish',
  'Norwegian',
  'Danish',
  'Icelandic',
  'Greek',
  'Hebrew',
  'Polish',
  'Czech',
  'Slovak',
  'Hungarian',
  'Romanian',
  'Bulgarian',
  'Macedonian',
  'Serbian',
  'Croatian',
  'Bosnian',
  'Slovenian',
  'Albanian',
  'Latvian',
  'Lithuanian',
  'Estonian',
  'Georgian',
  'Armenian',
  'Azerbaijani',
  'Kazakh',
  'Kyrgyz',
  'Uzbek',
  'Turkmen',
  'Mongolian',
  'Tibetan',
  'Burmese',
  'Khmer',
  'Lao',
  'Bhutanese',
  'Sinhala',
  'Dzongkha',
  'Maldivian',
  'Nauruan',
  'Tuvaluan',
  'Kiribati',
  'Marshallese',
  'Palauan',
  'Chamorro',
  'Fijian',
  'Tongan',
  'Samoan',
  'Cook Islands Maori',
  'Tahitian',
  'Hawaiian',
  'Rapa Nui',
  'Pitcairnese',
  'Yapese',
  'Nauruan',
  'Kiribati',
  'Marshallese',
  'Palauan',
  'Chamorro',
  'Fijian',
  'Tongan',
  'Samoan',
  'Cook Islands Maori',
  'Tahitian',
  'Hawaiian',
  'Rapa Nui',
  'Pitcairnese',
  'Yapese',
];
const fontSizes = [ 'Font Size', 'Small', 'Medium', 'Large'];
const fontStyles = ['Font Type', 'Arial', 'Helvetica', 'Times New Roman', 'Courier New'];


function AdditionalDetails() {
  // State for terminal team
  const [terminalTeam, setTerminalTeam] = useState('Manifest Team');

  // State for language preference
  const [languagePreference, setLanguagePreference] = useState('Language');

  // State for font size
  const [fontSize, setFontSize] = useState('Font Size');

  // State for font style
  const [fontStyle, setFontStyle] = useState('Font Type');

  // State for dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className=' my-20'>
      <form action="" className='flex flex-col gap-10'>
        {/* Preferred Terminal Teams */}
        <div className="flex gap-10 w-[600px] justify-between">
          <p className='text-[18px] font-semibold'>Location Storage:</p>
          <select
            name="terminalTeam"
            id="terminalTeam"
            className='border border-black py-3 rounded w-[232px] px-3 '
            value={terminalTeam}
            onChange={(e) => setTerminalTeam(e.target.value)}
          >
            <option value="Manifest Team">Sussex</option>
            {/* <option value="Customer Service">Customer Service</option> */}
            {/* <option value="Documentation">Documentation</option> */}
            {/* <option value="Billing Team">Billing Team</option> */}
            {/* <option value="Finance">Finance</option> */}
          </select>
        </div>

        {/* Language Preference */}
        <div className="flex gap-10 w-[600px] justify-between">
          <p className='text-[18px] font-semibold'>Language Preference:</p>
          <select
            name="languagePreference"
            id="languagePreference"
            className='border border-black py-3 rounded w-[232px] px-3 '
            value={languagePreference}
            onChange={(e) => setLanguagePreference(e.target.value)}
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-10 w-[600px] justify-between items-center">
          <p className='text-[18px] font-semibold'>Accessibility Preference:</p>
          <div className="flex items-center gap-5">
            <select
              name="fontSize"
              id="fontSize"
              className='border border-black py-3 rounded w-[232px] px-3 '
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            {/* <div className="switch flex items-center gap-3">
              <span className="dark-text">Dark</span>
              <Switch
                height={20}
                onColor='black'
                checked={isDarkMode}
                onChange={(checked) => setIsDarkMode(checked)}
              />
              <span className="light-text">Light</span>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdditionalDetails;