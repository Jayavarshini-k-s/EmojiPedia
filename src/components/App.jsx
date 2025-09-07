import React from "react";
import Emojis from "../emojipedia";
import Entry from "./Entry.jsx";

function createEmoji(Emoji) {
  return (
    <Entry
      key={Emoji.id}
      emoji={Emoji.emoji}
      ename={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojis.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
