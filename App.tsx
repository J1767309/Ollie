
import React, { useState } from 'react';
import FlashcardView from './components/FlashcardView';
import ResultsView from './components/ResultsView';
import ChapterSelection from './components/ChapterSelection';
import useQuiz from './hooks/useQuiz';
import { questions } from './data/questions';
import { BookOpen, Zap, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<3 | 4 | null>(null);

  // Filter questions based on selected chapter
  const chapter3Questions = questions.filter(q => q.id >= 1 && q.id <= 40);
  const chapter4Questions = questions.filter(q => q.id >= 41 && q.id <= 88);
  const currentQuestions = selectedChapter === 3 ? chapter3Questions : selectedChapter === 4 ? chapter4Questions : [];

  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    selectedAnswer,
    isCorrect,
    showResults,
    handleAnswerSelect,
    handleNextQuestion,
    handleRestart,
  } = useQuiz(currentQuestions);

  const handleChapterSelect = (chapter: 3 | 4) => {
    setSelectedChapter(chapter);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
    handleRestart();
  };

  const getChapterTitle = () => {
    if (selectedChapter === 3) return 'Weather & Climate';
    if (selectedChapter === 4) return 'Weathering, Erosion & Deposition';
    return 'Flashcards';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex flex-col items-center justify-center p-4 font-sans">
      <header className="w-full max-w-2xl mb-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <BookOpen className="w-8 h-8 text-sky-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            {selectedChapter ? `Chapter ${selectedChapter}: ${getChapterTitle()}` : 'Science Flashcards'}
          </h1>
          <Zap className="w-8 h-8 text-amber-500" />
        </div>
        <p className="text-slate-600">Test your knowledge with these interactive cards!</p>
      </header>

      <main className="w-full max-w-2xl">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 p-6 md:p-8">
          {!selectedChapter ? (
            <ChapterSelection onSelectChapter={handleChapterSelect} />
          ) : showResults ? (
            <ResultsView
              score={score}
              totalQuestions={totalQuestions}
              onRestart={handleRestart}
            />
          ) : (
            <FlashcardView
              question={currentQuestion}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNextQuestion}
              selectedAnswer={selectedAnswer}
              isCorrect={isCorrect}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={totalQuestions}
            />
          )}
        </div>

        {selectedChapter && (
          <button
            onClick={handleBackToChapters}
            className="mt-4 flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Chapter Selection
          </button>
        )}
      </main>
      <footer className="mt-8 text-center text-slate-500 text-sm">
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
