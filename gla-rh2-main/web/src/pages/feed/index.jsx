import React, { useState, useEffect } from 'react';
import NewPostForm from '../../Components/feed/NewPostForm';
import UserFeed from '../../Components/feed/UserFeed';
import FollowRecommendations from '../../Components/feed/FollowRecommendations';
import MutualFollows from '../../Components/feed/MutualFollow';



const mockPosts = [
    { id: 1, user: 'Alice', content: 'Hello world!', timestamp: new Date().toISOString() },
    { id: 2, user: 'Bob', content: 'React is awesome!', timestamp: new Date().toISOString() },
];

const mockRecommendations = [
    { id: 1, username: 'Charlie', mutualFriends: 5 },
    { id: 2, username: 'David', mutualFriends: 3 },
];

const mockMutualFollows = [
    { id: 1, username: 'Eve', lastPost: 'Having a great day!' },
    { id: 2, username: 'Frank', lastPost: 'Check out this cool article!' },
];

export default function Feed() {
    const [posts, setPosts] = useState(mockPosts);
    const [recommendations, setRecommendations] = useState(mockRecommendations);
    const [mutualFollows, setMutualFollows] = useState(mockMutualFollows);

    const addNewPost = (content) => {
        const newPost = {
            id: posts.length + 1,
            user: 'CurrentUser',
            content,
            timestamp: new Date().toISOString(),
        };
        setPosts([newPost, ...posts]);
    };

    const followUser = (userId) => {
        // Implement follow logic here
        console.log(`Following user ${userId}`);
        // Update recommendations and mutual follows accordingly
    };

    useEffect(() => {
        // Simulate real-time updates
        const interval = setInterval(() => {
            // Add a new post from a random user
            const randomUser = ['Alice', 'Bob', 'Charlie', 'David'][Math.floor(Math.random() * 4)];
            const newPost = {
                id: posts.length + 1,
                user: randomUser,
                content: `New update from ${randomUser}!`,
                timestamp: new Date().toISOString(),
            };
            setPosts(prevPosts => [newPost, ...prevPosts]);
        }, 10000); // Every 10 seconds

        return () => clearInterval(interval);
    }, [posts]);

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <NewPostForm addNewPost={addNewPost} />
                        <UserFeed posts={posts} />
                    </div>
                    <div className="space-y-8">
                        <FollowRecommendations recommendations={recommendations} followUser={followUser} />
                        <MutualFollows mutualFollows={mutualFollows} />
                    </div>
                </div>
            </main>
        </div>
    );
}