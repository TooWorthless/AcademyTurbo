import React, { Component } from 'react';

interface FormState {
    name: string;
    email: string;
}

class UserForm extends Component<{}, FormState> {
    state: FormState = { name: '', email: '' };

    shouldComponentUpdate(nextProps: {}, nextState: FormState) {
        return this.state.name !== nextState.name || this.state.email !== nextState.email;
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as Pick<FormState, keyof FormState>);
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                />
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UserForm;