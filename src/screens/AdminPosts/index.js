import React from 'react';
import app from "../../base";

function AdminPosts() {
    

    return (
        <div>
          <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    )
}

export default AdminPosts
