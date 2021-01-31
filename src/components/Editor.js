import { useEffect } from 'react';

const Editor = ({ editValue, setEditValue, marked }) => {
  return (
    <textarea
      className='editor'
      id='editor'
      value={editValue}
      onChange={e => {
        setEditValue(e.target.value);
      }}
    ></textarea>
  );
};

export default Editor;
