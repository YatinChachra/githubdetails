import React, {Component} from 'react';

class UserDetails extends Component
{

    cardStyles= {
    boxshadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    color:'red',
    width: '40%'}

    containerStyles={
    padding:'2px 16px'}



    render(props) {
        return (
            <div>
            <center>
                <h2>USER DETAILS</h2>

                <div className="card" style={this.cardStyles}>


                    {console.log(this.props.data.avatar_url)}


                    <div className="card">

                        <img src={this.props.data.avatar_url}/>

                            <div className="container" style={this.containerStyles}>
                                <h4><b>Username: </b>{this.props.data.login}</h4>
                                <h4><b>Followers: </b>{this.props.data.followers}</h4>
                                <h4><b>Following: </b>{this.props.data.following}</h4>

                            </div>
                    </div>


                </div>
            </center>
            </div>
        )
    }
}

export default UserDetails;