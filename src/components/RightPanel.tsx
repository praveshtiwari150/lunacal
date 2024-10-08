import { data, images } from "@/data";
import { useEffect, useState } from "react";
import { BiGridVertical } from "react-icons/bi";
import { FaRegQuestionCircle, FaPlus } from "react-icons/fa";
import { Button } from "./ui/button";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const RightPanel = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [content, setContent] = useState(data[0].content);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagePerSlide, setImagePerSlide] = useState(3);

  useEffect(() => {
    const updateImagePerSlide = () => {
      if (window.innerWidth < 640) {
        setImagePerSlide(1);
      } else if (window.innerWidth < 1024) {
        setImagePerSlide(2);
      } else {
        setImagePerSlide(3);
      }
    };

    updateImagePerSlide();

    window.addEventListener("resize", updateImagePerSlide);

    return () => {
      window.removeEventListener("resize", updateImagePerSlide);
    };
  }, []);

  const handleContent = (id: number) => {
    const selectData = data.find((item) => item.id === id);
    if (selectData) {
      setActiveButton(id);
      setContent(selectData?.content);
    }
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(images.length / 3)) %
        Math.ceil(images.length / 3)
    );
  };
  const nextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3)
    );
  };
  return (
    <>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex-1 flex rounded-2xl  bg-onyx pt-3 w-full shadow-2xl transform">
          <span className="flex flex-col h-28 p-1 justify-between items-center">
            <FaRegQuestionCircle className="text-lg text-charcoal-300" />
            <BiGridVertical className="text-2xl text-slate-400" />
          </span>
          <div className="">
            <div className="flex flex-col sm:flex-row gap-[1px] w-max px-1  rounded-lg mx-auto bg-black max-w-full">
              {data.map((item) => (
                <Button
                  key={item.id}
                  className={`h-4 sm:h-7 relative overflow-hidden bg-transparent rounded-lg my-2 mx-1 group text-xs ${
                    activeButton === item.id
                      ? "bg-charcoal-600 text-white-50"
                      : "text-charcoal-300 hover:text-white-50"
                  }`}
                  onClick={() => handleContent(item.id)}
                >
                  {item.title}
                </Button>
              ))}
            </div>
            <div className="text-container text-sm text-charcoal-300 text-justify overflow-y-auto h-36 mx-4 my-1 p-4">
              {content}
            </div>
          </div>
        </div>
        <hr className="text-center mx-auto border-none bg-twilight-gradient p-1 rounded-full w-3/4" />
        <div className="flex flex-col justify-between gap-4 h-full">
          <div className="flex-1 flex rounded-2xl  bg-onyx pt-1 w-full shadow-2xl transform">
            <span className="flex flex-col h-28 p-1 justify-between items-center">
              <FaRegQuestionCircle className="text-lg text-charcoal-300" />
              <BiGridVertical className="text-2xl text-slate-400" />
            </span>
            <div className="flex flex-col p-1 w-full">
              <div className="h-max flex justify-start flex-col gap-1 sm:flex-row sm:justify-between  rounded">
                <button className="h-7 bg-black p-3 w-24 sm:w-max flex justify-center items-center rounded-lg text-charcoal-200  hover:text-charcoal-400 text-xs ml-4">
                  Gallary
                </button>
                <div className="flex gap-2 ml-4 sm-ml-0 flex-col sm:flex-row">
                  <button className="h-7 p-2 w-24 flex text-center bg-btn-gradient rounded-full shadow-md border border-charcoal-500 shadow-gray-500 mr-4">
                    <FaPlus className="text-sm" />
                    <span className="text-[10px]">ADD IMAGE</span>
                  </button>
                  <div className="hidden sm:flex sm:justify-between  gap-2 mx-2">
                    <button
                      onClick={prevImage}
                      className="bg-arrow-gradient rounded-full shadow-sm shadow-charcoal-200"
                    >
                      <LuArrowLeft className=" text-2xl text-charcoal-300  hover:text-white-50" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-arrow-gradient rounded-full mr-4 shadow-sm shadow-charcoal-200"
                    >
                      <LuArrowRight className="text-2xl text-charcoal-300  hover:text-white-50" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="image-container carousel w-full m-auto overflow-auto sm:overflow-hidden">
                <div
                  className="carousel-inner flex gap-2 transition-transform duration-500"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / imagePerSlide)
                    }%)`,
                  }}
                >
                  {images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className={`carousel-item w-${Math.floor(
                          100 / imagePerSlide
                        )}%  flex-shrink-0`}
                      >
                        <img
                          src={image.path}
                          className="image-block tilt-image rounded-xl w-[169px] m-4"
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <hr className="border-none mx-auto  bg-twilight-gradient p-1 rounded-full w-3/4 " />
        </div>
      </div>
    </>
  );
};
export default RightPanel;
