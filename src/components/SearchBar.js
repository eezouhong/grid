import React from 'react';

class SeachBar extends React.Component {
    state= {term:''}
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                </form>
            </div>
        );
    }
}

export default SeachBar;