import s from "./dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} /> //key прописываем иначе выдаст ошибку в консоли
  ));

  let messagesElements = props.messages.map((m) => <Message message={m.message} addMessage={props.addMessage}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
