import React from "react";

function makeZeroesString(howManyZeros) {
  let i = 0;
  let zeroes = "";
  for (i; i < howManyZeros; i++) {
    zeroes += "0";
  }
  return zeroes;
}

function Speedometer({ speed }) {
  const speedLength = speed.toString().length;
  const howManyZeros = 3 - speedLength;
  const zeroes = makeZeroesString(howManyZeros);
  const angleValue = (speed * 240) / 240;
  const angle = `rotate(${angleValue})`;
  return (
    <>
      <line
        y2="18.6"
        transform="translate(207 14.7)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <line
        x2="6.4"
        y2="17.5"
        transform="translate(141.2 26.3)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <line
        x2="12"
        y2="14.3"
        transform="translate(83.4 59.7)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />

      <g transform="translate(-196.5 -293)">
        <line
          x2="16.1"
          y2="9.4"
          transform="translate(237 403.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x2="16.2"
          y2="9.4"
          transform="translate(553.9 586.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
      </g>

      <g transform="translate(-196.5 -293)">
        <line
          x2="18.4"
          y2="3.2"
          transform="translate(214.1 466.6)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x2="18.3"
          y2="3.2"
          transform="translate(574.6 530.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
      </g>

      <line
        y1="3.2"
        x2="18.4"
        transform="translate(17.6 237.2)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <line
        y1="3.2"
        x2="18.3"
        transform="translate(378.1 173.6)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />

      <g transform="translate(-196.5 -293)">
        <line
          y1="9.4"
          x2="16.1"
          transform="translate(237 586.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          y1="9.4"
          x2="16.2"
          transform="translate(553.9 403.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
      </g>

      <line
        y1="14.3"
        x2="12"
        transform="translate(318.7 59.7)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <line
        y1="17.5"
        x2="6.4"
        transform="translate(266.4 26.3)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <line
        x2="1.6"
        y2="9.2"
        transform="translate(173.6 17.6)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        x2="4.6"
        y2="8.1"
        transform="translate(110.9 40.4)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        x2="7.1"
        y2="6"
        transform="translate(59.7 83.4)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        x2="25.8"
        y2="10.2"
        transform="translate(26.3 141.2)"
        fill="none"
        stroke="#fd6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        x2="8.8"
        y2="3.2"
        transform="translate(379 269.6)"
        fill="none"
        stroke="#ec008c"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        x2="9.3"
        transform="translate(14.7 207)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        x2="9.4"
        transform="translate(390 207)"
        fill="none"
        stroke="#ec008c"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        y1="3.2"
        x2="8.8"
        transform="translate(26.3 269.6)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        y1="3.2"
        x2="8.8"
        transform="translate(379 141.2)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        y1="6"
        x2="7.2"
        transform="translate(347.2 83.4)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        y1="8.1"
        x2="4.7"
        transform="translate(298.5 40.4)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <line
        y1="9.2"
        x2="1.6"
        transform="translate(238.8 17.6)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <text
        transform="translate(63.261 298.5)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          0
        </tspan>
      </text>
      <text
        transform="translate(42.761 240.398)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          20
        </tspan>
      </text>
      <text
        transform="translate(48.54 185.398)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          40
        </tspan>
      </text>
      <text
        transform="translate(63.261 133.898)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          60
        </tspan>
      </text>
      <text
        transform="translate(96.486 93.076)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          80
        </tspan>
      </text>
      <text
        transform="translate(135.761 63.87)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          100
        </tspan>
      </text>
      <text
        transform="translate(244.761 63.87)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          140
        </tspan>
      </text>
      <text
        transform="translate(287.261 93.076)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          160
        </tspan>
      </text>
      <text
        transform="translate(315.261 133.898)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          180
        </tspan>
      </text>
      <text
        transform="translate(332.761 185.398)"
        fill="#ec008c"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          200
        </tspan>
      </text>
      <text
        transform="translate(335.261 244.398)"
        fill="#ec008c"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          220
        </tspan>
      </text>
      <text
        transform="translate(309.261 298.5)"
        fill="#ec008c"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          240
        </tspan>
      </text>
      <text
        transform="translate(188.761 53.37)"
        fill="#fff"
        fontSize="22"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          120
        </tspan>
      </text>
      <path
        d="M207,0C321.323,0,414,92.677,414,207A206.872,206.872,0,0,1,207,414C92.677,414,0,321.323,0,207S92.677,0,207,0Z"
        fill="none"
        stroke="#7d6060"
        strokeWidth="9"
      />
      <circle
        cx="201.3"
        cy="201.3"
        r="201.3"
        transform="translate(5.7 5.7)"
        fill="none"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="3"
      />

      <circle
        cx="113.9"
        cy="113.9"
        r="113.9"
        transform="translate(93.1 93.1)"
        fill="#000230"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <circle
        cx="111"
        cy="111"
        r="111"
        transform="translate(96 96)"
        fill="#000230"
        stroke="#7d6060"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(326.914 516.083)"
          fill="#153b63"
          fontSize="55.83"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            {zeroes}
          </tspan>
          <tspan y="0" fill="#fff">
            {speed}
          </tspan>
        </text>
      </g>

      <text
        transform="translate(226.846 222.948)"
        fill="#fff"
        fontSize="18.55"
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x="0" y="0">
          KM/H
        </tspan>
      </text>
      <path
        d="M592.3,462.9a196.926,196.926,0,0,1,3.6,37.1,191.374,191.374,0,0,1-27.4,99"
        transform="translate(-196.5 -293)"
        fill="none"
        stroke="#ec008c"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <g transform="translate(206.5 206.5) rotate(105)">
        <line
          transform={angle}
          x1="82"
          y1="82"
          x2="120"
          y2="120"
          stroke="green"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
      </g>
    </>
  );
}

export default Speedometer;
