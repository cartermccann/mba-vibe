import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using the Mind Body Athletes website and inquiring about programs.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 10, 2026">
      <section>
        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using the Mind Body Athletes™ website and services, you
          accept and agree to be bound by the terms and provision of this agreement. If
          you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section>
        <h2>Services Description</h2>
        <p>
          This website provides information about Mind Body Athletes™ programs,
          speaking events, and service opportunities. Submitting an inquiry or interest
          form does not create a client relationship, reserve a date, or guarantee
          availability. The scope, schedule, fees, and policies for each engagement
          will be provided separately and must be agreed to by the parties.
        </p>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>When using this website, you agree to:</p>
        <ul>
          <li>Provide accurate information when submitting a form</li>
          <li>Use the website for lawful purposes</li>
          <li>Not interfere with the website&apos;s operation or security</li>
          <li>Respect the intellectual property rights of Mind Body Athletes™</li>
        </ul>
      </section>

      <section>
        <h2>Professional Boundaries</h2>
        <p>
          Mind Body Athletes™ provides mental performance coaching and educational
          services. Our services are not intended to replace professional medical or
          psychological treatment. If you are experiencing mental health concerns, we
          encourage you to seek appropriate professional help.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content, materials, and resources provided by Mind Body Athletes™,
          including but not limited to worksheets, exercises, methodologies, and
          educational content, are protected by intellectual property rights and are
          for your personal use only.
        </p>
        <p>
          You may not reproduce, distribute, or share our proprietary materials without
          explicit written permission.
        </p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>
          Our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          explains how information submitted through this website is collected, used,
          and handled.
        </p>
      </section>

      <section>
        <h2>Modifications to Terms</h2>
        <p>
          Mind Body Athletes™ reserves the right to modify these terms at any time.
          Changes will be effective immediately upon posting on our website. Your
          continued use of our services after any changes constitutes acceptance of the
          new terms.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
      </section>
    </LegalPage>
  );
}
