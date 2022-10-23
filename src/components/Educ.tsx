import Image from 'next/future/image';

type EducProps = {
  dateStr: string;
  imgSrcPath?: string;
  imgAlt?: string;
  title: string;
  place: string;
  uniName: string;
  bulletPoints?: string[] | JSX.Element[];
  tags?: string[];
  link?: string;
  flagCode?: string;
};

const Educ = ({
  dateStr,
  imgSrcPath,
  imgAlt,
  title,
  place,
  uniName,
  bulletPoints,
  tags,
  link,
  flagCode,
}: EducProps) => {
  return (
    <div>
      <div className='mt-4 text-gray-500'>{dateStr}</div>

      <div>
        <h3>{title}</h3>

        <div className='mb-2 flex items-center'>
          {imgSrcPath && imgAlt && (
            <Image src={imgSrcPath} height={32} width={32} alt={imgAlt} />
          )}

          <span className={imgSrcPath ? 'pl-2' : ''}>
            {link ? (
              <>
                <a
                  href={link}
                  className='text-primary-500 hover:underline hover:underline-offset-4'
                >
                  {uniName}
                </a>
                <span className='font-thin text-gray-400'>{`, ${place}`}</span>
              </>
            ) : (
              <>
                {uniName}
                <span className='font-thin text-gray-400'>{`, ${place}`}</span>
              </>
            )}
            {flagCode && (
              <span className='pl-2 align-middle'>
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
        </div>

        {bulletPoints && (
          <ul className='mt-3 ml-3 list-inside list-disc'>
            {bulletPoints.map((point, idx) => (
              <li key={`bulletpoint-${idx}`}>{point}</li>
            ))}
          </ul>
        )}

        {tags && (
          <p className='mt-4 break-words leading-8'>
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

export default Educ;
