import React from 'react';
import { Cloud, Mountain } from 'lucide-react';

interface ChapterSelectionProps {
  onSelectChapter: (chapter: 3 | 4) => void;
}

const ChapterSelection: React.FC<ChapterSelectionProps> = ({ onSelectChapter }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Special Message with Images */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <img src="/Ollie/Ollie.png" alt="Ollie" className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-md" />
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-bold text-purple-800">
              Ollie, Jawaan created this for you to learn your scientific facts about weather!
            </p>
          </div>
          <img src="/Ollie/Jawaan.png" alt="Jawaan" className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-md" />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
        Choose a Chapter
      </h2>
      <p className="text-slate-600 text-center">
        Select which flashcard set you'd like to study
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <button
          onClick={() => onSelectChapter(3)}
          className="group p-6 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white"
        >
          <div className="flex flex-col items-center gap-3">
            <Cloud className="w-16 h-16 group-hover:animate-bounce" />
            <h3 className="text-xl font-bold">Chapter 3</h3>
            <p className="text-sm opacity-90">Weather & Climate</p>
            <p className="text-xs opacity-75 mt-2">40 questions</p>
          </div>
        </button>

        <button
          onClick={() => onSelectChapter(4)}
          className="group p-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white"
        >
          <div className="flex flex-col items-center gap-3">
            <Mountain className="w-16 h-16 group-hover:animate-bounce" />
            <h3 className="text-xl font-bold">Chapter 4</h3>
            <p className="text-sm opacity-90">Weathering, Erosion & Deposition</p>
            <p className="text-xs opacity-75 mt-2">48 questions</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChapterSelection;
