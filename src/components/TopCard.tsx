const TopCard = () => {
  return (
    <div className="w-full bg-white  shadow-xl rounded-2xl">
      <div className="w-[90%] mx-auto ">
        <div className=" flex    justify-center py-2">
          <img src="story1.jpg" className="w-10 h-10 rounded-full  " />
          <input
            type="text"
            placeholder="whats on your mind? salman"
            className="w-[80%]  rounded-full bg-slate-300 ml-2 p-3 "
          />
        </div>

        <div className=" w-[90%] mx-auto h-8 border-b-2"></div>
        <div className="h-1/2 flex justify-evenly py-8">
          <div className="flex justify-center ">
            <span>
              <img src="story1.jpg" className="w-4 h-4  mt-1   " />
            </span>
            <span className="px-2 text-red-300">Live video</span>
          </div>

          <div className="flex justify-between ">
            <span>
              <img src="story1.jpg" className="w-4 h-4   mt-1  " />
            </span>
            <span className="px-2 text-red-300">photo/video</span>
          </div>

          <div className="flex justify-between ">
            <span>
              <img src="story1.jpg" className="w-4 h-4 mt-1  " />
            </span>
            <span  className="px-2 text-red-300 ">feeling/activity</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopCard;
