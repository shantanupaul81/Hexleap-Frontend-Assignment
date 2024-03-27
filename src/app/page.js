import Collection from "./Component/Collection";
import TopSection from "./Component/TopSection";


const page = () => {


  return (
    <div className="dark:text-white dark:bg-black">
      {/* Top section start here: */}
      <TopSection/>
      {/* Bottom section */}
      <Collection />
    </div>
  );
};

export default page;
