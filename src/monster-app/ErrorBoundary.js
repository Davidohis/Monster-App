import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = { hasError: false }
    }

    componentDidCatch() {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;
