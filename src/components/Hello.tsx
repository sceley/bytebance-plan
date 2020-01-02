import * as React from "react";
import * as ReactDOM from "react-dom";

const student:IObj = {
    name: 'sceley',
    age: 20
}

export class Hello extends React.Component<IProps, IState> {
    state = {
        name: "React TypeScript APP"
    }
    showAlertToast = () => {
        ReactDOM.render(<div style={{ width: 200, height: 200, background: 'yellow' }}>
            Toast
        </div>, document.getElementById('root'))
    }
    hideAlertToast = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    render() {
        console.log(this.state)
        console.log(student)
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <button onClick={this.showAlertToast}>展示弹窗</button>
                <button onClick={this.hideAlertToast}>隐藏弹窗</button>
            </div>
        )
    }
}