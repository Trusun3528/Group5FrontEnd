import Header from "../components/Header";
import Footer from "../components/Footer";

function TermsOfService() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6 space-y-4">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p>
          By using our website and services, you agree to the following terms. Please read them carefully.
        </p>

        <section>
          <h2 className="text-xl font-semibold">1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes. Any misuse or fraudulent activity is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Product Availability</h2>
          <p>
            We strive to ensure the availability of our products, but we do not guarantee that any product will always be in stock.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

        <p className="text-sm text-gray-500">Last updated: April 10, 2025</p>
      </main>
      <Footer />
    </>
  );
}

export default TermsOfService;