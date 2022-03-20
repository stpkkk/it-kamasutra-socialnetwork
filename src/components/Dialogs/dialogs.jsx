import s from "./dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogs, messages }) => {
  let dialogElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} /> //key прописываем иначе выдаст ошибку в консоли
  ));

  let messageElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
