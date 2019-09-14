import React from 'react';
import PropTypes from 'prop-types';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Message from '../../components/message/message';

import styles from './widget-map.module.scss';

const WidgetMap = (props) => {
  const {data: {lat, lng}, className} = props;
  const position = [lat, lng];

  return <div className={className}>
    <Message type={Message.types.right}>
      <div className={styles.title}>We suggest You to check that place!</div>
      <div className={styles.map}>
        <Map center={position} zoom={12} width={300} height={200}>
          <Marker anchor={position} payload={1} />
        </Map>
      </div>
    </Message>
  </div>
};

WidgetMap.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default WidgetMap;
