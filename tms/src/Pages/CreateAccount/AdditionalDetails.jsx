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
    <div className='lg:mx-[300px] mx-10 my-20'>
      <form action="" className='flex flex-col gap-10'>
        {/* Preferred Terminal Teams */}
        <div className="flex gap-10">
          <p className='text-[18px] font-semibold'>Preferred Terminal Teams:</p>
          <select
            name="terminalTeam"
            id="terminalTeam"
            className='bg-[#F2F2F2] py-3 w-[162px] px-3 mr-8 rounded-lg shadow-lg border'
            value={terminalTeam}
            onChange={(e) => setTerminalTeam(e.target.value)}
          >
            <option value="Manifest Team">Manifest Team</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Documentation">Documentation</option>
            <option value="Billing Team">Billing Team</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        {/* Language Preference */}
        <div className="flex gap-10">
          <p className='text-[18px] font-semibold'>Language Preference:</p>
          <select
            name="languagePreference"
            id="languagePreference"
            className='bg-[#F2F2F2] py-3 w-[132px] px-3 mr-8 rounded-lg shadow-lg border'
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

        {/* Accessibility Preference */}
        <div className="flex gap-10 items-center">
          <p className='text-[18px] font-semibold'>Accessibility Preference:</p>
          <div className="flex items-center">
            {/* Font Size Dropdown */}
            <select
              name="fontSize"
              id="fontSize"
              className='bg-[#F2F2F2] py-3 w-[132px] px-3 mr-8 rounded-lg shadow-lg border'
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            {/* Font Style Dropdown */}
            <select
              name="fontStyle"
              id="fontStyle"
              className='bg-[#F2F2F2] py-3 w-[132px] px-3 mr-8 rounded-lg shadow-lg border'
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
            >
              {fontStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>

            {/* Dark/Light Mode Switch */}
            <div className="switch flex items-center gap-3">
              <span className="dark-text">Dark</span>
              <Switch
                height={20}
                onColor='black'
                checked={isDarkMode}
                onChange={(checked) => setIsDarkMode(checked)}
              />
              <span className="light-text">Light</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdditionalDetails;