
import { useState, useMemo, useCallback, useEffect } from 'react';
import { Question } from '../types';

// Helper function to shuffle answer options for a question
const shuffleOptions = (question: Question): Question => {
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  return {
    ...question,
    options: shuffledOptions,
  };
};

// Helper function to shuffle questions AND their options
const shuffleQuestionsAndOptions = (questions: Question[]): Question[] => {
  return questions
    .map(q => shuffleOptions(q))
    .sort(() => Math.random() - 0.5);
};

const useQuiz = (initialQuestions: Question[]) => {
  const [questions, setQuestions] = useState(() =>
    initialQuestions.length > 0 ? shuffleQuestionsAndOptions([...initialQuestions]) : []
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Update questions when initialQuestions changes
  useEffect(() => {
    if (initialQuestions.length > 0) {
      setQuestions(shuffleQuestionsAndOptions([...initialQuestions]));
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
    setQuestions(shuffleQuestionsAndOptions([...initialQuestions]));
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
