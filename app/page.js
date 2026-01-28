"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import React, { useState, useEffect } from "react";
import { Smile, Meh, Frown, Heart, Zap, Coffee } from "lucide-react";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
    console.log("App ready - would call sdk.actions.ready() here");
  }, []);

  const moods = [
    {
      id: "amazing",
      icon: Heart,
      label: "Amazing",
      color: "bg-pink-500",
      emoji: "💖",
    },
    {
      id: "energized",
      icon: Zap,
      label: "Energized",
      color: "bg-yellow-500",
      emoji: "⚡",
    },
    {
      id: "chill",
      icon: Coffee,
      label: "Chill",
      color: "bg-blue-500",
      emoji: "☕",
    },
    {
      id: "happy",
      icon: Smile,
      label: "Happy",
      color: "bg-green-500",
      emoji: "😊",
    },
    { id: "meh", icon: Meh, label: "Meh", color: "bg-gray-500", emoji: "😐" },
    {
      id: "down",
      icon: Frown,
      label: "Down",
      color: "bg-purple-500",
      emoji: "😔",
    },
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    const newEntry = {
      mood: mood.label,
      emoji: mood.emoji,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMoodHistory([newEntry, ...moodHistory.slice(0, 4)]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Base Vibes</h1>
          <p className="text-blue-100">How are you feeling today?</p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 text-center animate-pulse">
            <p className="text-white font-semibold">Vibe recorded! ✨</p>
          </div>
        )}

        {/* Mood Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMood?.id === mood.id;

            return (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood)}
                className={`
                  ${mood.color} 
                  ${isSelected ? "ring-4 ring-white scale-105" : "hover:scale-105"}
                  transition-all duration-200 
                  rounded-2xl p-6 
                  flex flex-col items-center gap-3
                  shadow-lg hover:shadow-xl
                `}
              >
                <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                <span className="text-2xl">{mood.emoji}</span>
                <span className="text-white font-semibold">{mood.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mood History */}
        {moodHistory.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Vibes</h2>
            <div className="space-y-3">
              {moodHistory.map((entry, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-3 flex items-center gap-3"
                >
                  <span className="text-2xl">{entry.emoji}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium">{entry.mood}</p>
                    <p className="text-blue-100 text-sm">{entry.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <p className="text-blue-100 text-sm mb-1">Total vibes logged</p>
          <p className="text-4xl font-bold text-white">{moodHistory.length}</p>
        </div>
      </div>
    </div>
  );
}
