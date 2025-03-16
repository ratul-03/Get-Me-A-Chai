import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-[44vh] text-white">
        <div className="font-bold text-5xl flex items-center">
          Buy me a Coffee{' '}
          <span>
            <img width={80} src="/tea.gif" alt="" />
          </span>
        </div>
        <p>
          Get Me a Chai is a simple app for ordering chai effortlessly, ensuring
          quick delivery and a refreshing tea experience anytime.
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
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 my-14 opacity-10"></div>
      <div className="text-white container mx-auto">
        <h2 className="font-bold text-2xl text-center my-4">
          Your Fans can buy you a chai
        </h2>
        <div className="flex justify-around gap-5">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              src="/man.gif"
              className="bg-slate-400 rounded-full p-2 text-black"
              alt=""
              width={88}
            />
            <p className="font-bold ">Fans want to help you</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              src="/coin.gif"
              className="bg-slate-400 rounded-full p-2 text-black"
              alt=""
              width={88}
            />
            <p className="font-bold ">Fans want to help you</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img
              src="/avatar.gif"
              className="bg-slate-400 rounded-full p-2 text-black"
              alt=""
              width={88}
            />
            <p className="font-bold ">Fans want to help you</p>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white my-14 h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
