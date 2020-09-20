import React from 'react';
import {connect} from "react-redux";
import {blockTitle, fetchBlockTitles, filterTitles, removeBlockTitle} from "../../redux/actions/Actions";
import "./BlockTitleBox.css"

// A blocked title will be a phrase or word that we can ignore in job titles
class BlockTitleBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showBox: true,
            blockTitleInput: ""
        }
    }

    componentDidMount() {
        this.props.fetchBlockTitles();
    }

    removeBlockTitle = (e) => {
        this.props.removeBlockTitle(e.target.value)
    };

    reverseShowBox = () => {
        this.setState({showBox: !this.state.showBox});
    };

    blockTitle = (e) => {
        e.preventDefault();
        this.props.blockTitle(this.state.blockTitleInput);
        this.setState({blockTitleInput: ""})
    };

    blockTitleInputChange = (e) => {
        this.setState({blockTitleInput: e.target.value});
    };

    blockTitlesCheck = () => {
        this.props.filterTitles();
    };

    render() {
        return (
            <div>
                <div className={"block-title-header"}>
                    <h4 className="expandable" onClick={this.reverseShowBox}>Title Filter</h4>
                    <form>
                        <input type={"text"}
                               value={this.state.blockTitleInput}
                               onChange={this.blockTitleInputChange}/>
                        <button className={"primary-btn"}
                                onClick={this.blockTitle}>
                            Add
                        </button>
                    </form>
                    <input className={"checkbox"}
                           onChange={this.blockTitlesCheck}
                           name={"blockTitleChecked"}
                           checked={this.props.redstate.shouldFilterTitles.checked}
                           type={"checkbox"}/>
                </div>
                {this.state.showBox && <hr/>}
                {this.state.showBox && this.props.redstate.blockTitles.map(bt => {
                    return (
                        <div key={bt}>
                            {bt}
                            <button className={"btn-link btn-tiny"}
                                    onClick={this.removeBlockTitle}
                                    value={bt}>remove?
                            </button>
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

const funcs = {
    fetchBlockTitles: fetchBlockTitles,
    removeBlockTitle: removeBlockTitle,
    blockTitle: blockTitle,
    filterTitles: filterTitles
};

export default connect(mapStateToProps, funcs)(BlockTitleBox);