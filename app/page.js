import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="text-white flex flex-col items-center h-[44vh] justify-center gap-4">
      <div className="font-bold text-5xl flex items-center">Buy Me a Coffee <span><img width={88} src="/tea.gif" alt="" /></span></div>
      <p>A Crowdfunding Platform for Developers. Get Funded by your fans and Followers. Start Now</p>
      <div>

      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
        Start Here
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
        Read More
      </button>
        </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
          </>
  );
}
