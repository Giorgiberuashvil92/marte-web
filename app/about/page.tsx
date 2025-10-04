import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="flex mt-40">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">About Us</h1>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re working hard to bring you comprehensive information
              about our team, mission, and values. This page will be available
              soon with detailed insights into who we are and what drives us to
              simplify your car ownership experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
