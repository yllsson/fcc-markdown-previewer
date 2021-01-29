const Preview = ({ editValue }) => {
  return (
    <div
      className='preview'
      id='preview'
      dangerouslySetInnerHTML={{ __html: editValue }}
    ></div>
  );
};

export default Preview;
