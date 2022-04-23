import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessagesContainer from "./Messages/MessagesContainer";
import StoreContext from "../../redux/StoreContext";

const Dialogs = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const dialogs = store.getState().dialogsPage.dialogs;
        let dialogElements = dialogs.map((d) => (
          <DialogItem name={d.name} key={d.id} />
        ));

        return (
          <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogElements}</div>
            <MessagesContainer />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Dialogs;
