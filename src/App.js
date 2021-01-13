import React, { useEffect, useRef, useState, createRef } from "react";
import logo from "./logo.svg";
import "./scss/test.scss";
import styled from "styled-components";

function App() {
  const ref = createRef(null);

  const [array, setArray] = useState(Array.from(Array(4), () => null));

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          entry.target.classList.remove("not_load");
        }
      });
    };

    // let observer = new IntersectionObserver(callback, options);
    // document.querySelectorAll(".main_div").forEach((div) => {
    //   observer.observe(div);
    // });

    // return () => {
    //   observer && observer.disconnect();
    // };
  }, [array]);

  useEffect(() => {
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 0.5,
    // };
    // const callback = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       setArray(array.concat(Array.from(Array(4), () => null)));
    //     }
    //   });
    // };
    // let observer = new IntersectionObserver(callback, options);
    // observer.observe(ref.current);
    // return () => {
    //   observer && observer.disconnect();
    // };
  }, [ref]);

  return (
    <div className="App">
      <main>
        {/* {array.map((_, index) => {
          const isBefore = index === array.length - 2;

          return (
            <div
              className="main_div not_load"
              ref={isBefore ? ref : null}
              key={index}
            ></div>
          );
        })} */}
        <HomeSkeleton />
        {/* <li className="skeleton-item">
          <div>
            <div className="skeleton-img" />
          </div>
          <div className="skeleton-info">
            <p className="skeleton-name" />
            <p className="skeleton-email" />
          </div>
        </li> */}
      </main>
    </div>
  );
}

const HomeSkeleton = () => (
  <Card>
    <div className="area-box">
      <div className="top skeleton"></div>
    </div>
    <div className="info-box">
      <div className="info-1 skeleton"></div>
      <div className="info-2 skeleton"></div>
      <div className="info-3 skeleton"></div>
    </div>
  </Card>
);

export default App;

const NotLoad = () => {
  return <div className="not_load"></div>;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;

  & .skeleton {
    background-color: #aaa;
    border-radius: 5px;
  }

  & .area-box {
    width: 100%;
    padding: 0 10px;
    & .top {
      width: 100%;
      height: 36px;
    }
  }

  & .info-box {
    display: flex;
    flex-direction: column;
    padding: 10px;

    & .info-1 {
      width: 100%;
      height: 16px;
      margin-bottom: 10px;
    }
    & .info-2 {
      width: 70%;
      height: 14px;
      margin-bottom: 10px;
    }
    & .info-3 {
      width: 10%;
      height: 14px;
    }
  }
`;
