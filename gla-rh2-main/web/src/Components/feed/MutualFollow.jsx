
import React, { useState } from 'react';

export default function MutualFollows({ mutualFollows }) {
  const [followedUsers, setFollowedUsers] = useState({});

  const toggleFollow = (id) => {
    setFollowedUsers((prevFollowedUsers) => ({
      ...prevFollowedUsers,
      [id]: !prevFollowedUsers[id], 
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Mutual Follows</h2>
      <ul className="space-y-4">
        {mutualFollows.map((follow) => (
          <li key={follow.id} className="border-b pb-2 last:border-b-0 flex justify-between items-center">
            <div>
              <span className="font-medium">{follow.username}</span>
              <p className="text-sm text-gray-600 truncate">{follow.lastPost}</p>
            </div>
            <button
              onClick={() => toggleFollow(follow.id)}
              className={`${
                followedUsers[follow.id] ? 'bg-gray-500' : 'bg-blue-500'
              } text-white px-3 py-1 rounded-full text-sm hover:opacity-90 transition-opacity`}
            >
              {followedUsers[follow.id] ? 'Unfollow' : 'Follow'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


