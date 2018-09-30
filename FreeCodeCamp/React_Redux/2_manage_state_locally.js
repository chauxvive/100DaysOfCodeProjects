class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        };

        // add handleChange() and submitMessage() methods here
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(e) {
        this.setState(() => ({
            input: e.target.value
        }))
    }
    submitMessage() {
        this.setState(({
            messages,
            input
        }) => ({
            messages: [...messages, input],
            input: ''
        }))
    }

    render() {
        return ( <
            div >
            <
            h2 > Type in a new Message: < /h2> { /* render an input, button, and ul here */ } <
            input onChange = {
                this.handleChange
            }
            value = {
                this.state.input
            } > < /input> <
            button onClick = {
                this.submitMessage
            } > Add message < /button> <
            ul > {
                this.messages
            } < /ul> { /* change code above this line */ } <
            /div>
        );
    }
};