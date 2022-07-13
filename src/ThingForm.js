import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { createThing } from './store'

const ThingForm = ({ createThing }) => {
  return (
    <div>
      <button onClick={createThing}>+</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    /*
    createThing: async()=> {
      const response = await axios.post('/api/things', { name: Math.random()});
      const thing = response.data;
      dispatch({ type: 'CREATE_THING', thing });
    }, */
    createThing: () => {
      dispatch(createThing())
    }
  }
}

export default connect(null, mapDispatchToProps)(ThingForm)
