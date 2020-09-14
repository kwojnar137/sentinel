import React, { useState } from "react";
import GearboxPath from "./GearboxPath";
import GearPort from "./GearPort";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";

function findPort(x, y) {
  const rangeFromPort = 10;
  const portsCoords = [
    { x: 48, y: 48 },
    { x: 48, y: 152 },
    { x: 100.5, y: 48 },
    { x: 100.5, y: 152 },
    { x: 153.5, y: 48 },
    { x: 153.5, y: 152 },
  ];
  const nearest = portsCoords.map((port, id) => {
    const deltaX = Math.abs(port.x - x);
    const deltaY = Math.abs(port.y - y);
    if (deltaX < rangeFromPort && deltaY < rangeFromPort) {
      return { x: port.x, y: port.y, portId: id };
    } else return null;
  });
  return nearest;
}

function between(x, y, xMin, xMax, yMin, yMax, offset) {
  return (
    x >= xMin - offset &&
    x <= xMax + offset &&
    y >= yMin - offset &&
    y <= yMax + offset
  );
}

function GearShiftKnob() {
  const dispatch = useDispatch();
  const clutching = useSelector((state) => state.clutching);

  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    active: false,
    offset: {},
  });

  const handlePointerDown = (e) => {
    const el = e.target;
    const bbox = e.target.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;

    el.setPointerCapture(e.pointerId);
    setPosition({
      ...position,
      active: true,
      offset: {
        x,
        y,
      },
    });
  };

  const handlePointerMove = (e) => {
    const bbox = e.target.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    const offset2 = 20;

    if (position.active) {
      if (between(position.x, position.y, 48, 153.5, 100, 100, offset2)) {
        setPosition({
          ...position,
          x: position.x - (position.offset.x - x),
          y: 100,
        });
      }
      if (between(position.x, position.y, 48, 48, 48, 152, offset2)) {
        setPosition({
          ...position,
          x: 48,
          y: position.y - (position.offset.y - y),
        });
      }
      if (between(position.x, position.y, 100.5, 100.5, 48, 152, offset2)) {
        setPosition({
          ...position,
          x: 100.5,
          y: position.y - (position.offset.y - y),
        });
      }
      if (between(position.x, position.y, 153.5, 153.5, 48, 152, offset2)) {
        setPosition({
          ...position,
          x: 153.5,
          y: position.y - (position.offset.y - y),
        });
      }
      if (
        between(position.x, position.y, 48, 152.5, 100, 100, offset2) &&
        between(position.x, position.y, 48, 48, 48, 152, offset2)
      ) {
        setPosition({
          ...position,
          x: position.x - (position.offset.x - x),
          y: position.y - (position.offset.y - y),
        });
      }
      if (
        between(position.x, position.y, 48, 152.5, 100, 100, offset2) &&
        between(position.x, position.y, 100.5, 100.5, 48, 152, offset2)
      ) {
        setPosition({
          ...position,
          x: position.x - (position.offset.x - x),
          y: position.y - (position.offset.y - y),
        });
      }
      if (
        between(position.x, position.y, 48, 152.5, 100, 100, offset2) &&
        between(position.x, position.y, 153.5, 153.5, 48, 152, offset2)
      ) {
        setPosition({
          ...position,
          x: position.x - (position.offset.x - x),
          y: position.y - (position.offset.y - y),
        });
      }
    }
  };

  const handlePointerUp = (e) => {
    const nearestGearPort = findPort(position.x, position.y);
    const nearestGearPortFiltered = nearestGearPort.filter((port) => {
      return port !== null;
    });
    if (nearestGearPortFiltered.length !== 0) {
      const { x, y, portId } = nearestGearPortFiltered[0];
      setPosition({
        ...position,
        x: x,
        y: y,
        active: false,
      });
      if (clutching > 90) {
        dispatch(allActions.gear.setGear(portId + 1));
      } else {
        dispatch(allActions.gear.setGear(0));
        setPosition({
          ...position,
          x: 100,
          y: 100,
          active: false,
        });
      }
    } else {
      dispatch(allActions.gear.setGear(0));
      setPosition({
        ...position,
        x: 100,
        y: 100,
        active: false,
      });
    }
  };

  return (
    <circle
      cx={position.x}
      cy={position.y}
      r={16}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      fill={position.active ? "blue" : "#7d6060"}
    />
  );
}

const Gearbox = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      style={{ backgroundColor: "#1f2269" }}
    >
      <GearboxPath />
      <GearPort x={48} y={48} active={false} />
      <GearPort x={48} y={152} active={false} />
      <GearPort x={100.5} y={48} active={false} />
      <GearPort x={100.5} y={152} active={false} />
      <GearPort x={153.5} y={48} active={false} />
      <GearPort x={153.5} y={152} active={false} />
      <GearShiftKnob />
    </svg>
  );
};

export default Gearbox;
