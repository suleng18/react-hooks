import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

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

function Content() {
  return (
    <div>
      <Paragraph />
    </div>
  );
}

export default Content;
