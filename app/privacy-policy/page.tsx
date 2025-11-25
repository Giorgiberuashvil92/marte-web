import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                Privacy Policy
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Card */}
          <div className="max-w-5xl mx-auto bg-[#F5F5F5] rounded-3xl p-12 shadow-2xl">
            <div className="space-y-10 text-[#333333]">
              
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Introduction
                </h2>
                <p className="text-lg leading-relaxed">
                  Welcome to Marte (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">
                      Personal Information
                    </h3>
                    <p className="text-lg leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you register for an account, use our services, contact us, or otherwise interact with our platform. This may include:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2 text-lg ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Vehicle information (make, model, year, license plate number)</li>
                      <li>Payment information (processed through secure third-party payment processors)</li>
                      <li>Account credentials and profile information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">
                      Automatically Collected Information
                    </h3>
                    <p className="text-lg leading-relaxed">
                      When you access or use our services, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside mt-3 space-y-2 text-lg ml-4">
                      <li>Device information (device type, operating system, unique device identifiers)</li>
                      <li>Usage data (pages visited, features used, time spent on platform)</li>
                      <li>Location data (with your permission, for location-based services)</li>
                      <li>Log information (IP address, browser type, access times)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-lg leading-relaxed mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To manage your account and provide customer support</li>
                  <li>To send you technical notices, updates, and support messages</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To monitor and analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To personalize your experience and deliver relevant content</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                </ul>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-lg leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform and providing services (e.g., payment processors, hosting providers, analytics services)</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, or legal process, or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent for specific purposes</li>
                </ul>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Data Security
                </h2>
                <p className="text-lg leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-lg leading-relaxed mb-3">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Access:</strong> You can request access to your personal information</li>
                  <li><strong>Correction:</strong> You can update or correct your personal information through your account settings</li>
                  <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to certain legal obligations</li>
                  <li><strong>Opt-out:</strong> You can opt-out of marketing communications by following the unsubscribe instructions</li>
                  <li><strong>Location Data:</strong> You can control location permissions through your device settings</li>
                  <li><strong>Cookies:</strong> You can manage cookie preferences through your browser settings</li>
                </ul>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Cookies */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-lg leading-relaxed">
                  We use cookies and similar tracking technologies to collect and store information about your preferences and activity on our platform. You can control cookies through your browser settings, though disabling cookies may limit your ability to use certain features of our services.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Children&apos;s Privacy
                </h2>
                <p className="text-lg leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-lg leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              {/* Contact Us */}
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">
                  Contact Us
                </h2>
                <p className="text-lg leading-relaxed mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-lg mt-4">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start space-x-3">
                      <span className="text-[#0066FF] font-bold">Email:</span>
                      <span>info@marte.ge</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[#0066FF] font-bold">Phone:</span>
                      <span>+995 557422634</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-[#0066FF] font-bold">Address:</span>
                      <span>Tbilisi, Georgia</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
