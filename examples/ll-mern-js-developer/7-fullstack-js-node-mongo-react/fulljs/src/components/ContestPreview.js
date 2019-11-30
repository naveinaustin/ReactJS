import React, {Component} from 'react';
import PropTypes from 'prop-types';
/*
<ContestPreview {...this.props.contests[0]}/> -- when using ... syntax you can directly access the property
*/
/*const ContestPreview = (contest) => {
    return (
        <div className="ContestPreview" onClick={...}>
            <div className="category-name">
                {contest.categoryName}
            </div>
            <div className="contest-name">
                {contest.contestName}
            </div>
        </div>
    )
}*/
                            //React.Component
class ContestPreview extends Component {
    handleClick = () => {
        console.log(this.props.contestName);
        this.props.onClick(this.props.id);
    }
    render() {
        return (
            <div className="link ContestPreview" onClick={this.handleClick}>
                <div className="category-name">
                    {this.props.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contestName}
                </div>
            </div>
        ) 
    }
}

ContestPreview.propTypes = {
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string,
    contestName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }
/*
const ContestPreview = (props) => {
    return (
        <div className="ContestPreview">
            <div>
                {props.contest.categoryName}
            </div>
            <div>
                {props.contest.contestName}
            </div>
        </div>
    )
}
//Can be called using  <ContestPreview contest={this.props.contests[0]}/>
*/

export default ContestPreview;