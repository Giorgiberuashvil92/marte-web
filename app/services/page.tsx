import Header from "../components/Header";

export default function Services() {
  return (
    <div>
      <Header />
      <div className="flex mt-40">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Services</h1>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive range of car services including
              maintenance, emergency assistance, parts marketplace, and much
              more. We&apos;re preparing detailed information about all the
              services we offer to make your car ownership experience seamless
              and convenient.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
