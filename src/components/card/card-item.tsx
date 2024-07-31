export interface CardItemProps {
  id: string;
  name: string;
}

export default function CardItem({ id, name }: CardItemProps) {
  return (
    <li key={id} className="w-full max-w-sm mx-auto">
      <div className="bg-transparent border-2 border-blue-500 text-gray-900 p-6 rounded-lg shadow-md">
        <p className="text-xl font-semibold truncate text-teal-500">{name}</p>
      </div>
    </li>
  );
}
