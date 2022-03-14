import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Masha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Maxim</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Alexey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Vlad</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message + " " + s.active}>Hey</div>
        <div className={s.message}>Do you feel ok?</div>
        <div className={s.message}>How you doing?</div>
        <div className={s.message}>WTF</div>
        <div className={s.message}>How is your it-kamasutra</div>
        <div className={s.message}></div>
      </div>
    </div>
  );
};

export default Dialogs;
