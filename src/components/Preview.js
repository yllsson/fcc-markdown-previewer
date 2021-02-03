const Preview = ({ editValue, marked }) => {
  return (
    <div
      className='window preview'
      id='preview'
      dangerouslySetInnerHTML={{ __html: marked(editValue, { breaks: true }) }}
    ></div>
  );
};

export default Preview;
