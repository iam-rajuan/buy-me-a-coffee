"use client"
import React, { useState } from 'react'

const Username = ({ params }) => {

  const unwrappedParams = React.use(params)
  const {username} = unwrappedParams

  const [customAmount, setCustomAmount] = useState("");

  const handleCustomAmountChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/, ""); // only numbers
    if (value === "" || parseInt(value) <= 0) {
      setCustomAmount("");
    } else {
      setCustomAmount(`$${parseInt(value, 10)}`);
    }
  };


  return (
    <>
      <div className="">
        {/* Top Section */}
        <div className="top-section relative w-full">
          {/* Banner */}
          <div className="image w-full h-48 md:h-full bg-gray-200 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/patreon_banner.gif"
              alt="Banner"
            />
          </div>

          {/* Profile */}
          <div className="absolute w-full flex justify-center bottom-0">
            <div className="relative -bottom-16">
              <img
                className="w-32 h-32 border-4 border-white rounded-full object-cover shadow-md"
                src="/cat.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Username */}
        <div className="text-center mt-20 mb-10 px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-500">
            {username}
          </h1>
          <div className="text-slate-500 space-y-1">
            <p>Creating Animated art for VTT's</p>
            <p>19,625 · members · 101 posts · $21,180/release</p>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      {/* <div className="payment w-[80%] mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="bg-slate-900 rounded-xl text-white p-8 flex-1 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Supporters</h2>
          <ul className="space-y-4">
            {[1, 2].map((i) => (
              <li key={i} className="flex gap-3 items-center">
                <img width={40} height={40} className="rounded-full" src="/avatar.gif" alt="" />
                <span>
                  Rajuan donated <span className="font-bold">$30</span> with message "
                  <span className="italic">I support you bro</span>"
                </span>
              </li>
            ))}
          </ul>
        </div>


        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl text-white p-8 flex-1 shadow-xl border border-slate-700/40 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Make a Payment</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[29, 50, 100, 200].map((amount, idx) => (
              <button
                key={idx}
                className="px-4 py-3 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-pink-400 via-rose-500 to-orange-400 hover:from-pink-500 hover:via-rose-600 hover:to-orange-500 transition-all duration-200 hover:scale-[1.03]"
              >
                Pay ${amount}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Custom Amount
            </label>
            <input
              type="number"
              placeholder="Enter custom amount"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-slate-500"
            />
          </div>

          <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:from-green-500 hover:via-emerald-600 hover:to-teal-600 hover:scale-[1.02] transition-transform duration-200 font-bold text-lg shadow-lg">
            Complete Payment
          </button>

          <p className="text-xs text-slate-500 mt-4 text-center">
            🔒 Secure payment powered by Stripe · No extra fees
          </p>
        </div>

      </div> */}

      <div className="payment w-[80%] mx-auto flex flex-col lg:flex-row gap-6 my-9">
        {/* Supporters List */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl text-white p-8 flex-1 shadow-xl border border-slate-700/40 backdrop-blur-md">
          {/* <div className="bg-slate-900 rounded-xl text-white p-8 flex-1 shadow-lg"> */}
          <h2 className="text-2xl font-bold mb-6">Supporters</h2>
          <ul className="space-y-4">
            {[1, 2].map((i) => (
              <li key={i} className="flex gap-3 items-center">
                <img width={40} height={40} className="rounded-full" src="/avatar.gif" alt="" />
                <span>
                  Rajuan donated <span className="font-bold">$30</span> with message "
                  <span className="italic">I support you bro</span>"
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Make Payment */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl text-white p-8 flex-1 shadow-xl border border-slate-700/40 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Make a Payment</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[29, 50, 100, 200].map((amount, idx) => (
              <button
                key={idx}
                className="px-4 py-3 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-pink-400 via-rose-500 to-orange-400 hover:from-pink-500 hover:via-rose-600 hover:to-orange-500 transition-all duration-200 hover:scale-[1.03]"
                onClick={() => setCustomAmount(`$${amount}`)}
              >
                Pay ${amount}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Custom Amount
            </label>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="$0"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-slate-500"
            />
          </div>

          <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:from-green-500 hover:via-emerald-600 hover:to-teal-600 hover:scale-[1.02] transition-transform duration-200 font-bold text-lg shadow-lg">
            Complete Payment
          </button>

          <p className="text-xs text-slate-500 mt-4 text-center">
            🔒 Secure payment powered by Stripe · No extra fees
          </p>
        </div>
      </div>


    </>
  )
}

export default Username
























// import React from 'react'

// const Username = ({ params }) => {
//   return (
//     <>
//       <div className="">
//         {/* Top Section with Banner and Profile Picture */}
//         <div className="top-section relative w-full">
//           {/* Banner Image - full width, fixed aspect ratio */}
//           <div className="image w-full h-48 md:h-64 bg-gray-200 overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src="/patreon_banner.gif"
//               alt="Banner"
//             />
//           </div>

//           {/* Profile Picture - centered and overlapping */}
//           <div className="profile-container absolute w-full flex justify-center bottom-0">
//             <div className="profile-picture relative -bottom-16">
//               <img
//                 className="w-32 h-32 border-4 border-white rounded-full object-cover shadow-md"
//                 src="/cat.jpg"
//                 alt="Profile"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Username Section - properly centered */}
//         <div className="text-center mt-20 mb-10 px-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-500">
//             {params.username}
//           </h1>
//           <div className='text-slate-500'>
//             <p>Creating Animated art for VTT's</p>
//             <p>19,625 . members101 . posts$21,180/release</p>
//           </div>
//         </div>
//       </div>

//       <div className='payment w-[80%] flex gap-3 mx-auto'>
//         <div className='supporters bg-slate-900 rounded-lg text-white p-10 w-1/2'>
//           <h2 className='text-2xl m-5 font-bold'>Supporters</h2>
//           <ul className='mx-5 text-lg'>
//             <li className='flex gap-3 my-4 items-center'>
//               <img width={33} src="/avatar.gif" alt="" />
//               <span>Rajuan Donated <span className='font-bold'>$30</span>with message "i support you bro"</span>
//             </li>
//             <li className='flex gap-3 my-4 items-center'>
//               <img width={33} src="/avatar.gif" alt="" />
//               <span>Rajuan Donated <span className='font-bold'>$30</span>with message "i support you bro"</span>
//             </li>
//           </ul>
//         </div>
//         <div className='makePament bg-slate-900 rounded-lg text-white p-10 w-1/2'>
//         <input type="text" />
//         <button>Pay</button>
//         <button>Pay $29</button>
//         <button>Pay $29</button>
//         <button>Pay $29</button>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Username