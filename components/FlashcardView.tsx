import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface FlashcardViewProps {
  question: Question;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  questionNumber: number;
  totalQuestions: number;
}

const FeedbackDisplay: React.FC<{ isCorrect: boolean; correctAnswer: string }> = ({ isCorrect, correctAnswer }) => {
    const imageUrl = isCorrect
      ? '/Ollie/Ollie.png'
      : '/Ollie/Jawaan.png';
    const feedbackText = isCorrect ? "Great job!" : "The correct answer is:";

    return (
        <div className={`mt-4 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 ${isCorrect ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'} border`}>
            <img src={imageUrl} alt="Feedback" className="w-40 h-40 md:w-32 md:h-32 object-cover rounded-lg shadow-md" />
            <div className="text-center md:text-left">
                <p className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>{feedbackText}</p>
                {!isCorrect && <p className="text-slate-700 mt-1">{correctAnswer}</p>}
            </div>
        </div>
    );
};


const FlashcardView: React.FC<FlashcardViewProps> = ({
  question,
  onAnswerSelect,
  onNext,
  selectedAnswer,
  isCorrect,
  questionNumber,
  totalQuestions,
}) => {
  // Safety check - if no question, show loading
  if (!question) {
    return <div className="text-center text-slate-600">Loading questions...</div>;
  }

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  const getButtonClass = (option: string) => {
    if (selectedAnswer === null) {
      return 'bg-white hover:bg-sky-100 text-sky-800';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-500 text-white';
    }
    if (option === selectedAnswer && !isCorrect) {
      return 'bg-red-500 text-white';
    }
    return 'bg-slate-200 text-slate-500 cursor-not-allowed';
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-sky-700">Question {questionNumber} of {totalQuestions}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div
            className="bg-sky-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-slate-800">{question.questionText}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            disabled={selectedAnswer !== null}
            className={`p-4 rounded-lg text-left transition-all duration-200 shadow-sm border border-slate-200 ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {selectedAnswer !== null && isCorrect !== null && (
        <FeedbackDisplay isCorrect={isCorrect} correctAnswer={question.correctAnswer} />
      )}

      {selectedAnswer && (
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
        >
          {questionNumber === totalQuestions ? 'View Results' : 'Next Question'}
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default FlashcardView;