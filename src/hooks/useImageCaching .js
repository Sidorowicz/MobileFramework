import { useState, useEffect } from 'react'; 
const useImageCaching = (url) => {
    const [image, setImage] = useState(null); 
    useEffect(() => { 
        const img = new Image(); 
        img.onload = () => { 
            setImage(img);
        }; 
        img.src = url;
    }, [url]); 
    return image;
};

export default useImageCaching