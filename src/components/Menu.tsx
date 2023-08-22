import { FiHome, FiMonitor, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <div className="bg-white w-full h-16 fixed inset-x-0 max-w-[480px] z-40 flex px-12 pb-3 items-center justify-between bottom-0 mx-auto">
      <Link
        to="/"
        className={`flex flex-col items-center ${
          pathname == '/' ? 'text-gray-400' : null
        }`}
      >
        <FiHome size={24} />
        <p className="text-xs absolute mt-6">Home</p>
      </Link>
      <Link
        to="/settings"
        className={`flex flex-col items-center ${
          pathname == '/settings' ? 'text-gray-400' : null
        }`}
      >
        <FiSettings size={24} />
        <p className="text-xs absolute mt-6">Settings</p>
      </Link>
      <Link
        to="/dashboard"
        className={`flex flex-col items-center ${
          pathname == '/dashboard' ? 'text-gray-400' : null
        }`}
      >
        <FiMonitor size={24} />
        <p className="text-xs absolute mt-6">Dashboard</p>
      </Link>
    </div>
  );
}
