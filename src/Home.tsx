import React, { useContext, useState } from "react";
import { UserContext } from "./App";

function Home() {
  const user = useContext(UserContext);
  const [menuPosition, setMenuPosition] = useState(null);

  const handleRightClick = (e) => {
    e.preventDefault();
    setMenuPosition({
      x: e.pageX,
      y: e.pageY
    });
  };

  return (
    <div onContextMenu={handleRightClick} style={{ height: "100vh" }}>
      <h2>Welcome {user}</h2>
      <p>Right-click anywhere on this page.</p>

      {menuPosition && (
        <ul
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            background: "#eee",
            padding: "10px",
            listStyle: "none"
          }}
        >
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      )}
    </div>
  );
}

export default Home;
