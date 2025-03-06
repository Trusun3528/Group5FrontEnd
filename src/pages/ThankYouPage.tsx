import Header from "./components/Header";
function ThankYouPage() {
    return (
        <div>
            <Header />

            <form className="flex flex-col h-screen justify-center items-center">
                <div className="flex flex-col gap-2">
                    <h1>Thank you for your purchase!<h1/>
                  </div>
                <a href="HomePage.tsx">Click to return Home</a> 
            </form>

        </div>
    )
}

//export default ThankYouPage;