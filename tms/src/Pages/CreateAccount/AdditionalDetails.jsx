import React from 'react';

const languages = [
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


function AdditionalDetails() {
  return (
    <div className='lg:mx-[320px] mx-10'>
      <form action="">
        <div className="flex gap-10">
          <p className='text-[24px] font-semibold'>Preferred Terminal Teams:</p>
          <select name="" id="" className='bg-[#F2F2F2] py-3 px-8 mr-8 rounded-lg shadow-lg border'>
            <option value="Manifest Team">Manifest Team</option>
            <option value="Manifest Team">Manifest Team</option>
            <option value="Manifest Team">Manifest Team</option>
            <option value="Manifest Team">Manifest Team</option>
            <option value="Manifest Team">Manifest Team</option>
            <option value="Manifest Team">Manifest Team</option>
          </select>
        </div>

        <div className="flex gap-10">
          <p className='text-[24px] font-semibold'>Language Preference:</p>
          <select name="" id="" className='bg-[#F2F2F2] py-3 px-8 mr-8 rounded-lg shadow-lg border'>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-10">
          <p className='text-[24px] font-semibold'>Accessibility Preference:</p>
          <div className="flex">
            <select name="" id="" className='bg-[#F2F2F2] py-3 px-8 mr-8 rounded-lg shadow-lg border'>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
            </select>
            <select name="" id="" className='bg-[#F2F2F2] py-3 px-8 mr-8 rounded-lg shadow-lg border'>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
              <option value="Manifest Team">Manifest Team</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdditionalDetails;
