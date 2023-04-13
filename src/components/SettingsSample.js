import './SettingsSample.css';
import React from 'react';
import BarcodeReader from './BarcodeReader';
import BarcodeScanner from './BarcodeScanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, InputGroup, FormControl, Button } from 'react-bootstrap';

class SettingsSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleStarted: false,
            instanceType: ""
        };
    }
    createAnInstance(type) {
        this.setState({
            sampleStarted: true
        }, () => {
            this.setState({ instanceType: type });
        });
    }
    render() {
        return (
            <>
                {!this.state.sampleStarted ?
                    (<div className="settingsSample">
                        <h3><Badge variant="outline-primary">{this.props.title}</Badge></h3>
                        <Button className="normal" size="lg" block variant="outline-primary" onClick={() => { this.createAnInstance('reader') }}>Read File</Button>
                        <Button className="normal" size="lg" block variant="outline-primary" onClick={() => { this.createAnInstance('scanner') }}>Read Video</Button>
                    </div>
                    ) :
                    (<div className="settingsSample">
                        {this.state.instanceType === "reader" ? <div className="tab-content">
                            <BarcodeReader></BarcodeReader>
                        </div> : ""}
                        {this.state.instanceType === "scanner" ? <div className="tab-content">
                            <BarcodeScanner></BarcodeScanner>
                        </div> : ""}
                    </div>
                    )}
            </>
        );
    }
}

export default SettingsSample;
