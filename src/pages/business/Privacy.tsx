import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6 space-y-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p>
          Your privacy is important to us. This policy explains what information we collect, how we use it, and the choices you have.
        </p>

        <section>
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>Personal information (e.g., name, email) provided during registration</li>
            <li>Purchase history and browsing behavior</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p>
            We use your data to provide and improve our services, personalize your experience, and communicate with you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p>
            You can request access to your data, ask for corrections, or request deletion of your information at any time.
          </p>
        </section>

        <p className="text-sm text-gray-500">Last updated: April 10, 2025</p>
      </main>
      <Footer />
    </>
  );
}

export default Privacy;