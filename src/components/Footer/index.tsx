import React from 'react';
import './index.less'

export type FooterProps = {};

const Footer: React.FC<FooterProps> = (props) => {
  return (<><a className="copyright">2021@ZEROCODE</a></>)
};

export default React.memo(Footer);
