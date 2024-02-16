const Header = () => {
  const middlesectiondata = [
    { image: "/home.png" },
    { image: "/video.png" },
    { image: "/media.png" },
    { image: "/groups.png" },
    { image: "/game-controller.png" }
  ];
  const lastsectiondata = [
    { image: "/menu.png" },
    { image: "/messenger.png" },
    { image: "/media.png" },
    { image: "/bell.png" },
    { image: "/profile.jpg" }
  ];
  
  return (
    <div>
      <nav className="w-full flex justify-between  bg-#FFFFFF  shadow-lg ">
        <section className="w-[20%] flex justify-evenly py-2 ">
          <span className="w-10 h-10 rounded-2xl">
            <img src="/facebook.png"></img>
          </span>
          <span>
          <input  type="text" placeholder="Search Facebook" className="w-[200px] p-2 h-10 bg-#F0F2F5 border rounded-2xl"/>
          </span>
        </section>
        <section className="w-[50%] flex justify-evenly py-2">
 
    {middlesectiondata?.map((image, index) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img key={index} src={image?.image} alt={`Image ${index + 1}`} className="w-10 h-10 " />
    ))}
 
</section>

        <section className="w-[20%] flex justify-end justify-between py-1">
        {lastsectiondata?.map((image, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-10 h-10 bg-[#D8DADF] rounded-full flex justify-center items-center">
      <img key={index} src={image?.image} alt={`Image ${index + 1}`} className="w-8 h-8 rounded-full " />
      </div>
    ))}
         
        </section>
      </nav>
    </div>
  );
};

export default Header;
