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
  return <div className={s.message}>{props.text}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Masha" id="1" />
        <DialogItem name="Maxim" id="2" />
        <DialogItem name="Alexey" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Vlad" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <Message text="Hey" />
        <Message text="Do you feel ok?" />
        <Message text="How you doing?" />
        <Message text="WTF" />
        <Message text="How is your it-kamasutra" />
        <Message
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          unde placeat, aspernatur beatae voluptatem nemo exercitationem minima
          adipisci molestiae! Vero impedit beatae error esse aut delectus
          cumque. Pariatur, ipsum totam?"
        />
      </div>
    </div>
  );
};

export default Dialogs;
