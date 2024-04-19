import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { reactions } from '../../reactions.js';
import axios from 'axios';

const Tweet = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const response = await axios.get(
          'https://run.mocky.io/v3/252749f5-ad45-4ba6-990a-d02226253ca0'
        );

        if (response.status === 200) {
          console.log(response.data);
          setPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    }

    fetchTweets();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-4">
          <div className="flex items-center">
            <Avatar src={post.avatarSrc} size="40" round={true} />
            <div className="ml-4">
              <h1 className="font-bold">{post.username}</h1>
              <p className="text-gray-500 text-sm">{post.tagline}</p>
            </div>
          </div>
          <div className="mt-2">
            <p>{post.content}</p>
            {post.image && (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={post.image}
                alt="Tweet Image"
                className=" rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between mt-4">
            {reactions[post.id - 1].map((reaction, index) => (
              <div key={index} className="flex items-center">
                {reaction.icon}
                <p className="ml-1">{reaction.count}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweet;
