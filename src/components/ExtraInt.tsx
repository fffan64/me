type ExtraIntProps = {
  tags: string[];
};

const ExtraInt = ({ tags }: ExtraIntProps) => {
  return (
    <>
      {tags.map((tag, idx) => (
        <span
          key={`extra-tag-${idx}`}
          className='m-[0.1rem] whitespace-nowrap rounded-md border px-3 py-1 text-sm text-gray-500'
        >
          {tag}
        </span>
      ))}
    </>
  );
};

export default ExtraInt;
