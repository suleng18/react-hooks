import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {};
/**
1.useEffect(callback)         : Gọi callback mỗi khi component re-render,
                                Gọi callback sau khi component thêm element vào DOM
2.useEffect(callback,[])      : Chỉ gọi callback 1 lần sau khi component được mounted
3.useEffect(callback,[desps]) : Callback sẽ được gọi lại mỗi khi desps thay đổi
-----------------
Lưu ý chung cho cả 3:
- Callback luôn được gọi sau khi component mounted
- Cleanup function luôn được gọi lại trước khi component unmounted
 */

const tabs = ['posts', 'comments', 'albums'];
function Content(props) {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((postList) => {
        setPosts(postList);
      });
  }, [type]);

  useEffect(() => {
    const handdleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
      // setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handdleScroll);

    return () => {
      window.removeEventListener('scroll', handdleScroll);
    };
  }, []);

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
      {showGoToTop && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Content;
