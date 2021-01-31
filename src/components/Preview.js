const Preview = ({ editValue, marked }) => {
  return (
    <div
      className='preview'
      id='preview'
      dangerouslySetInnerHTML={{ __html: marked(editValue) }}
    ></div>
  );
};

export default Preview;
