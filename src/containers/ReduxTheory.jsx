import React from "react";

export default function ReduxTheory() {
  return (
    <div>
      <section>
        <h1>Redux concepts</h1>
        <ul>
          <li>Store</li>
          <p>A context that contains the state (only one per app)</p>
          <li>Dispatch</li>
          <p>The executor of actions, that will update the state</p>
          <li>Action</li>
          <p>
            The functionalities that the app has. It is a JS Object with 2
            props: type and payload (data)
          </p>
          <li>Subscribe</li>
          <p>The event handler for the store</p>
          <li>Reducers</li>
          <p>Functions that manage all actions</p>
        </ul>
        <figure>
          <img
            style={{ width: 400 }}
            src="https://www.esri.com/arcgis-blog/wp-content/uploads/2017/09/react-redux-overview.png"
            alt="redux flow diagram"
          />
        </figure>
      </section>
    </div>
  );
}
