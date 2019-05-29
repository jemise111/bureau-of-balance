import React from "react";

export const scramble = (text, onTextClick) => {
  const textParts = text.split(" ");
  return textParts.map((word, i) => {
    if (i % 3 === 1) {
      return (
        <span onClick={onTextClick} key={i} className="scramble">
          {word}
        </span>
      );
    }
    return ` ${word} `;
  });
};
