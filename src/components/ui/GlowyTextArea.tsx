"use client";

import React from 'react';

interface GlowyTextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  isFocused?: boolean;
}

const GlowyTextArea = ({ value, onChange, onFocus, onBlur, placeholder, isFocused }: GlowyTextAreaProps) => {
  return (
    <div className="glowy-textarea-wrapper w-full">
      <style>{`
        .glowy-textarea-wrapper {
          position: relative;
          width: 100%;
        }
        .glowy-textarea-wrapper .white,
        .glowy-textarea-wrapper .border,
        .glowy-textarea-wrapper .darkBorderBg,
        .glowy-textarea-wrapper .glow {
          height: 100%;
          width: 100%;
          position: absolute;
          overflow: hidden;
          z-index: 0;
          border-radius: 16px;
          filter: blur(3px);
          pointer-events: none;
        }
        .glowy-textarea-wrapper .textarea-main {
          background-color: #010201;
          border: none;
          width: 100%;
          min-height: 120px;
          border-radius: 14px;
          color: white;
          padding: 16px;
          font-size: 16px;
          position: relative;
          z-index: 10;
          resize: none;
        }
        #poda-ta {
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          position: relative;
        }
        .glowy-textarea-wrapper .textarea-main::placeholder {
          color: #c0b9c0;
        }
        .glowy-textarea-wrapper .textarea-main:focus {
          outline: none;
        }
        .glowy-textarea-wrapper .white {
          filter: blur(2px);
          z-index: 1;
        }
        .glowy-textarea-wrapper .white::before {
          content: "";
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(83deg);
          position: absolute;
          width: 800px;
          height: 800px;
          background-repeat: no-repeat;
          background-position: 0 0;
          filter: brightness(1.4);
          background-image: conic-gradient(
            rgba(0, 0, 0, 0) 0%,
            #c5a059,
            rgba(0, 0, 0, 0) 8%,
            rgba(0, 0, 0, 0) 50%,
            #8b6c3f,
            rgba(0, 0, 0, 0) 58%
          );
          transition: all 2s;
        }
        .glowy-textarea-wrapper .border {
          filter: blur(0.5px);
          z-index: 2;
        }
        .glowy-textarea-wrapper .border::before {
          content: "";
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(70deg);
          position: absolute;
          width: 800px;
          height: 800px;
          filter: brightness(1.3);
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            #1c191c,
            #c5a059 5%,
            #1c191c 14%,
            #1c191c 50%,
            #8b6c3f 60%,
            #1c191c 64%
          );
          transition: all 2s;
        }
        .glowy-textarea-wrapper .darkBorderBg::before {
          content: "";
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(82deg);
          position: absolute;
          width: 800px;
          height: 800px;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            rgba(0, 0, 0, 0),
            #4a3a1d,
            rgba(0, 0, 0, 0) 10%,
            rgba(0, 0, 0, 0) 50%,
            #3d2e14,
            rgba(0, 0, 0, 0) 60%
          );
          transition: all 2s;
        }
        #poda-ta:hover > .darkBorderBg::before {
          transform: translate(-50%, -50%) rotate(-98deg);
        }
        #poda-ta:hover > .glow::before {
          transform: translate(-50%, -50%) rotate(-120deg);
        }
        #poda-ta:hover > .white::before {
          transform: translate(-50%, -50%) rotate(-97deg);
        }
        #poda-ta:hover > .border::before {
          transform: translate(-50%, -50%) rotate(-110deg);
        }
        #poda-ta.is-focused > .darkBorderBg::before {
          transform: translate(-50%, -50%) rotate(442deg);
          transition: all 4s;
        }
        #poda-ta.is-focused > .glow::before {
          transform: translate(-50%, -50%) rotate(420deg);
          transition: all 4s;
        }
        #poda-ta.is-focused > .white::before {
          transform: translate(-50%, -50%) rotate(443deg);
          transition: all 4s;
        }
        #poda-ta.is-focused > .border::before {
          transform: translate(-50%, -50%) rotate(430deg);
          transition: all 4s;
        }
        .glowy-textarea-wrapper .glow {
          overflow: hidden;
          filter: blur(30px);
          opacity: 0.4;
          z-index: 0;
        }
        .glowy-textarea-wrapper .glow:before {
          content: "";
          z-index: -2;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(60deg);
          position: absolute;
          width: 1200px;
          height: 1200px;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            #000,
            #c5a059 5%,
            #000 38%,
            #000 50%,
            #8b6c3f 60%,
            #000 87%
          );
          transition: all 2s;
        }
      `}</style>
      <div id="poda-ta" className={isFocused || value ? 'is-focused' : ''}>
        <div className="glow" />
        <div className="darkBorderBg" />
        <div className="darkBorderBg" />
        <div className="darkBorderBg" />
        <div className="white" />
        <div className="border" />
        <textarea
          placeholder={placeholder}
          className="textarea-main"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}

export default GlowyTextArea;
