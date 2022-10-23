import Image from 'next/future/image';

type ExProProps = {
  dateStr: string;
  imgSrcPath?: string;
  imgAlt?: string;
  title: string;
  place: string;
  description: string;
  bulletPoints?: string[];
  tags?: string[];
  link?: string;
  flagCode?: string;
};

const ExpPro = ({
  dateStr,
  imgSrcPath,
  imgAlt,
  title,
  place,
  description,
  bulletPoints,
  tags,
  link,
  flagCode,
}: ExProProps) => {
  return (
    <div>
      <div className='mt-4 text-gray-500'>{dateStr}</div>
      <h3 className='mb-2 mt-2 flex items-center'>
        {imgSrcPath && imgAlt && (
          <Image src={imgSrcPath} height={32} width={32} alt={imgAlt} />
        )}

        <span className={imgSrcPath ? 'flex items-baseline pl-2' : ''}>
          {link ? (
            <>
              <a
                href={link}
                className='text-primary-500 hover:underline hover:underline-offset-4'
              >
                {title}
              </a>
              <span className='text-base font-thin text-gray-400'>{`, ${place}`}</span>
            </>
          ) : (
            <>
              {title}
              <span className='text-base font-thin text-gray-400'>{`, ${place}`}</span>
            </>
          )}
          {flagCode && (
            <span className='pl-2'>
              <Image
                src={`https://flagcdn.com/${flagCode}.svg`}
                alt={`${flagCode} flag`}
                height={15}
                width={22.5}
                className='border border-gray-500'
              />
            </span>
          )}
        </span>
      </h3>
      <div>
        <p>{description}</p>
        {bulletPoints && (
          <ul className='mt-3 ml-3 list-inside list-disc'>
            {bulletPoints.map((point, idx) => (
              <li key={`bulletpoint-${idx}`}>{point}</li>
            ))}
          </ul>
        )}

        {tags && (
          <p className='mt-4 break-words leading-8 print:hidden'>
            {tags.map((tag, idx) => (
              <span
                key={`tag-${idx}`}
                className='m-[0.1rem] whitespace-nowrap rounded-md border px-3 py-1 text-sm text-gray-500'
              >
                {tag}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpPro;
