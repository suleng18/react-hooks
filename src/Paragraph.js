import { useContext } from 'react';
import { ThemContext } from './ThemeContext';

function Paragraph() {
  const context = useContext(ThemContext);

  return (
    <p className={context.theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, optio illo incidunt harum
      possimus aut, ad repudiandae cupiditate cumque impedit rerum amet officiis nihil error sequi
      consequuntur velit vel blanditiis.
    </p>
  );
}

export default Paragraph;
