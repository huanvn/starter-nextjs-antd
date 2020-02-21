import {Layout} from 'antd/lib/index';
import React from "react";

const currentYear = new Date().getFullYear();

export default () => (
  <Layout.Footer style={{textAlign: 'center'}}>huanvn©{currentYear}</Layout.Footer>
)
