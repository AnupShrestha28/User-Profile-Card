import React from "react";
import '../assets/css/Profile.css';

class Profile extends React.Component{

    constructor(){
        super();
        this.state = {
            fullName : "Anoop Shrestha",
            title : "Student/Developer",
            status : "online",
            progressBar : "34",
        };
    }

    render(){
        return(
            <>
                <div className="profile-info">
                    <h1 className="profile-full-name">{this.state.fullName}</h1>
                    <h4 className="profile-start-name">{this.state.fullName[0]}</h4>
                    <p className="profile-bio-info">{this.state.title}</p>
                    <p className="profile_progress_bar__bar" style={{ width: this.state.progressBar + "%"}}></p>
                    <p className={`profile-status ${this.state.status}`}></p>
                </div>
            </>
        );
    }
}

export default Profile;