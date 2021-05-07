import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

type MetaProps = {
  title: string;
  description: string;
  keywords: Array<string>;
};
const Meta = ({ title, description, keywords }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="keywords" content={keywords.join(", ")} data-rh="true" />
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Meta;
