import React, {useState} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" ,
  "https://plus.unsplash.com/premium_photo-1661674514856-17f29bd480b6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" ,
  "https://images.unsplash.com/photo-1566847438217-76e82d383f84?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" ,
  "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D" ,
  "https://images.unsplash.com/photo-1556582305-528bffcf7af0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGUlMjBjYXR8ZW58MHx8MHx8fDA%3D" ,

];


const MainPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return(
    <div className="h-screen p-6 flex flex-col items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-2xl font-semibold text-white">Image Gallery</h1>
      <p className="text-xl text-white">Click the arrow to scroll through the images</p>
      <div className="relative w-full max-w-xl">
        <img 
          src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} 
          className="w-full h-auto rounded-lg shadow-md"
        >
        </img>

        <button onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>

        <button onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        > 
          <ChevronRight size={24} />
        </button>
        
      </div>
    </div>
  );

};

export default MainPage;
