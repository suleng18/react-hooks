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
1. Callback luôn được gọi sau khi component mounted
2. Cleanup function luôn được gọi trước khi component unmounted
3. Cleanup function luôn được gọi trước khi callback được gọi ( trừ lần mounted )
 */

const lessons = [
  {
    id: 1,
    name: 'React cho nguoi moi bat dau',
  },
  {
    id: 2,
    name: 'CSS cho nguoi moi bat dau',
  },
  {
    id: 3,
    name: 'JAVA cho nguoi moi bat dau',
  },
];

function Content(props) {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComent = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComent);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComent);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? 'red' : 'black',
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
