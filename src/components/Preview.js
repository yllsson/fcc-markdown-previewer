const Preview = ({ editValue, setEditValue }) => {
  return (
    <div className='preview' id='preview'>
      {`This is a preview:`}
      <br />
      <br />
      {editValue}
    </div>
  );
};

export default Preview;
