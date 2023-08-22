import { Link } from 'react-router-dom';

type CardProps = {
  name: string;
};

export default function Card({ name }: CardProps) {
  const shouldBlack = ['march', 'april', 'may', 'august', 'september'];

  return (
    <Link to={`/month/${name}`}>
      <div className="p-2 w-32 bg-white flex items-center justify-center mx-1 rounded-md">
        <p
          className={`absolute font-bold ${
            shouldBlack.includes(name) ? 'text-black' : 'text-white'
          }`}
        >
          {name}
        </p>
        <img src={`/${name}.jpg`} alt={`${name} image`} />
      </div>
    </Link>
  );
}
