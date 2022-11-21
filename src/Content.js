import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {};

// 1.useEffect(callback)         : gọi callback mỗi khi component re-render,
//                                 gọi callback sau khi component thêm element vào DOM

// 2.useEffect(callback,[])      : Chỉ gọi callback 1 lần sau khi component được mounted
// 3.useEffect(callback,[desps]) :
// -----------------
// Lưu ý chung cho cả 3:
// 1.Callback luôn được gọi sau khi component mounted

function Content(props) {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((postList) => {
        setPosts(postList);
      });
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
