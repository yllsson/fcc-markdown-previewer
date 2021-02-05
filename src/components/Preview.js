const Preview = ({ editValue, marked }) => {
  return (
    <div>
      <h2 className='winHeader'>Preview</h2>
      <div
        className='window preview'
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(editValue) }}
      ></div>
    </div>
  );
};

export default Preview;
