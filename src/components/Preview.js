const Preview = ({ editValue, setEditValue, html, setHtml }) => {
  return (
    <div className='preview' id='preview' dangerouslySetInnerHTML={html}></div>
  );
};

export default Preview;
