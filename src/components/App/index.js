import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import R from 'ramda'

export default function App({ handleOnSubmit, latestUser, users }) {
  return (
    <div className="App">
      {
        /* added tenery operator */
        latestUser === undefined
        ? 'Hellow and welcome!'
        : 'Hellow and welcome ' + latestUser}
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <ul>
        {/* added a map with template literaks  */
          /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
          https://stackoverflow.com/questions/48215965/how-to-display-an-array-of-strings-in-react-component
          */ users.map(
          x => {
            return `${x}\n`
          }
        )}
      </ul>
    </div>
  )
}
