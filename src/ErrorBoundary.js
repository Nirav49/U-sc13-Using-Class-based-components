import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

    componentDidCatch = (error) => {
        if(this.state.length === 0){ 
        return this.setState({hasError:true})
    }}
    
    render() {
        if(this.state.hasError){
            return <p>something went wrong.</p>
        }
        return this.props.children
        
    }
}

export default ErrorBoundary;
