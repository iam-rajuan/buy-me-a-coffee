import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col items-center h-[44vh] justify-center gap-4">
        <div className="font-bold text-5xl flex items-center">
          Buy Me a Coffee
          <span>
            <img width={88} src="/tea.gif" alt="" />
          </span>
        </div>
        <p>
          A Crowdfunding Platform for Developers. Get Funded by your fans and
          Followers. Start Now
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>


      <div className="bg-white h-1 opacity-10"></div>
      <div className="container text-white mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-8 ">Your Fans Can buy you Coffee</h2>
        <div className="flex justify-around gap-5 ">
          <div className="item space-y-3 flex flex-col justify-center items-center ">
          <img className="bg-slate-400 rounded-full text-black p-2" width={88} src="man.gif" alt="" />
          <p className="font-bold">Your Fans Want to Help</p>
          <p className="text-center">Your Fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center ">
          <img className="bg-slate-400 rounded-full text-black p-2" width={88} src="coin.gif" alt="" />
          <p className="font-bold">Your Fans Want to Help</p>
          <p className="text-center">Your Fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center ">
          <img className="bg-slate-400 rounded-full text-black p-2" width={88} src="group.gif" alt="" />
          <p className="font-bold">Your Fans Want to Help</p>
          <p className="text-center">Your Fans are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      <div className="container text-white mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8 ">Learn More about Us</h2>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/yoCehH1lnqY?si=bmiiERA0Kwtb5q3N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>

    </>
  );
}
