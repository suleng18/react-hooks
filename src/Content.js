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

function Content(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
    </div>
  );
}

export default Content;
