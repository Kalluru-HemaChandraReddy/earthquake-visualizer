import React from "react";
import { Waves, Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 shadow-2xl">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Waves className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-md">
              Earthquake Visualizer
            </h1>
            <p className="text-sm opacity-90 mt-1">
              Live Global Data · Updated every 5 minutes
            </p>
          </div>
        </div>

        {/* Nav + Dark Mode */}
        <nav className="flex items-center gap-4">
          <a className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition text-sm font-medium shadow-sm">
            About
          </a>
          <a className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition text-sm font-medium shadow-sm">
            Docs
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-3 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-shadow shadow-md"
            title="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
