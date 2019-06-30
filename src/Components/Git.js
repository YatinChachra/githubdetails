import React, {Component} from 'react';

import UserDetails from './UserDetails';

import axios from 'axios';



class Git extends Component
{
    url='https://api.github.com/users/'


    headerStyles={
    padding: '40px',
    textAlign: 'center',
    background: '#1abc9c',
    color: 'white',
    fontSize:'30px'
    }


    formStyles={
        padding: '20px'
    }

    footerStyles= {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#1abc9c',
    color: 'white',
    textAlign: 'center'
    }

    constructor()
    {super()
    this.state={
        login:'',
        avatar_url:'',
        followers:'',
        following:'',
        errorMsg:''}
    }

    changeHandler = event =>{
            this.setState({[event.target.name]:event.target.value})
    }

    submitHandler = event =>{
        console.log(this.state.login)
        event.preventDefault()

        axios.get(`${this.url}${this.state.login}`)
            .then(response=>{console.log(response)
                this.setState({avatar_url:response.data.avatar_url,
                                followers:response.data.followers,
                                following:response.data.following})

                console.log(this.state.avatar_url)
            })
            .error( errorMsg=>{
                this.setState({errorMsg:'User Does not Exist'})})


    }

    render() {

        const {login,avatar_url,followers,following,errorMsg} = this.state
        return(
            <div>

                <div style={this.headerStyles}>
                    <h1>Github User Details API</h1>
                    <p>Search Below</p>
                </div>

            <form onSubmit={this.submitHandler} style={this.formStyles}>
                <input type='text' name='login' value={login} onChange={this.changeHandler}></input>
                <button type='submit'>Search</button>

                {avatar_url ? <UserDetails data={this.state}/>:''}
                {errorMsg ? <h1>{errorMsg}</h1>:''}

            </form>


                <div style={this.footerStyles}>
                    <p>React Application</p>
                </div>


            </div>
        )
    }
}

export default Git;