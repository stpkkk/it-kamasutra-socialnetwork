import s from "./dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Masha" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "Alexey" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Valera" },
  ];

  let dialogElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesData = [
    { id: 1, message: "Hey" },
    { id: 2, message: "Do you feel ok?" },
    { id: 3, message: "How you doing?" },
    { id: 4, message: "WTF" },
    { id: 5, message: "How is your it-kamasutra" },
    {
      id: 6,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam unde dolore perspiciatis voluptate non odit esse? Consequuntur doloremque animi corrupti at suscipit vitae, magnam officia unde facere, voluptatem, perferendis fuga.",
    },
  ];

  let messageElements = messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
