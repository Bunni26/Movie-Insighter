'use client';

import { SentimentAnalysis } from '@/types';

interface SentimentCardProps {
  sentiment: SentimentAnalysis;
}

export default function SentimentCard({ sentiment }: SentimentCardProps) {
  const sentimentConfig = {
    positive: {
      color: 'bg-green-100 border-green-500 text-green-800',
      icon: '😊',
      badgeColor: 'bg-green-500',
      label: 'Positive',
    },
    mixed: {
      color: 'bg-yellow-100 border-yellow-500 text-yellow-800',
      icon: '😐',
      badgeColor: 'bg-yellow-500',
      label: 'Mixed',
    },
    negative: {
      color: 'bg-red-100 border-red-500 text-red-800',
      icon: '😞',
      badgeColor: 'bg-red-500',
      label: 'Negative',
    },
  };

  const config = sentimentConfig[sentiment.sentiment];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">AI Sentiment Analysis</h3>
        <div className={`${config.badgeColor} text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2`}>
          <span className="text-xl">{config.icon}</span>
          {config.label}
        </div>
      </div>

      <div className={`${config.color} border-l-4 rounded-lg p-6`}>
        <p className="text-gray-800 leading-relaxed text-lg">
          {sentiment.summary}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span>Powered by AI sentiment analysis</span>
        </div>
      </div>
    </div>
  );
}

