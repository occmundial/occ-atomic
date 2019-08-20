import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";

const FooterSection = ({ name, list, logos, appStores, classes }) => (
  <div>
    {name && <Text standard>{name}</Text>}
    {logos && (
      <div className={classes.DivLogo}>
        {logos.map(arrayitem => (
          <a
            className={classes.Logo}
            href={arrayitem.link}
            key={arrayitem.id}
            target={arrayitem.samePage ? "_self" : "_blank"}
            rel={arrayitem.samePage ? "" : "noopener noreferrer"}
          >
            <img src={arrayitem.item} alt="Icono" />
          </a>
        ))}
      </div>
    )}
    <div>
      {list.map(arrayitem =>
        arrayitem.link ? (
          <a
            className={classes.link}
            href={arrayitem.link}
            key={arrayitem.id}
            target={arrayitem.samePage ? "_self" : "_blank"}
            rel={arrayitem.samePage ? "" : "noopener noreferrer"}
          >
            <Text small mid topTiny>
              {arrayitem.item}
            </Text>
          </a>
        ) : (
          <span className={classes.link} key={arrayitem.id}>
            <Text small mid topTiny>
              {arrayitem.item}
            </Text>
          </span>
        )
      )}
    </div>
    {appStores && (
      <div>
        {appStores.map(arrayitem => (
          <a
            className={classes.AppStoreIcon}
            href={arrayitem.link}
            key={arrayitem.id}
            target={arrayitem.samePage ? "_self" : "_blank"}
            rel={arrayitem.samePage ? "" : "noopener noreferrer"}
          >
            <img src={arrayitem.item} alt="AppStore Icon" />
          </a>
        ))}
      </div>
    )}
  </div>
);

FooterSection.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  logos: PropTypes.array,
  appStores: PropTypes.array,
  classes: PropTypes.object
};

FooterSection.defaultProps = {
  name: "",
  list: [],
  logos: [],
  appStores: []
};

export default FooterSection;
