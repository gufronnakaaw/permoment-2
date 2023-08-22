import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex justify-between px-12 py-4 items-center">
      <Link to="/" className="font-bold">
        Permoment
      </Link>
      <div className="flex flex-col items-center">
        <img
          src="/avatar-4.png"
          className="w-10 h-10 rounded-full cursor-pointer outline-none border-[3px] border-white"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`z-10 ${
            toggle ? 'absolute' : 'hidden'
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-32 mt-11`}
        >
          <div className="px-4 py-3 text-sm text-gray-700 font-bold">
            <div>Hello People</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
