import StoryCard from "./StoryCard";
import TopCard from "./TopCard";

interface Homesectionprops{
    className?:string
}

const HomeCenterSection=({className}:Homesectionprops)=>{
    return(
        <div className={`   ${className}`}>
           {/* <section> story section */}
           <section className="flex w-full justify-evenly ">
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>
            <StoryCard/>

           </section>
           <section className=" w-[70%] mx-auto  ">
            <TopCard/>
           </section>

         
        </div>    )
}

export default HomeCenterSection;