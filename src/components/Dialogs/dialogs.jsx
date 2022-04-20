import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  const { dialogs } = props.state.dialogsPage;
  let dialogElements = dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogElements}</div>
      <MessagesContainer {...props}/>
    </div>
  );
};

export default Dialogs;
