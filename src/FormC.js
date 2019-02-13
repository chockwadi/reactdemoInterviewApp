import React from 'react';
import axios from 'axios';
import {
    Card,
    CardTitle,
    CardText,
    Button,
    TextField,
} from 'react-md';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    submitFormA(e) {
        e.preventDefault();
        console.log(this.refs.name.value)
        const a = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            description: this.refs.description.value,

        }
        axios.post('http://localhost:3000/a', [a])
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <React.Fragment>
                <Card style={{ margin: '20px' }}>
                    <CardTitle title="Car Companies" >
                    </CardTitle>
                    <CardText style={{ marginLeft: '30px', marginRight: '30px' }}>
                        <form onSubmit={e => this.submitFormA(e)}>
                            <TextField
                                placeholder="ID" ref="id"
                                id="id"
                            />
                            <TextField
                                placeholder="Name"
                                ref="name"
                                id="name"
                            />
                            <TextField
                                id="des"
                                placeholder="Description"
                                ref="description"
                            />
                            <Button  type="submit" onClick={this.props.formAShow} style={{ margin:'20px', height:'30px',width:'100px',background: '#2196F3', color: '#fafafa' }}>Add</Button>
                            <Button type="button" onClick={this.props.formAShow} style={{ margin:'20px', height:'30px',width:'100px',background: '#FE6464', color: '#fafafa' }}>Cancel</Button>
                        </form>
                    </CardText>
                </Card>

            </React.Fragment>
        )
    }
}
export default App;
