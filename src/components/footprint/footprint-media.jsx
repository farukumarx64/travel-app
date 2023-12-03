import { useEffect, useState } from "react";
import '../../styles/Media.css'

export default function FootPrintMedia () {
  const [backgroundImages, setBackgroundImages] = useState([]);
  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const promises = Array.from({ length: 5 }, () =>
          fetch('https://source.unsplash.com/random/1920x1080')
        );

        const responses = await Promise.all(promises);
        const imageUrls = responses.map((response) => response.url);
        
        setBackgroundImages(imageUrls);
      } catch (error) {
        console.error('Error fetching random images:', error);
      }
    };
    fetchRandomImages();
  }, []);
  return(
    <div id="media">
      {backgroundImages.map((imageUrl, index) => (
        <img src={imageUrl} key={index} className="location-images"/>
      ))}
    </div>
  )
}