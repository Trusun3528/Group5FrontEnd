import Header from "./Header";
import Footer from "./Footer";
import ClipLoader from "react-spinners/ClipLoader";

function PageContainer(props: any) {
  return (
    <>
      <Header onLogoClick={props.onLogoClick} /> 
      <div className="w-fit m-auto mt-4">
        {props.isLoading ? <ClipLoader /> : props.content}
      </div>
      <Footer />
    </>
  );
}

export default PageContainer;