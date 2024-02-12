import "./Pictures.scss";

import Image1 from "../assets/Image1.jfif";
import Image2 from "../assets/Image2.jfif";
import Image3 from "../assets/Image3.jfif";
import Image4 from "../assets/Image4.jfif";
import Image5 from "../assets/Image5.jfif";
import Image6 from "../assets/Image6.jfif";
import Image7 from "../assets/Image7.jfif";
import Image8 from "../assets/Image8.jfif";
import Image9 from "../assets/Image9.jfif";
import Image10 from "../assets/Image10.jfif";
import Image11 from "../assets/Image11.jfif";
import Image12 from "../assets/Image12.jfif";
import Image13 from "../assets/Image13.jfif";
import Image14 from "../assets/Image2.jfif";
import Image15 from "../assets/Image15.jfif";
import Image16 from "../assets/Image16.jfif";

export const photos = [
  {
    image: Image1,
    alt: "err",
  },

  {
    image: Image2,
    alt: "err",
  },
  {
    image: Image3,
    alt: "err",
  },
  {
    image: Image4,
    alt: "err",
  },
  {
    image: Image5,
    alt: "err",
  },
  {
    image: Image6,
    alt: "err",
  },
  {
    image: Image7,
    alt: "err",
  },
  {
    image: Image8,
    alt: "err",
  },
  {
    image: Image9,
    alt: "err",
  },
  {
    image: Image10,
    alt: "err",
  },
  {
    image: Image11,
    alt: "err",
  },
  {
    image: Image12,
    alt: "err",
  },
  {
    image: Image13,
    alt: "err",
  },
  {
    image: Image14,
    alt: "err",
  },
  {
    image: Image15,
    alt: "err",
  },
  {
    image: Image16,
    alt: "err",
  },
];
const Pictures = () => {
  return (
    <div className="pictures">
      {photos &&
        photos.map((item, index) => {
          const { image, alt } = item;
          return (
            <div key={index} className="imageCard">
              <img src={item.image} alt={item.alt} />
              {/* <button className="button">Click</button> */}
            </div>
          );
        })}
        {/* <button className="button">Click</button> */}
    </div>
  );
};

export default Pictures;
