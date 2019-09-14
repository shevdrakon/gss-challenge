import React from 'react';

import Content from './content';
import {Row} from './responsive';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Content>
        <Row>
          <div className={styles.footer__copyright}>
            ©2019 GSS. All rights reserved.
          </div>
        </Row>
      </Content>
    </footer>
  )
};

export default Footer;
