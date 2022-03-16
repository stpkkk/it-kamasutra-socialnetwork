import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Masha" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "Alexey" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Valera" },
  ];

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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} />
      </div>
    </div>
  );
};

export default Dialogs;
