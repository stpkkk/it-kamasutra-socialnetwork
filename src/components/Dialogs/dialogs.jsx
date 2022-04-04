import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import { Messages } from "./Messages/Messages";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} /> //key прописываем иначе выдаст ошибку в консоли
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
      <Messages
	  	dispatch={props.dispatch}
        messages={props.messages}
        newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
