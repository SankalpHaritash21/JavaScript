import { useEffect, useState } from "react";

const data = [
  "https://plus.unsplash.com/premium_photo-1709311449587-bd808717181c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1709589865176-7c6ede164354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1709310875357-dd82b6a761c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
];

const Image = () => {
  const [image, setImage] = useState(0);

  const handleP = () => {
    // if (image === 0) setImage(data.length - 1);
    // else setImage(image - 1);
    setImage(!image ? data.length - 1 : image - 1);
  };

  const handleN = () => {
    setImage((image + 1) % data.length);
  };

  useEffect(() => {
    const timeout = setTimeout(handleN, 5000);
    return () => clearTimeout(timeout);
  }, [image]);
  return (
    <div className="flex gap-x-10 items-center">
      <div>
        <button onClick={handleP}>Previous</button>
      </div>
      <div className="object-contain w-[300] h-[500] overflow-hidden">
        {data.map((url, i) => (
          <img
            key={i}
            src={url}
            className={"w-[300] h-[500] " + (image === i ? "block" : "hidden")}
            alt="wallpaper"
          />
        ))}
      </div>
      <div>
        <button onClick={handleN}>Next</button>
      </div>
    </div>
  );
};

export default Image;
