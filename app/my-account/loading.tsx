"use client"
import React from 'react';

const Loading = () => {
  return (
    <div className="w-11/12 mx-auto py-7 min-h-[80vh] flex gap-4">
      {/* Sidebar skeleton */}
      <div className="w-1/4 hidden lg:block">
        <div className="animate-pulse space-y-3">
          <div className="h-16 bg-gray-100 rounded-lg" />
          <div className="h-8 bg-gray-100 rounded" />
          <div className="h-8 bg-gray-100 rounded" />
          <div className="h-8 bg-gray-100 rounded" />
        </div>
      </div>
      {/* Content skeleton */}
      <div className="flex-1 animate-pulse space-y-3">
        <div className="h-8 bg-gray-100 rounded w-48" />
        <div className="h-12 bg-gray-100 rounded" />
        <div className="h-12 bg-gray-100 rounded" />
        <div className="h-12 bg-gray-100 rounded" />
        <div className="h-12 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default Loading;
