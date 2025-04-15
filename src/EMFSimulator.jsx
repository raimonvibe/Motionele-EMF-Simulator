import React, { useState } from 'react';

export default function EMFSimulator() {
  const [deltaX, setDeltaX] = useState(0.5); // displacement
  const [B, setB] = useState(1); // magnetic field
  const [l, setL] = useState(1); // length
  const [dt, setDt] = useState(1); // time

  const v = deltaX / dt; // velocity
  const emf = v * B * l; // electromotive force

  return (
    <div className="w-full h-screen max-w-4xl mx-auto p-6 flex flex-col justify-center bg-gray-900 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] overflow-hidden">
      <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fuchsia-400 via-sky-400 to-teal-400 text-transparent bg-clip-text">
        Motional EMF Simulator
      </h1>

      <div className="grid grid-cols-1 gap-3 flex-grow overflow-auto">
        <div>
          <label className="block font-bold mb-1 text-lg text-white">Δx (Displacement in meters): {deltaX}</label>
          <input type="range" min="0" max="5" step="0.1" value={deltaX}
            onChange={(e) => setDeltaX(parseFloat(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100"
          />
        </div>

        <div>
          <label className="block font-bold mb-1 text-lg text-white">B (Magnetic field in Tesla): {B}</label>
          <input type="range" min="0" max="5" step="0.1" value={B}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
          />
        </div>

        <div>
          <label className="block font-bold mb-1 text-lg text-white">ℓ (Length in meters): {l}</label>
          <input type="range" min="0" max="5" step="0.1" value={l}
            onChange={(e) => setL(parseFloat(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-green-300 via-green-200 to-green-100"
          />
        </div>

        <div>
          <label className="block font-bold mb-1 text-lg text-white">Δt (Time in seconds): {dt}</label>
          <input type="range" min="0.1" max="5" step="0.1" value={dt}
            onChange={(e) => setDt(parseFloat(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100"
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-100 text-black rounded-xl shadow-inner text-center text-lg">
        <p className="font-semibold">Velocity (v): {v.toFixed(2)} m/s</p>
        <p className="font-semibold">EMF (ε): {emf.toFixed(2)} V</p>
      </div>
    </div>
  );
}