import React from "react";
import PropTypes from "prop-types";

type LoadingProps = {
  message: string;
};

export const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="loading">
      <div className="loading__content">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <p>{message}...</p>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string.isRequired,
};
