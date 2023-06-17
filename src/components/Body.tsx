import Card from './Card';
import stays from '../../stays.json';

export default function Body() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 max-md:mb-6">
        <h3 className="scroll-m-20 text-2xl font-bold font-[#333333] leading-tight max-md:text-lg">
          Stays in Finland
        </h3>
        <p className="text-sm font-medium leading-none text-[#4F4F4F]">
          12+ stays
        </p>
      </div>
      <div className=" grid grid-cols-[repeat(3,_minmax(384px,_1fr))] max-lg:grid-cols-[repeat(2,_minmax(384px,_1fr))] max-md:grid-cols-1 gap-y-8 justify-items-center gap-x-6 max-md:gap-x-0">
        {stays.map((stay) => (
          <Card
            superHost={stay.superHost}
            title={stay.title}
            rating={stay.rating}
            type={stay.type}
            beds={stay.beds}
            photo={stay.photo}
            key={stay.title}
          />
        ))}
      </div>
    </div>
  );
}
