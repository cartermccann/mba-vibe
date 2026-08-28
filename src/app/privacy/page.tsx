import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mind Body Athletes collects, uses, and safeguards information on this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 10, 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          Mind Body Athletes™ (“we,” “our,” or “us”) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our services,
          including our workshops, coaching sessions, and educational programs.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Register for workshops or coaching sessions</li>
          <li>Contact us through our website or email</li>
          <li>Join the Baja service trip interest list or subscribe to other updates</li>
          <li>Participate in surveys or feedback forms</li>
        </ul>
        <p>
          This information may include your name, email address, phone number, and any
          other information you choose to provide.
        </p>
        <h3>Usage Information</h3>
        <p>
          We automatically collect certain information about your device and usage of
          our website, including IP address, browser type, pages visited, and time
          spent on our site.
        </p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our coaching services and workshops</li>
          <li>Communicate with you about our services and programs</li>
          <li>Send Baja service trip updates or other communications you requested</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Analyze website usage to improve user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We
          may share your information only in the following circumstances:
        </p>
        <ul>
          <li>With your explicit consent</li>
          <li>To comply with legal requirements or court orders</li>
          <li>To protect our rights, property, or safety, or that of others</li>
          <li>
            With trusted service providers who assist us in operating our website and
            conducting our business (under strict confidentiality agreements)
          </li>
        </ul>
        <p>
          Our website uses Resend to deliver inquiry confirmations, booking requests,
          and Baja interest list messages. Information submitted through those forms is
          processed by Resend for email delivery.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to
          protect your personal information against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over the
          internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and review your personal information</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
      </section>

      <section>
        <h2>Cookies and Tracking</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your
          browsing experience and analyze website traffic. You can control cookie
          settings through your browser preferences.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of
          any material changes by posting the new Privacy Policy on this page and
          updating the “Last updated” date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our privacy practices,
          please contact us at:
        </p>
      </section>
    </LegalPage>
  );
}
