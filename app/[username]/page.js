const page = ({ params }) => {
  return (
    <>
      <div className="relative mb-12">
        <div className="w-full bg-gray-500">
          <img src="/EC.jpg" alt="cover image" className="w-full h-full object-cover" />
        </div>
        <span className="absolute w-28 -bottom-12 left-[46%] overflow-hidden aspect-square rounded-full bg-gray-500">
          <img src="/profile.jpg" alt="cover image" className="w-full h-full object-cover object-center" />
        </span>
      </div>
      <div>
      <div className="flex flex-col gap-1 text-center py-3">
        <div className="text-3xl font-bold">{params.username}</div>
        <p className="text-md">exploring conceal topics and telling amazing stories</p>
        <div className="text-sm text-gray-300"><span>934 members </span><span>• 105 Posts</span></div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <button className="bg-[#047cfc] hover:bg-[#1e84f1] px-5 py-2 w-[15rem] rounded-xl cursor-pointer text-md">Join for free</button>
        <button className="bg-[#7377836a] hover:bg-[#858a996a] px-5 py-2 w-[15rem] rounded-xl cursor-pointer text-md">See membership options</button>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-6 w-full px-10 my-12">
        {/* Supporters Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 max-h-[450px] shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Top Supporters</h2>
          <ul className="space-y-3">
            {[
              { name: 'Shivam', amount: 100 },
              { name: 'Alice', amount: 550 },
              { name: 'Bob', amount: 200 },
              { name: 'Charlie', amount: 150 },
              { name: 'Rohan', amount: 250 },
            ].map((supporter, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <span className="text-gray-100 font-medium">{supporter.name}</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">₹{supporter.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Donation Form Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg max-h-[350px] p-6 shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Support This Creator</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Donation Amount (₹)</label>
              <input 
                type="number" 
                placeholder="Enter amount" 
                min="1"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="w-full flex justify-center items-center">
            <button 
              type="submit"
              className="w-36 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Donate Now
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page