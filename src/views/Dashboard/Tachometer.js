import React from "react";

function Tachometer({ engineSpeed, gear }) {
  const angleValue = (engineSpeed * 240) / 8000;
  const angle = `rotate(${angleValue})`;

  return (
    <>
      <g transform="translate(-196.5 -293)">
        <circle
          cx="207"
          cy="207"
          r="207"
          transform="translate(789.5 293)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="9"
        />
        <line
          y1="20.9"
          transform="translate(996.5 307.7)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <circle
          cx="113.9"
          cy="113.9"
          r="113.9"
          transform="translate(882.6 386.1)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <circle
          cx="111"
          cy="111"
          r="111"
          transform="translate(885.5 389)"
          fill="#000230"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <circle
          cx="201.3"
          cy="201.3"
          r="201.3"
          transform="translate(795.2 298.7)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          y1="20.9"
          transform="translate(996.5 307.7)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          y1="20.9"
          transform="translate(996.5 671.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="10.5"
          y1="18.1"
          transform="translate(900.3 333.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="10.4"
          y1="18.1"
          transform="translate(1082.2 648.5)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="18.1"
          y1="10.5"
          transform="translate(829.9 403.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="18"
          y1="10.5"
          transform="translate(1145 585.7)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="20.9"
          transform="translate(804.1 500)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="20.9"
          transform="translate(1167.9 500)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="18.1"
          y2="10.5"
          transform="translate(829.9 585.7)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="18"
          y2="10.5"
          transform="translate(1145 403.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="10.5"
          y2="18.1"
          transform="translate(900.3 648.5)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x1="10.4"
          y2="18.1"
          transform="translate(1082.2 333.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="7"
        />
        <line
          x2="1.2"
          y2="9.3"
          transform="translate(971.4 309.3)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="1.2"
          y2="9.3"
          transform="translate(1020.4 681.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="2.4"
          y2="9"
          transform="translate(946.7 314.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="2.5"
          y2="9"
          transform="translate(1043.8 676.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="3.5"
          y2="8.6"
          transform="translate(922.9 322.3)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="3.6"
          y2="8.6"
          transform="translate(1066.5 669.1)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="5.7"
          y2="7.4"
          transform="translate(879.4 347.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="5.7"
          y2="7.4"
          transform="translate(1107.9 645.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="6.6"
          y2="6.6"
          transform="translate(860.5 364)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="6.6"
          y2="6.6"
          transform="translate(1125.9 629.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="7.4"
          y2="5.7"
          transform="translate(843.9 382.9)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="7.4"
          y2="5.7"
          transform="translate(1141.7 611.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="8.6"
          y2="3.6"
          transform="translate(818.8 426.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="8.7"
          y2="3.6"
          transform="translate(1165.5 570)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="9"
          y2="2.4"
          transform="translate(810.7 450.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="9.1"
          y2="2.4"
          transform="translate(1173.2 547.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="9.2"
          y2="1.2"
          transform="translate(805.8 474.9)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          x2="9.3"
          y2="1.2"
          transform="translate(1177.9 523.9)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="1.2"
          x2="9.2"
          transform="translate(805.8 523.9)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="1.2"
          x2="9.3"
          transform="translate(1177.9 474.9)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="2.4"
          x2="9"
          transform="translate(810.7 547.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="2.4"
          x2="9.1"
          transform="translate(1173.2 450.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="3.6"
          x2="8.6"
          transform="translate(818.8 570)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="3.6"
          x2="8.7"
          transform="translate(1165.5 426.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="5.7"
          x2="7.4"
          transform="translate(843.9 611.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="5.7"
          x2="7.4"
          transform="translate(1141.7 382.9)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="6.6"
          x2="6.6"
          transform="translate(860.5 629.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="6.6"
          x2="6.6"
          transform="translate(1125.9 364)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="7.4"
          x2="5.7"
          transform="translate(879.4 645.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="7.4"
          x2="5.7"
          transform="translate(1107.9 347.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="8.6"
          x2="3.5"
          transform="translate(922.9 669.1)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="8.6"
          x2="3.6"
          transform="translate(1066.5 322.3)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="9"
          x2="2.4"
          transform="translate(946.7 676.8)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="9"
          x2="2.5"
          transform="translate(1043.8 314.2)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="9.3"
          x2="1.2"
          transform="translate(971.4 681.4)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <line
          y1="9.3"
          x2="1.2"
          transform="translate(1020.4 309.3)"
          fill="none"
          stroke="#7d6060"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
      </g>

      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(851.294 587.909)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            0
          </tspan>
        </text>
      </g>

      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(879.392 629.492)"
          fill="#fff"
          fontSize="16.37"
          fontFamily="SegoeUI, Segoe UI"
        ></text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(1119.042 587.909)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            8
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(829.913 509.909)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            1
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(851.295 428.183)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            2
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(909.295 370.373)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            3
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(985.514 354.816)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            4
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(1062.295 370.373)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            5
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(1121.879 428.183)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            6
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(1146.568 509.909)"
          fill="#fff"
          fontSize="32.34"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            7
          </tspan>
        </text>
      </g>
      <g transform="translate(-196.5 -293)">
        <text
          transform="translate(974.54 524.431)"
          fill="#fff"
          fontSize="86.23"
          fontFamily="SegoeUI, Segoe UI"
        >
          <tspan x="0" y="0">
            {gear}
          </tspan>
        </text>
      </g>

      <text
        transform="translate(780.16 269.59)"
        fill="#fff"
        fontSize="14.26"
        fontFamily="SegoeUI, Segoe UI"
        letterSpacing="0.14em"
      >
        <tspan x="0" y="0">
          GEAR
        </tspan>
      </text>

      <text
        transform="translate(780.16 350.59)"
        fill="#fff"
        fontSize="14.26"
        fontFamily="SegoeUI, Segoe UI"
        letterSpacing="0.14em"
      >
        <tspan x="0" y="0">
          x1000
        </tspan>
      </text>

      <g transform="translate(800.16 206.5) rotate(105)">
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

export default Tachometer;
