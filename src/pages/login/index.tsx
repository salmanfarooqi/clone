const Index = () => {
  return (
    <div className=" flex items-center  min-h-screen bg-[#F0F2F5]" >
      <div className=" flex justify-between  w-[73%] mx-auto ">
        <section className="w-1/2  flex flex-col py-4">
          <span className="text-[#0866FF] text-[58px] font-bold ">Facebook</span>
          <span className=" text-3xl">
            
            Facebook helps you to connect and share with the people in
            your life
          </span>
        </section>
        <section className="flex flex-col w-[40%] mx-auto ">
          <div className="flex flex-col p-4  bg-white rounded-md shadow-xl ">
            <input
              type="text"
              placeholder="email address or phone number"
              className="px-7 py-4  rounded-lg border border-[#DDDFE2] focus:outline-none focus:border-blue-500  "
            ></input>

            <input type="password"  placeholder="Enter password"
              className="px-7  py-3  rounded-lg border border-[#DDDFE2] mt-3 focus:outline-none focus:border-blue-500 "></input>
            <button className="px-7 py-3 text-xl bg-[#1877F2] rounded-lg mt-3 text-white">Login</button>
            <span className="mt-2 text-blue-600 text-sm text-center font-thin cursor-pointer    ">Forgeten password?</span>
            <div className="h-4 border-b-2 border-[#DADDE1]">
         
            </div>
            <button className="flex items-center justify-center w-[54%] mx-auto py-3 text-xl bg-[#36A420] rounded-lg  mt-4 text-white">create new account</button>
          </div>
          <div className="px-4 py-3">
          <span className="font-bold cursor-pointer">Create a Page</span> for a celebrity, brand or business.
          </div>
        </section>
      </div>
    </div>
  );
};
export default Index;
