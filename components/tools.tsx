import tools from '../tools.json';
import Markdown from 'react-markdown';

const Tools = () => {
  return tools.map((item) => {
    return (
      <div key={item.name}>
        <Markdown>{item.name}</Markdown>
      </div>
    );
  });
};

export default Tools;
