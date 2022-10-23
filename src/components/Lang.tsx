import Image from 'next/future/image';

type LangProps = {
  lang: string;
  flagCode: string;
  skill: string;
};

const Lang = ({ lang, flagCode, skill }: LangProps) => {
  return (
    <div className='flex items-center space-x-2 px-1'>
      <Image
        src={`https://flagcdn.com/${flagCode}.svg`}
        alt={`${lang} flag`}
        height={15}
        width={22.5}
        className='border border-gray-500'
      />
      <span>{lang}</span>
      <div className='relative inline-block text-xl after:text-gray-300 after:content-["••••"]'>
        <div
          className={`absolute left-0 top-0 overflow-hidden after:text-primary-400 after:content-["••••"]`}
          style={{ width: `${skill}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Lang;
