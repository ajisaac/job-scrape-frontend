import React from 'react';
import {connect} from "react-redux";
import {updateLabelFilter} from "../../redux/actions/Actions";

class LabelBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showLabelBox: true}
    }

    updateCheckbox = (e) => {
        this.props.updateLabelFilter(e.target.name)
    };

    reverseShowLabelBox = () => {
        this.setState({showLabelBox: !this.state.showLabelBox});
    };

    render() {
        return (
            <div>
                <h4 className={"expandable"} onClick={this.reverseShowLabelBox}>Label Filter</h4>
                {this.state.showLabelBox && <hr/>}
                {this.state.showLabelBox && this.props.redstate.labels.map(label => {
                    return (
                        <div key={label.name}>
                            <label>
                                <input type="checkbox" name={label.name}
                                       checked={label.selected} onChange={this.updateCheckbox}/>
                                {label.name}
                            </label>
                        </div>
                    );
                })}
            </div>

        );


    }
}

const mapStateToProps = (state) => {
    return {redstate: state.state};
};

const funcs = {updateLabelFilter: updateLabelFilter};

export default connect(mapStateToProps, funcs)(LabelBox)