import useImageCaching from "../hooks/useImageCaching ";

const ImageComponent = ({ url }) => {
    const image = useImageCaching(url);
  
    if (!image) {
      return <div>Loading...</div>;
    }
  
    return <img src={url} />;
  };

  export default ImageComponent