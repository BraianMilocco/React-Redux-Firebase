import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {createProject} from '../../store/actions/projectActions';

class CreateProject extends Component {
    state={
        title: '',
        content: ''
    }

    handleChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.CreateProject(this.state);
        this.props.history.push('/');
    }
    render() {
        const {auth}= this.props;
        if (!auth.uid) return <Redirect to='/signin' />;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Create new Project</h5>
                    <div className="input-field">
                        <label htmlFor="title"> Title </label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"> Content </label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                       
                    </div>
                    <div className="input-field">
                        <button  className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        CreateProject: (project)=> dispatch(createProject(project))
        
    }
}

//paso null porque no tengo un mapStateToProps y va primero
export default connect(mapStateToProps, mapDispatchToProps )(CreateProject) 