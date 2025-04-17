import Header from "./Header";
import Footer from "./Footer";
import ClipLoader from "react-spinners/ClipLoader";

function PageContainer(props: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogoClick={props.onLogoClick} />
      
      <div className="flex-1 w-fit m-auto mt-4">
        {props.isLoading ? <ClipLoader /> : props.content}
      </div>
      <Footer />
    </div>
  );
}

export default PageContainer;