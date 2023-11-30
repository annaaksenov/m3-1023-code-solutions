import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { FaRegCircle, FaCircle } from "react-icons/fa";

export default function Container({ images }) {
  const [count, setCount] = useState(0);
  function prev() {
    if (count > 0) {
     setCount(count => count - 1);
    } else if (count === 0) {
      setCount(5);
    }
  }
  function next() {
    if (count < 5) {
      setCount(count => count + 1);
    } else if (count === 5) {
      setCount(0);
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="thirds left">
            <VscChevronLeft size="40px" cursor="pointer" onClick={prev} />
          </div>
          <div className="thirds slide">
            <Carousel images={images} count={count} setCount={setCount} />
          </div>
          <div className="thirds right">
            <VscChevronRight size="40px" cursor="pointer" onClick={next} />
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <ProgressBar
              count={count}
              setCount={setCount}
              images={images}
              onDotClick={(i) => setCount(i)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Carousel({ images, count, setCount}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
      if (count === 5) {
        setCount(0);
      }
    }, 3000);
  return () => clearInterval(interval);
  });
  return (
    <>
    <img src={images[count].src}></img>
    </>
  )
}

function ProgressBar({ count, onDotClick, images }) {
  const dots = images.map((image, i) => (
    <span key={i} onClick={() => onDotClick(i)}>
      {' '}
      {count === i ? <FaCircle /> : <FaRegCircle />}
    </span>
  ));
  return <>{dots}</>;
}
