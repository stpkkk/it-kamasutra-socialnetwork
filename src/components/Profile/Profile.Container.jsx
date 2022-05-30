//контейнерная компонента обачивает презентационную принимает пропсы и опрокидывает их дальше
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "./../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2` //прописали query параметры для пагинации, обратные ковычки
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      }); //подключили дату с сервера
  } // метод жизненного цикла, здесь все сайд эффекты

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainer
); /*с помощью connect взаимодействуем со стором, откуда берем action creator и state
setUserProfile создали в profile-reducer*/
