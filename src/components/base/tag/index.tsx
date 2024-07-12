interface ITagProps {
  text: string;
}

const Tag = ({ text }: ITagProps) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Tag;
