// AboutGuest.jsx
import React from "react";
import {
  UserCheck,
  Stethoscope,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Icon } from "lucide-react";
export default function AboutGuest() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071033] via-[#0A1A3A] to-[#081730] text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              khayall.ai Health
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              A secure platform that connects doctors and patients. Discover
              trusted doctors, learn about their specialties, and see how our
              tools make healthcare simpler — before you even sign up.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/signup"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#28479f] transition px-6 py-3 rounded-md font-medium"
              >
                Create Account
                <ArrowRight size={16} />
              </a>

              <a
                href="/doctors"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white transition px-6 py-3 rounded-md text-gray-100"
              >
                Browse Doctors
              </a>
            </div>
          </div>

          {/* Hero image / placeholder */}
          <div className="bg-white/5 p-6 rounded-xl shadow-lg">
            <div className="h-64 rounded-md bg-gradient-to-r from-[#102646] to-[#12325a] flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-gray-300">
                  [Illustration or screenshot placeholder]
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Example: doctor profiles · appointments · secure messages
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <p className="mt-2 text-gray-300 max-w-2xl">
            khayall.ai Health gives both patients and doctors the right tools
            to manage health information, communicate securely, and book or
            manage appointments — all in one place.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              Icon={UserCheck}
              title="Find Trusted Doctors"
              desc="Search verified profiles, view specialties, and read clinic information."
            />
            <FeatureCard
              Icon={Stethoscope}
              title="Doctor Profiles"
              desc="Detailed backgrounds, areas of expertise and patient reviews (where enabled)."
            />
            <FeatureCard
              Icon={CalendarCheck}
              title="Easy Booking"
              desc="Book appointments with a few clicks and get reminders."
            />
            <FeatureCard
              Icon={ShieldCheck}
              title="Secure & Private"
              desc="We protect patient data and only allow access following permissions."
            />
          </div>
        </section>

        {/* For Patients & For Doctors */}
        <section className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">For Patients</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>View doctor profiles and specialties</li>
              <li>Save and track your appointments</li>
              <li>Receive messages and follow-ups from your doctor</li>
              <li>Access your basic health overview (after signup)</li>
            </ul>
            <div className="mt-6">
              <a
                href="/signup"
                className="inline-block bg-[#1E3A8A] hover:bg-[#28479f] px-5 py-2 rounded-md"
              >
                Join as a Patient
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">For Doctors</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>Present your professional profile and services</li>
              <li>Manage patient lists and appointment schedules</li>
              <li>Securely communicate with patients</li>
              <li>Use simple tools to follow up and share care plans</li>
            </ul>
            <div className="mt-6">
              <a
                href="/signup?role=doctor"
                className="inline-block border border-white/20 px-5 py-2 rounded-md text-gray-100"
              >
                Join as a Doctor
              </a>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="mt-14">
          <h4 className="text-lg font-semibold">Trust & Security</h4>
          <p className="text-gray-300 mt-2 max-w-2xl">
            We are committed to protecting patient privacy. All sensitive data
            is stored securely and access is controlled. Our platform follows
            best practices for authentication and data protection.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Badge text="Secure authentication" />
            <Badge text="Encrypted messages" />
            <Badge text="Permission-based access" />
            <Badge text="GDPR & local compliance-ready" />
          </div>
        </section>

        {/* FAQ & CTA */}
        <section className="mt-14 grid gap-6 md:grid-cols-3 items-start">
          <div className="md:col-span-2 bg-white/5 p-6 rounded-lg">
            <h5 className="text-lg font-semibold">Frequently Asked Questions</h5>
            <div className="mt-4 space-y-3 text-gray-300">
              <Question title="Do I need an account to browse doctors?">
                You can view public profiles and some information without
                registering. Booking and messaging require an account.
              </Question>

              <Question title="Is my medical data private?">
                Yes — medical and private data are only accessible following
                proper authentication and permission by the patient.
              </Question>

              <Question title="Can doctors manage multiple patients?">
                Yes — doctors have tools to manage schedules, records, and
                follow-ups securely.
              </Question>
            </div>
          </div>

          <aside className="bg-white/4 p-6 rounded-lg flex flex-col items-start">
            <h6 className="text-lg font-semibold">Ready to get started?</h6>
            <p className="text-gray-300 mt-2">
              Create an account and experience how khayall.ai Health connects
              you to better care.
            </p>
            <a
              href="/signup"
              className="mt-4 w-full inline-flex justify-center items-center gap-2 bg-[#1E3A8A] px-4 py-2 rounded-md"
            >
              Create Account
              <ArrowRight size={16} />
            </a>
          </aside>
        </section>

        {/* Small footer note */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} khayall.ai Health — For patients & doctors.
        </div>
      </section>
    </main>
  );
}

/* ---------------- Subcomponents ---------------- */

function FeatureCard({  title, desc }) {
  return (
    <div className="bg-white/4 p-5 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-white/6">
          <Icon size={22} />
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-300 mt-1 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="text-sm bg-white/6 px-3 py-1 rounded-full text-gray-200">
      {text}
    </span>
  );
}

function Question({ title, children }) {
  return (
    <div>
      <h6 className="font-medium">{title}</h6>
      <p className="text-sm text-gray-300 mt-1">{children}</p>
    </div>
  );
}
