
import { useState, useMemo, useCallback, useEffect } from 'react';
import { Question } from '../types';

const useQuiz = (initialQuestions: Question[]) => {
  const [questions, setQuestions] = useState(() =>
    initialQuestions.length > 0 ? [...initialQuestions].sort(() => Math.random() - 0.5) : []
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Update questions when initialQuestions changes
  useEffect(() => {
    if (initialQuestions.length > 0) {
      setQuestions([...initialQuestions].sort(() => Math.random() - 0.5));
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowResults(false);
    }
  }, [initialQuestions.length]);

  const totalQuestions = useMemo(() => questions.length, [questions]);
  const currentQuestion = useMemo(
    () => questions[currentQuestionIndex],
    [questions, currentQuestionIndex]
  );

  const handleAnswerSelect = useCallback((answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer

    const correct = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
  }, [currentQuestion, selectedAnswer]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handleRestart = useCallback(() => {
    setQuestions([...initialQuestions].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowResults(false);
  }, [initialQuestions]);

  return {
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
  };
};

export default useQuiz;
