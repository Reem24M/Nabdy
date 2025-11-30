import React from "react";
import { Phone, MapPin, AlertTriangle } from "lucide-react";

export default function Emergency() {
  const doctors = [
    { id: 1, name: "Dr. Ahmed", specialty: "Cardiology", phone: "01012345678" },
    { id: 2, name: "Dr. Sara", specialty: "General", phone: "01087654321" },
  ];

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-3">
      <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow-sm">

        {/* Header */}
        <div className="text-center mb-4">
          <AlertTriangle className="mx-auto text-red-600" size={32} />
          <h1 className="text-lg font-bold mt-1">Emergency Help</h1>
          <p className="text-gray-500 text-xs">Quick medical assistance</p>
        </div>

        {/* Buttons */}
        <div className="space-y-2 mb-6">
          <a
            href="tel:123"
            className="w-full flex items-center justify-center gap-1 bg-red-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
          >
            <Phone className="w-4 h-4" />
            Call (123)
          </a>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            className="w-full flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
          >
            <MapPin className="w-4 h-4" />
            Share Location
          </a>
        </div>

        {/* Doctors */}
        <h2 className="text-sm font-semibold mb-2">Nearest Doctors</h2>

        <div className="space-y-2">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="p-3 border rounded-md bg-gray-50 text-sm"
            >
              <h3 className="font-semibold text-sm">{doc.name}</h3>
              <p className="text-gray-600 text-xs">{doc.specialty}</p>

              <a
                href={`tel:${doc.phone}`}
                className="inline-block mt-2 bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700"
              >
                Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
