import React, { useState } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel" tabIndex={-1}>
          <label>성인</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            tabIndex={1}
            aria-label="최대 인원수는 3명까지 가능합니다"
          >
            ?
            {isTooltipVisible && (
              <span
                className="tooltip"
                role="tooltip"
                aria-hidden={isTooltipVisible}
              >
                최대 인원수는 3명까지 가능합니다
              </span>
            )}
          </div>
        </div>

        <button
          onClick={decrement}
          className="spinButton"
          aria-label="성인 탑승자 한명 줄이기 버튼"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          readOnly
          className="spinButtonInput"
          aria-live="assertive"
          aria-label="성인 탑승객"
          value={count}
        />
        <div
          aria-atomic="true"
          aria-live="assertive"
          aria-relevant="additions"
          hidden
        ></div>
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한명 늘리기 버튼"
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
