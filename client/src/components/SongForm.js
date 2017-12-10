import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

class SongForm extends React.Component {
    state = { title: '', artist: '', billboardId: 1 }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [ name ] : value })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/billboards/${this.state.billboardId}/songs`, {...this.state} )
    }


    render(){
        const { title, artist } = this.state;
        return(
            <Form onSubmit = {this.handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' 
                    name='title' value={title} 
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit}/>
                </Form.Field>
                <Form.Field>
                    <label>Artist</label>
                    <input placeholder='Artist' 
                    value={artist} name='artist' 
                    onChange ={this.handleChange} 
                    onSubmit={this.handleSubmit}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
export default SongForm;