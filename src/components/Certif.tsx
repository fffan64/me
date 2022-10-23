type CertifProps = {
  dateStr: string;
  title: string;
  link?: string;
  icon?: JSX.Element;
};

const Certif = ({ dateStr, title, link, icon }: CertifProps) => {
  return (
    <>
      <a
        className='text-base font-medium text-primary-500 hover:underline hover:underline-offset-4'
        href={link}
      >
        {icon} {title}
      </a>
      <span className='text-gray-500'> - {dateStr}</span>
    </>
  );
};

export default Certif;
