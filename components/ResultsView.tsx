
import React from 'react';
import { Award, RotateCw } from 'lucide-react';

interface ResultsViewProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedback = () => {
    if (percentage === 100) {
      return {
        title: "Perfect Score!",
        message: "You're a true weather and climate expert!",
        color: "text-amber-500",
        image: "/Ollie.png",
        bgColor: "bg-green-50"
      };
    }
    if (percentage >= 80) {
        return {
          title: "Excellent Job!",
          message: "You have a strong understanding of these concepts.",
          color: "text-green-500",
          image: "/Ollie.png",
          bgColor: "bg-green-50"
      };
    }
    if (percentage >= 50) {
      return {
        title: "Good Effort!",
        message: "You're on your way to mastering this topic.",
        color: "text-sky-500",
        image: "/Ollie.png",
        bgColor: "bg-sky-50"
      };
    }
    return {
      title: "Keep Studying!",
      message: "Review the flashcards and try again to improve your score.",
      color: "text-slate-500",
      image: "/Jawaan.png",
      bgColor: "bg-red-50"
    };
  };

  const feedback = getFeedback();

  return (
    <div className="text-center flex flex-col items-center gap-6 py-8">
      {/* Character Image */}
      <div className={`${feedback.bgColor} rounded-full p-4`}>
        <img
          src={feedback.image}
          alt="Result"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Score Display */}
      <div className="flex flex-col items-center gap-2">
        <Award className={`w-16 h-16 ${feedback.color}`} />
        <h2 className="text-3xl font-bold text-slate-800">{feedback.title}</h2>
        <p className="text-slate-600 text-lg max-w-md">{feedback.message}</p>
      </div>

      {/* Score Numbers */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200 shadow-lg">
        <p className="text-sm text-slate-600 mb-2">Your Score</p>
        <div className="text-5xl font-bold text-indigo-600">
          {score} / {totalQuestions}
        </div>
        <div className="text-3xl font-semibold text-purple-600 mt-2">
          {percentage}%
        </div>
      </div>

      {/* Try Again Button */}
      <button
        onClick={onRestart}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 shadow-lg"
      >
        <RotateCw className="w-5 h-5" />
        Try Again
      </button>
    </div>
  );
};

export default ResultsView;
