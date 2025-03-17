import Header from "./Header";

function PageContainer(props: any) {
    return (
        <>
            <Header />
            <div className="w-fit m-auto mt-4">
                {props.isLoading ? "Loading..." : props.content}
            </div>
        </>
    )
}

export default PageContainer;