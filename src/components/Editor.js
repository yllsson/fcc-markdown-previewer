const Editor = ({ editValue, setEditValue }) => {
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
