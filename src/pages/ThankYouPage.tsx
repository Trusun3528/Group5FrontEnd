import Header from "./components/Header";
// Hardcoded for testing
function ThankYouPage() {
  return (
    <div>
      <Header />

      <div className="max-w-2xl mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">Purchase Summary</h1>

        <div className="border-b pb-4 mb-4">
          <p className="text-lg">Thank you for your purchase! Please pay in person at the store.</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Item: Left Handed Screwdriver</span>
            <span>$5.00</span>
          </div>

          <div className="flex justify-between">
            <span>Item: Waterproof Towel</span>
            <span>$10.00</span>
          </div>

          <div className="flex justify-between">
            <span>Item: Underwater BBQ</span>
            <span>$49.00.00</span>
          </div>

        </div>

        <div className="border-t pt-4 mt-4 text-lg font-bold">
          Total: $64.00
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;