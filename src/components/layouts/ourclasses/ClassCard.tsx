type Props = {
  name: string;
  image: string;
  description?: string;
};

const ClassCard = ({ name, image, description }: Props) => {
  const overlayStyles = `p-5 absolute z-10 flex h-full w-112.5 flex-col item-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-95 w-112.5 snap-center">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="w-full" src={image} alt={`${image}`} />
    </li>
  );
};

export default ClassCard;
