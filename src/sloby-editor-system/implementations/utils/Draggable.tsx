import React, { useEffect } from "react";

interface DraggableProps {
  initialPosition: Array<number>;
  boundingBox: React.RefObject<HTMLDivElement>;
  children: any;
  callback: any;
}

export default function Draggable({ initialPosition, boundingBox, children, callback }: DraggableProps) {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    //   Use mouse position listener to move the element with the mouse
    if (dragging) {
      // Get current left and top of element as a float
      let left = parseFloat(mainRef.current.style.left);
      let top = parseFloat(mainRef.current.style.top);
      let used = false;
      const handleMouseMove = (e: any) => {
        const bounds = mainRef.current.getBoundingClientRect();
        const boundingBoxBounds = boundingBox.current.getBoundingClientRect();

        let x = left + (((e.clientX - mouseOffset.x) / (boundingBoxBounds.width)) * 100);
        let y = top + (((e.clientY - mouseOffset.y) / boundingBoxBounds.height) * 100);

        if (x < 0) {
          x = 0.01;
        }
        if (x > 100 - (bounds.width / boundingBoxBounds.width * 100)) {
          x = (boundingBoxBounds.width - bounds.width) / boundingBoxBounds.width * 100;
        }
        if (y < 0) {
          y = 0.01;
        }
        if (y > 100 - (bounds.height / boundingBoxBounds.height * 100)) {
          y = (boundingBoxBounds.height - bounds.height) / boundingBoxBounds.height * 100;
        }

        // Set the position of the element
        mainRef.current.style.left = `${x}%`;
        mainRef.current.style.top = `${y}%`;

        callback(x, y);
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [dragging]);

  // Correctly position the element on window resize
  useEffect(() => {
    // Get boundingBox size before
    let oldWidth = boundingBox.current.getBoundingClientRect().width;
    let oldHeight = boundingBox.current.getBoundingClientRect().height;

    const handleResize = () => {
      const boundingBoxBounds = boundingBox.current.getBoundingClientRect();
      const bounds = mainRef.current.getBoundingClientRect();

    //   Calculate the left percentage of the element without the element's width
      let left = parseFloat(mainRef.current.style.left);
      let top = parseFloat(mainRef.current.style.top);
      let percentage_element_width = bounds.width / oldWidth * 100;
      let percentage_element_height = bounds.height / oldHeight * 100;

      let x = (left + percentage_element_width) - bounds.width / boundingBoxBounds.width * 100
      let y = (top + percentage_element_height) - bounds.height / boundingBoxBounds.height * 100

      if (x < 0) {
        x = 0.01;
      }
      if (x > 100 - (bounds.width / boundingBoxBounds.width * 100)) {
        x = (boundingBoxBounds.width - bounds.width) / boundingBoxBounds.width * 100;
      }
      if (y < 0) {
        y = 0.01;
      }
      if (y > 100 - (bounds.height / boundingBoxBounds.height * 100)) {
        y = (boundingBoxBounds.height - bounds.height) / boundingBoxBounds.height * 100;
      }

      mainRef.current.style.top = `${y}%`;
      mainRef.current.style.left = `${x}%`;

      oldWidth = boundingBoxBounds.width;
      oldHeight = boundingBoxBounds.height;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [])

  return (
    <div
      ref={mainRef}
      onMouseDown={(e) => {
        // Calculate the mouse offset
        setMouseOffset({ x: e.clientX, y: e.clientY });
        setDragging(true);
      }}
      onMouseUp={() => {
        setDragging(false);
        // callback(mainRef.current, mainRef.current.getBoundingClientRect());
      }}
      className="absolute"
      style={{
        top: `${initialPosition[1]}%`,
        left: `${initialPosition[0]}%`
      }}
    >
      {children}
    </div>
  );
}
