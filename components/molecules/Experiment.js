import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Displays an experiment card on the page
 */

export const Experiment = (props) => {
  const tagColours = {
    active: "custom-blue-experiment-blue",
    coming_soon: "gray-experiment",
    alpha: "custom-blue-experiment-blue",
  };
  return (
    <div
      className={`shadow-experiment-shadow p-4 border-b-4 xl:min-h-250px ${
        "border-" + (tagColours[props.tag] || "gray-experiment")
      }`}
      data-testid={props.dataTestId}
      data-cy={props.dataCy}
    >
      <Link href={props.href}>
        <a
          className="block text-p text-custom-blue-projects-link underline hover:opacity-70"
          tabIndex="0"
        >
          {props.title}
        </a>
      </Link>
      <span
        className={`my-4 block w-max py-2 px-2 uppercase font-body text-xxs text-white font-bold rounded ${
          "bg-" + (tagColours[props.tag] || "gray-experiment")
        }`}
      >
        {props.tagLabel}
      </span>
      <p className="mt-2 leading-30px text-sm">{props.description}</p>
    </div>
  );
};

Experiment.propTypes = {
  /**
   * Title of the experiment card.
   */
  title: PropTypes.string.isRequired,

  /**
   * tag of the experiment card
   */
  tag: PropTypes.string.isRequired,

  /**
   * Link of the card
   */
  href: PropTypes.string,

  /**
   * the label of the tag card
   */
  tagLabel: PropTypes.string.isRequired,

  /**
   * Description of the experiment card.
   */
  description: PropTypes.string.isRequired,

  /**
   * the test id for unit tests
   */
  dataTestId: PropTypes.string,

  /**
   * the test id for cypress test
   */
  dataCy: PropTypes.string,
};

export default Experiment;
