import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {};

// 1.useEffect(callback)         : gọi callback mỗi khi component re-render,
//                                 gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback,[])      : Chỉ gọi callback 1 lần sau khi component được mounted
// 3.useEffect(callback,[desps]) : Callback sẽ được gọi lại mỗi khi desps thay đổi
// -----------------
// Lưu ý chung cho cả 3:
// - Callback luôn được gọi sau khi component mounted

const tabs = ['posts', 'comments', 'albums'];
function Content(props) {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((postList) => {
        setPosts(postList);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={
            type === tab
              ? {
                  color: '#fff',
                  backgroundColor: '#333',
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title ?? post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
