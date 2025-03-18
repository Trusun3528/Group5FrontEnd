import Header from "./Header";
import ClipLoader from "react-spinners/ClipLoader";

function PageContainer(props: any) {
    return (
        <>
            <Header />
            <div className="w-fit m-auto mt-4">
                {props.isLoading ? (<ClipLoader/>) : props.content}
            </div>
        </>
    )
}

export default PageContainer;