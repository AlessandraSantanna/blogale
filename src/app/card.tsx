type CardProps = {
  title: string;
  description: string;
  image: string;
};


 export default function Card({ title, description, image, link }) {
  return (
    <div className="bg-pink-100 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold text-pink-800">{title}</h3>
        <p className="mt-2 text-pink-700">{description}</p>
      </div>

      {/* Botão centralizado */}
      <div className="p-4 pt-0 flex justify-center">
        <a
          href={link}
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors duration-300"
        >
          Ver
        </a>
      </div>
    </div>
  );
}