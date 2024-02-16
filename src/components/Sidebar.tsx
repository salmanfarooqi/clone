interface sidebarprops{
    className?:string
}
const Sidebar = ({className}:sidebarprops) => {
    const sidebarArray = [
      {
        title: "salman farooqi",
        path: "/profile.jpg"
      },
      {
        title: "Friends",
        path: "/friend.png"
      },
      {
        title: "Memories",
        path: "/calendar.png"
      },
      {
        title: "saved",
        path: "/home.png"
      },
      {
        title: "groups",
        path: "/groups.png"
      },
      {
        title: "About Us",
        path: "/home.png"
      },
      {
        title: "video",
        path: "/video.png"
      },
      {
        title: "marketplace",
        path: "/social.png"
      },
       {
        title: "Feeds",
        path: "/feed.png"
      },
      {
        title: "events",
        path: "/calendar.png"
      },
      {
        title: "Adds manager",
        path: "/home.png"
      },
      {
        title: "fundraises",
        path: "/home.png"
      },
      {
        title: "see more",
        path: "/home.png"
      },
    ];
    
  
    return (
      <div className={`h-full  flex-col min-h-screen py-4 ${className}`} >
        <div className=" ">
          {
            sidebarArray?.map((item, index) => (
              <div className="flex items-center px-1 py-1" key={index}>
                <img src={item?.path} className="w-8 h-8 rounded-full " alt="icon"></img>
                <span className="px-2">{item?.title}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  