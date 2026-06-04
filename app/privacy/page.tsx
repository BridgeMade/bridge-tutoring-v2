import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Bridge Tutoring",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-400 mb-10">
          Last updated: June 2026
        </p>

        <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              1. Who we are
            </h2>
            <p>
              Bridge Tutoring (&ldquo;Bridge&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) operates this website. We provide a
              tutor-matching service for parents and students in Pretoria and
              Johannesburg, South Africa. We are committed to protecting your
              personal information in accordance with the Protection of Personal
              Information Act 4 of 2013 (POPIA).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              2. Information we collect
            </h2>
            <p>We collect information you provide directly when you:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Submit a tutor request (name, phone, email, child details)</li>
              <li>Apply to become a tutor (name, contact details, qualifications, experience)</li>
            </ul>
            <p className="mt-2">
              We also collect standard analytics data (pages visited, device
              type, approximate location) via Google Analytics 4. This data is
              anonymised and does not personally identify you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              3. How we use your information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To match you or your child with a suitable tutor</li>
              <li>To contact you about your request or application</li>
              <li>To improve our service</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or trade your personal information to third
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              4. Who we share your information with
            </h2>
            <p>
              We may share your information with the tutor we match you with,
              solely for the purpose of facilitating the tutoring relationship.
              We use Resend (email delivery) and the Meta WhatsApp Business API
              for internal notifications. Both services process data on our
              behalf and are bound by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              5. How long we keep your data
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfil the purpose for which it was collected, or as required by
              law. If you would like your data deleted, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              6. Your rights
            </h2>
            <p>
              Under POPIA, you have the right to access, correct, or request
              deletion of your personal information. To exercise these rights,
              contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              7. Cookies
            </h2>
            <p>
              We use cookies solely for analytics purposes via Google Analytics
              4. You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              8. Contact
            </h2>
            <p>
              For any privacy-related questions or requests, please contact us
              at{" "}
              <a
                href="mailto:privacy@bridgetutoring.co.za"
                className="text-teal-600 underline"
              >
                privacy@bridgetutoring.co.za
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
