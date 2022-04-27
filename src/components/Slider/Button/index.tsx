import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface BtnSliderProps {
  direction: string;
  moveSlide: () => void;
}

export function BtnSlider({ direction, moveSlide }: BtnSliderProps) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <MdKeyboardArrowRight className="icon"/>
      ) : (
        <MdKeyboardArrowLeft className="icon"/>
      )}
    </button>
  );
}
