import React from "react";
import '../assets/css/Profile.css';
import FullName from "./FullName";
import Avatar from "./Avatar";
import Title from "./Title";
import ProgressBar from "./ProgressBar";
import Status from "./Status";

class Profile extends React.Component{

    constructor(){
        super();
        this.state = {
            fullName : "Anoop Shrestha",
            title : "Student/Developer",
            status : "online",
            progressBar : 67,
        };
    }

    render(){
        return(
            <>
                <div className="profile-info">
                    
                    <FullName fullName={this.state.fullName} />

                    <Avatar fullName={this.state?.fullName && this.state.fullName.slice(0, 1)}/>


                    <Title title= {this.state.title} />

                    <ProgressBar progressBar = {this.state.progressBar} />

                    <Status status = {this.state.status} />
                </div>
            </>
        );
    }
}

export default Profile;