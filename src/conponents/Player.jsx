import { useState } from 'react';

export default function Player({ initName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function nameChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  //let btnChange = '수정';

  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={nameChange} />
    );
    // btnChange = '저장';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? '저장' : '수정'}</button>
    </li>
  );
}
