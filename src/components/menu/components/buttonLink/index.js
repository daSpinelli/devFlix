import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
  const { className, link, linkText } = props;
  /* props => {   className: "variável"
                    href: "variável" }
    */

  return (
    <a className={className} href={link}>
      {linkText}
    </a>
  );
}

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default ButtonLink;
