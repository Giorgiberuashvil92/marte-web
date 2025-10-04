import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="flex mt-40">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">Contact</h1>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with our team! We&apos;re setting up multiple ways
              for you to reach us including contact forms, phone numbers, email
              addresses, and office locations. This page will be live soon with
              all the information you need to connect with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
