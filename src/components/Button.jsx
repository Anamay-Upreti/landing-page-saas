import React from 'react';
import clsx from 'clsx';
import { Marker } from './Marker.jsx';  // Ensure this file exists

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 bg-gray-700 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="circle"
            className="w-10 h-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-bold text-white uppercase">
          {children}
        </span>
      </span>

      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-500 opacity-75" />
    </>
  );

  return href ? (
    <a
      className={clsx("relative p-0.5 rounded-2xl shadow-lg group", containerClassName)}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("relative p-0.5 rounded-2xl shadow-lg group", containerClassName)}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
