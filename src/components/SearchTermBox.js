import React from 'react';
import {connect} from "react-redux";
import {updateSearchTermFilter} from "../redux/actions/Actions";

class SearchTermBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {showSearched: true}
    }

    updateCheckbox = (e) => {
        this.props.updateSearchTermFilter(e.target.name)
    };

    reverseShowSearched = () => {
        this.setState({showSearched: !this.state.showSearched});
    };

    render() {
        return (
            <div>
                <h4 className={"expandable"} onClick={this.reverseShowSearched}>Previous Searches</h4>
                {this.state.showSearched && <hr/>}
                {this.state.showSearched && this.props.redstate.prevSearchTerms.map((searchTerm) => {
                    return (
                        <div key={searchTerm.name}>
                            <label>
                                <input type="checkbox" name={searchTerm.name}
                                       checked={searchTerm.selected} onChange={this.updateCheckbox}/>
                                {searchTerm.name}
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

const funcs = {updateSearchTermFilter: updateSearchTermFilter};

export default connect(mapStateToProps, funcs)(SearchTermBox)
