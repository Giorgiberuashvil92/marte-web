"use client";

import React, { useEffect, useState } from "react";
import { FaAndroid, FaApple, FaDownload, FaChartLine } from "react-icons/fa";
import { ClickEvent } from "../utils/tracking";

const BACKEND_URL = 'https://marte-backend-production.up.railway.app';

interface BackendStats {
  totalDownloads: number;
  androidDownloads: number;
  iosDownloads: number;
  downloadsByHour: Record<string, { android: number; ios: number }>;
  downloadsByDate: Record<string, { android: number; ios: number }>;
  period?: string;
  startDate?: string;
  endDate?: string;
}

interface Stats {
  total: number;
  android: number;
  ios: number;
  androidAuto: number;
  bySection: {
    hero: { android: number; ios: number };
    comingSoon: { android: number; ios: number };
  };
  recent: Array<{
    type: string;
    timestamp: number;
    section: string;
  }>;
  downloadsByHour?: Record<string, { android: number; ios: number }>;
  downloadsByDate?: Record<string, { android: number; ios: number }>;
  period?: string;
  lastUpdated?: number;
}

export default function StatsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState<'today' | 'week' | 'month'>('week');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Fetch from backend API
        const response = await fetch(
          `${BACKEND_URL}/analytics/website/download-stats?period=${period}`
        );

        if (response.ok) {
          const backendStats: BackendStats = await response.json();
          
          // Get local stats for section breakdown
          const localStats = getLocalStats();
          
          // Combine backend and local stats
          setStats({
            total: backendStats.totalDownloads,
            android: backendStats.androidDownloads,
            ios: backendStats.iosDownloads,
            androidAuto: localStats.androidAuto, // Only from localStorage
            bySection: localStats.bySection, // Only from localStorage
            recent: localStats.recent, // Only from localStorage
            downloadsByHour: backendStats.downloadsByHour,
            downloadsByDate: backendStats.downloadsByDate,
            period: backendStats.period,
            lastUpdated: Date.now(),
          });
          setError(null);
        } else {
          // Fallback to localStorage if backend fails
          const localStats = getLocalStats();
          setStats(localStats);
          setError('Backend API unavailable, showing local stats only');
        }
      } catch {
        // Fallback to localStorage
        const localStats = getLocalStats();
        setStats(localStats);
        setError('Failed to fetch stats from backend, showing local stats only');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, [period]);

  const getLocalStats = (): Stats => {
    try {
      const events: ClickEvent[] = JSON.parse(localStorage.getItem("marte-clicks") || "[]");
      return {
        total: events.length,
        android: events.filter((e: ClickEvent) => e.type === "android").length,
        ios: events.filter((e: ClickEvent) => e.type === "ios").length,
        androidAuto: events.filter((e: ClickEvent) => e.type === "android-auto").length,
        bySection: {
          hero: {
            android: events.filter((e: ClickEvent) => e.section === "hero" && e.type === "android").length,
            ios: events.filter((e: ClickEvent) => e.section === "hero" && e.type === "ios").length,
          },
          comingSoon: {
            android: events.filter((e: ClickEvent) => e.section === "coming-soon" && e.type === "android").length,
            ios: events.filter((e: ClickEvent) => e.section === "coming-soon" && e.type === "ios").length,
          },
        },
        recent: events.slice(-50).reverse(),
      };
    } catch {
      return {
        total: 0,
        android: 0,
        ios: 0,
        androidAuto: 0,
        bySection: {
          hero: { android: 0, ios: 0 },
          comingSoon: { android: 0, ios: 0 },
        },
        recent: [],
      };
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("ka-GE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "android":
        return "Android";
      case "ios":
        return "iOS";
      case "android-auto":
        return "Android (Auto)";
      default:
        return type;
    }
  };

  const getSectionLabel = (section: string) => {
    return section === "hero" ? "Hero Section" : "Coming Soon Section";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066FF] mx-auto"></div>
          <p className="mt-4 text-lg text-[#666666]">იტვირთება...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-[#0A0A0A] mb-4">
            <FaChartLine className="inline-block mr-3 text-[#0066FF]" />
            სტატისტიკა
          </h1>
          <p className="text-xl text-[#666666] font-georgian mb-6">
            Android და iOS ღილაკების დაჭერების სტატისტიკა
          </p>
          
          {/* Period Selector */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setPeriod('today')}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${
                period === 'today'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5]'
              }`}
            >
              დღეს
            </button>
            <button
              onClick={() => setPeriod('week')}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${
                period === 'week'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5]'
              }`}
            >
              კვირა
            </button>
            <button
              onClick={() => setPeriod('month')}
              className={`px-6 py-2 rounded-xl font-bold transition-all ${
                period === 'month'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5]'
              }`}
            >
              თვე
            </button>
          </div>
        </div>

        {stats && (
          <>
            {/* Total Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Total */}
              <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <FaDownload className="w-8 h-8" />
                  <span className="text-4xl font-black">{stats.total}</span>
                </div>
                <h3 className="text-xl font-bold">სულ დაჭერები</h3>
              </div>

              {/* Android */}
              <div className="bg-gradient-to-br from-[#3DDC84] to-[#30D158] text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <FaAndroid className="w-8 h-8" />
                  <span className="text-4xl font-black">{stats.android + stats.androidAuto}</span>
                </div>
                <h3 className="text-xl font-bold">Android</h3>
                <p className="text-sm opacity-90 mt-2">
                  {stats.androidAuto > 0 && `${stats.androidAuto} ავტომატური`}
                </p>
              </div>

              {/* iOS */}
              <div className="bg-gradient-to-br from-[#0A0A0A] to-[#333333] text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <FaApple className="w-8 h-8" />
                  <span className="text-4xl font-black">{stats.ios}</span>
                </div>
                <h3 className="text-xl font-bold">iOS</h3>
              </div>
            </div>

            {/* By Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Hero Section */}
              <div className="bg-white border-2 border-[#E5E5E5] p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-black text-[#0A0A0A] mb-6">Hero Section</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaAndroid className="w-5 h-5 text-[#3DDC84]" />
                      <span className="text-lg font-georgian">Android</span>
                    </div>
                    <span className="text-2xl font-black text-[#0A0A0A]">
                      {stats.bySection.hero.android}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaApple className="w-5 h-5 text-[#0A0A0A]" />
                      <span className="text-lg font-georgian">iOS</span>
                    </div>
                    <span className="text-2xl font-black text-[#0A0A0A]">
                      {stats.bySection.hero.ios}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coming Soon Section */}
              <div className="bg-white border-2 border-[#E5E5E5] p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-black text-[#0A0A0A] mb-6">Coming Soon Section</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaAndroid className="w-5 h-5 text-[#3DDC84]" />
                      <span className="text-lg font-georgian">Android</span>
                    </div>
                    <span className="text-2xl font-black text-[#0A0A0A]">
                      {stats.bySection.comingSoon.android}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaApple className="w-5 h-5 text-[#0A0A0A]" />
                      <span className="text-lg font-georgian">iOS</span>
                    </div>
                    <span className="text-2xl font-black text-[#0A0A0A]">
                      {stats.bySection.comingSoon.ios}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloads by Hour */}
            {stats.downloadsByHour && Object.keys(stats.downloadsByHour).length > 0 && (
              <div className="bg-white border-2 border-[#E5E5E5] p-8 rounded-2xl shadow-lg mb-12">
                <h2 className="text-2xl font-black text-[#0A0A0A] mb-6">დაჭერები საათების მიხედვით</h2>
                <div className="space-y-4">
                  {Object.entries(stats.downloadsByHour)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([hour, counts]) => (
                      <div key={hour} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#0A0A0A]">{hour}</span>
                          <span className="text-sm text-[#666666]">
                            სულ: {counts.android + counts.ios}
                          </span>
                        </div>
                        <div className="flex gap-2 h-8">
                          {counts.android > 0 && (
                            <div
                              className="bg-[#3DDC84] rounded-lg flex items-center justify-center text-white text-sm font-bold min-w-[40px]"
                              style={{ width: `${(counts.android / (counts.android + counts.ios)) * 100}%` }}
                            >
                              {counts.android}
                            </div>
                          )}
                          {counts.ios > 0 && (
                            <div
                              className="bg-[#0A0A0A] rounded-lg flex items-center justify-center text-white text-sm font-bold min-w-[40px]"
                              style={{ width: `${(counts.ios / (counts.android + counts.ios)) * 100}%` }}
                            >
                              {counts.ios}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Downloads by Date */}
            {stats.downloadsByDate && Object.keys(stats.downloadsByDate).length > 0 && (
              <div className="bg-white border-2 border-[#E5E5E5] p-8 rounded-2xl shadow-lg mb-12">
                <h2 className="text-2xl font-black text-[#0A0A0A] mb-6">დაჭერები დღეების მიხედვით</h2>
                <div className="space-y-4">
                  {Object.entries(stats.downloadsByDate)
                    .sort(([a], [b]) => b.localeCompare(a))
                    .map(([date, counts]) => {
                      const dateObj = new Date(date);
                      const formattedDate = dateObj.toLocaleDateString('ka-GE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      });
                      return (
                        <div key={date} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-[#0A0A0A]">{formattedDate}</span>
                            <span className="text-sm text-[#666666]">
                              სულ: {counts.android + counts.ios}
                            </span>
                          </div>
                          <div className="flex gap-2 h-8">
                            {counts.android > 0 && (
                              <div
                                className="bg-[#3DDC84] rounded-lg flex items-center justify-center text-white text-sm font-bold min-w-[40px]"
                                style={{ width: `${(counts.android / (counts.android + counts.ios)) * 100}%` }}
                              >
                                {counts.android}
                              </div>
                            )}
                            {counts.ios > 0 && (
                              <div
                                className="bg-[#0A0A0A] rounded-lg flex items-center justify-center text-white text-sm font-bold min-w-[40px]"
                                style={{ width: `${(counts.ios / (counts.android + counts.ios)) * 100}%` }}
                              >
                                {counts.ios}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Recent Events */}
            <div className="bg-white border-2 border-[#E5E5E5] p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-black text-[#0A0A0A] mb-6">ბოლო დაჭერები</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {stats.recent.length === 0 ? (
                  <p className="text-center text-[#666666] py-8">ჯერ არ არის დაჭერები</p>
                ) : (
                  stats.recent.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-xl"
                    >
                      <div className="flex items-center space-x-4">
                        {event.type === "android" || event.type === "android-auto" ? (
                          <FaAndroid className="w-5 h-5 text-[#3DDC84]" />
                        ) : (
                          <FaApple className="w-5 h-5 text-[#0A0A0A]" />
                        )}
                        <div>
                          <p className="font-bold text-[#0A0A0A]">
                            {getTypeLabel(event.type)}
                          </p>
                          <p className="text-sm text-[#666666]">{getSectionLabel(event.section)}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#666666]">{formatDate(event.timestamp)}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
