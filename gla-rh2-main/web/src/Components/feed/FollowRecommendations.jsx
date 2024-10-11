import React from 'react';


export default function FollowRecommendations({ recommendations, followUser }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Who to Follow</h2>
      <ul className="space-y-4">
        {recommendations.map((rec) => (
          <li key={rec.id} className="flex justify-between items-center">
            <div>
              <span className="font-medium">{rec.username}</span>
              <p className="text-sm text-gray-500">{rec.mutualFriends} mutual friends</p>
            </div>
            <button
              onClick={() => followUser(rec.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors"
            >
              Follow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}