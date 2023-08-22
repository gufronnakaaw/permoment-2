import Row from './Row';

export default function Settings() {
  return (
    <div className="px-12 py-4">
      <div className="p-3">
        <p className="mb-3 text-xl font-bold">Profile</p>
        <table>
          <tbody>
            <Row label="Avatar">
              <img
                src="/avatar-4.png"
                className="w-9 h-9 rounded-full border-[3px] border-white"
              />
            </Row>
            <Row label="Name">
              <input
                type="text"
                className="block w-full px-4 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                disabled={true}
                defaultValue="John"
              />
            </Row>
            <Row label="Position">
              <input
                type="text"
                className="block w-full px-4 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                disabled={true}
                defaultValue="Programmer"
              />
            </Row>
            <Row label="Inflow">
              <input
                type="text"
                className="block w-full px-4 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                disabled={true}
                defaultValue="Rp10.000.000"
              />
            </Row>
          </tbody>
        </table>
      </div>

      <div className="bg-white mt-10 rounded-xl p-3">
        <p className="mb-3 text-xl font-bold">Update</p>
        <table>
          <tbody>
            <Row label="Avatar">
              <div className="flex justify-between">
                <img
                  src="/avatar-1.png"
                  className="w-9 h-9 rounded-full border-[3px] border-white"
                />
                <img
                  src="/avatar-2.png"
                  className="w-9 h-9 rounded-full border-[3px] border-white"
                />
                <img
                  src="/avatar-3.png"
                  className="w-9 h-9 rounded-full border-[3px] border-white"
                />
                <img
                  src="/avatar-4.png"
                  className="w-9 h-9 rounded-full border-[3px] border-white"
                />
              </div>
            </Row>
            <Row label="Name">
              <input
                type="text"
                className="block w-full px-4 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                placeholder="E.g. John"
              />
            </Row>
            <Row label="Position">
              <input
                type="text"
                className="block w-full px-4 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                placeholder="E.g. Programmer"
              />
            </Row>
            <Row label="Inflow">
              <input
                type="text"
                className="block w-full px-4 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                placeholder="E.g. 10.000.000"
              />
            </Row>
          </tbody>
        </table>
        <button className="bg-green-600 px-4 py-2 rounded-md text-white text-sm hover:bg-green-500 transition">
          Save
        </button>
      </div>
    </div>
  );
}
