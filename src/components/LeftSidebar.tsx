interface LeftSidebarprops{
    className?:string
}
const LeftSidebar = ({className}:LeftSidebarprops) => {
    const LeftSidebarArray = [
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
        <div className=" w-full  min-h-screen bg-[#F0F2F5]">
        <div className="w-[51%] mx-auto">
        <section className="">
            <div className="flex items-center justify-between">
                <p>Your Pages and profiles</p>
                <img src="/home.png" className=" w-4 h-4" />
            </div>
            <div>
                <div className="flex items-center py-2">
                    <img src="/menu.png" className="w-8 h-8 rounded-full"/>
                    <h1 className="px-2">page name</h1>
                </div>

                <div className="flex items-center py-2">
                    <img src="/menu.png" className="w-8 h-8 rounded-full"/>
                    <h1 className="px-2">switch into page</h1>
                </div>

                <div className="flex items-center py-2">
                    <img src="/menu.png" className="w-8 h-8 rounded-full"/>
                    <h1 className="px-2">create promotion</h1>
                </div>
            </div>
        </section>
        <div className="h-4  border-b-2 border-black">
            
        </div>
        <section className="py-2">
            <div>
                <div className="flex justify-between items-center py-1">
                    <h1>contacts</h1>
                    <img src="/home.png" className=" w-4 h-4" />
                    <img src="/home.png" className=" w-4 h-4" />

                </div>
                <div className="flex items-center">
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full" />
                    <h1 className="px-4">irfan</h1>
                </div>


                <div className="flex items-center py-2">
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full" />
                    <h1 className="px-4">irfan</h1>
                </div>



                <div className="flex items-center py-2">
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full" />
                    <h1 className="px-4">irfan</h1>
                </div>



                <div className="flex items-center py-2">
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full" />
                    <h1 className="px-4">irfan</h1>
                </div>



                <div className="flex items-center py-2">
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full" />
                    <h1 className="px-4">irfan</h1>
                </div>


                <div className="flex items-center py-2">
                    <img src="/profile.jpg" className="w-8 h-8 rounded-full" />
                    <h1 className="px-4">irfan</h1>
                </div>
            </div>
        </section>
        </div>
        </div>
     
    );
  }
  
  export default LeftSidebar;
  