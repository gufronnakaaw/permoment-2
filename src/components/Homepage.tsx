import { useState } from 'react';
import chunks from '../utils/chunks';
import months from '../data/months';

import Card from './Card';

export default function Homepage() {
  const [data, setData] = useState<Array<string[]>>(chunks(months, 2));

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    const value = e.currentTarget.value.toLowerCase();

    setData(
      chunks(
        months.filter((element) => element.includes(value)),
        2
      )
    );
  }

  return (
    <>
      <div className="px-12 py-4">
        <input
          type="text"
          className="block w-full px-5 py-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 sm:text-md outline-none"
          placeholder="Search"
          onKeyUp={handleSearch}
        />
      </div>

      {data.map((element, index) => {
        return (
          <div className="flex px-12 py-1 justify-around" key={index}>
            {element.map((card, key) => {
              return (
                <div className="flex" key={key}>
                  <Card name={card} />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
