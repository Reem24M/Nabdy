import React from "react";
import { Phone, MapPin, AlertTriangle, Stethoscope } from "lucide-react";

export default function Emergency() {
  // Fake doctors list (later connect to API)
  const doctors = [
    {
      id: 1,
      name: "Dr. Ahmed Mohamed",
      specialty: "Cardiologist",
      distance: "1.2 km away",
      phone: "01012345678",
    },
    {
      id: 2,
      name: "Dr. Sara Hussein",
      specialty: "General Practitioner",
      distance: "2.1 km away",
      phone: "01087654321",
    },
    {
      id: 3,
      name: "Dr. Omar Ali",
      specialty: "Emergency Medicine",
      distance: "3.5 km away",
      phone: "01122334455",
    },
  ];

  // Call ambulance
  const callEmergencyNumber = () => {
    window.location.href = "tel:123"; // Egypt ambulance number
  };

  return (
    <div className="min-h-screen bg-red-50 py-14 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg border">

        {/* Header */}
        <div className="text-center mb-10">
          <AlertTriangle className="mx-auto text-red-600" size={60} />
          <h1 className="text-4xl font-extrabold mt-4 text-gray-900">
            Emergency Assistance
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Get help fast — contact emergency services or reach the nearest doctor.
          </p>
        </div>

        {/* Emergency buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Call emergency */}
          <button
            onClick={callEmergencyNumber}
            className="bg-red-600 text-white py-5 rounded-xl text-xl font-bold hover:bg-red-700 transition shadow-md flex justify-center items-center gap-3"
          >
            <Phone className="w-7 h-7" />
            Call Emergency (123)
          </button>

          {/* Share location */}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition shadow-md flex justify-center items-center gap-3"
          >
            <MapPin className="w-7 h-7" />
            Share My Location
          </a>
        </div>

        {/* Nearest Doctors */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <Stethoscope className="text-blue-600" />
          Nearest Available Doctors
        </h2>

        <div className="space-y-4">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="p-5 border rounded-xl bg-gray-50 hover:bg-gray-100 transition shadow-sm"
            >
              <h3 className="text-xl font-bold">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialty}</p>
              <p className="text-gray-500">{doc.distance}</p>

              <a
                href={`tel:${doc.phone}`}
                className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Call Doctor
              </a>
            </div>
          ))}
        </div>

        {/* Emergency numbers */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Other Emergency Numbers</h3>
          <p className="text-gray-600">Police: <span className="font-semibold">122</span></p>
          <p className="text-gray-600">Fire Department: <span className="font-semibold">180</span></p>
        </div>

      </div>
    </div>
  );
}
