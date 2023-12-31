import React from 'react';

import ListIcon from './../Assets/Icons/List.svg';

import { useState } from 'react';

import LikeIcon from './../Assets/Icons/Like.svg';
import LikeActiveIcon from './../Assets/Icons/LikeActive.svg';

const PlaylistLikeBar = () => {
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="flex flex-row items-center justify-between sticky top-0  bg-transparent py-2  md:pt-4">
      <div className="flex flex-row gap-6 items-center md:justify-between md:w-full">
        {/* <button
          onClick={togglePlay}
          className="bg-spGreen rounded-full p-4 md:order-2"
        >
          {isPlay ? (
            <img src={PauseIcon} className="w-5" />
          ) : (
            <img src={PlayIcon} className="w-5" />
          )}
        </button> */}
        <button onClick={toggleLike} className="md:order-1 md:ml-4">
          {isLike ? (
            <img src={LikeActiveIcon} className="w-8 md:w-6" alt="" />
          ) : (
            <img src={LikeIcon} className="w-8 md:w-6" alt="" />
          )}
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center md:hidden">
        <button className="py-2 px-4 bg-grey text-base nav-btn rounded-full flex gap-2 items-center text-white">
          <span>List</span>
          <img src={ListIcon} className="w-4" alt="" />
        </button>
      </div>
    </div>
  );
};

export default PlaylistLikeBar;
