import { useState } from 'react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  const adjectives = [
    "Majestic", "Serene", "Breathtaking", "Vibrant", "Mystical", "Delightful",
    "Dreamy", "Tranquil", "Golden", "Lush", "Rustic", "Whimsical", "Graceful", "Radiant",
    "Blissful", "Harmonious", "Captivating", "Ethereal", "Charming", "Warm",
    "Enchanting", "Elegant", "Timeless", "Nostalgic", "Idyllic", "Picturesque", "Sweeping",
    "Luminous", "Graceful", "Idyllic", "Refined", "Colorful", "Mystifying", "Uplifting",
    "Serendipitous", "Dazzling", "Intriguing", "Soothing", "Poised", "Wonder-filled",
    "Seraphic", "Playful", "Joyous", "Enduring", "Tender", "Mellow", "Glistening",
    "Sparkling", "Vivid", "Stellar"
  ];

  const nouns = [
    "landscape", "moment", "scene", "memory", "vista", "perspective", "view", "path",
    "reflection", "journey", "dreamscape", "frame", "light", "composition", "experience",
    "setting", "backdrop", "snapshot", "journey", "portrait", "reality", "glimpse",
    "pause", "harmony", "vision", "canvas", "journey", "wonder", "glow", "story",
    "connection", "poetry", "masterpiece", "marvel", "pathway", "world", "mystery",
    "whisper", "motion", "expression", "panorama", "vibe", "symphony", "spectrum",
    "reflection", "muse", "dimension", "miracle", "horizon", "essence", "fantasy"
  ];

  const phrases = [
    "embracing the unknown", "capturing peace and calm", "bathed in warmth",
    "showcasing nature’s beauty", "a dance of color and light", "frozen in time",
    "where dreams meet reality", "highlighting simple beauty", "an endless story",
    "with wonder in every corner", "a journey through light", "with open arms",
    "whispering beauty and grace", "in a world of imagination", "a journey inward",
    "reflecting life’s harmony", "capturing the heart’s rhythm", "an oasis of calm",
    "a pause for breath", "telling a story of beauty", "bringing light to life",
    "bathed in hues of dawn", "reveling in the glow", "whispers of magic and wonder",
    "painting with light", "reflecting on simple beauty", "capturing a rare moment",
    "in harmony with nature", "an escape into color", "celebrating the view",
    "blending nature’s gifts", "embracing the moment", "painted with grace",
    "filled with light and love", "a glimpse of something more", "the art of stillness",
    "an invitation to dream", "a window to calm", "an endless discovery", 
    "where silence speaks", "life through another lens", "captured with care",
    "an intimate portrait", "caught in a timeless moment", "a peaceful escape",
    "a celebration of light", "a world beyond sight", "an eternal memory",
    "a breath of fresh air", "nature’s gentle touch", "a canvas of emotions"
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setCaption(''); // Clear previous caption
    }
  };

  const generateCaption = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return `${randomAdjective} ${randomNoun} ${randomPhrase}`;
  };

  const handleGenerateCaption = () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }
    const newCaption = generateCaption();
    setCaption(newCaption);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    setCaption('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white to-purple-300">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Image Caption Generator</h1>
        
        <div className="mb-4">
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        {selectedImage && (
          <div className="relative mb-6">
            <img src={selectedImage} alt="Selected" className="w-full rounded-lg shadow-lg" />
            <button 
              onClick={handleCloseImage} 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs font-bold hover:bg-red-700"
            >
              X
            </button>
          </div>
        )}

        <button
          onClick={handleGenerateCaption}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          Generate Caption
        </button>

        {caption && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-700 text-lg italic">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
