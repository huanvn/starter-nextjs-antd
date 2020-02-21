import * as _ from "lodash";

import {Affix, Alert} from "antd";

import React from "react";

const Errors = (props) => {

  const onClose = (error) => {
    console.log("Closing alert", error)
  }

  if (_.isEmpty(props.errors)) {
    return <div/>
  }

  return (
    <div>
      <Affix style={{ position: 'absolute', top: 10}}>
        {_.map(props.errors, (error, idx) => {
          return (
            <Alert
              key={idx}
              message={error.message}
              type="error"
              closable
            />
          )
        })}
      </Affix>
    </div>
  )
}

export default Errors
