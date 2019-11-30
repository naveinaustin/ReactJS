import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({contests, onContestClick}) => (
  <div className="ContestList">
      {Object.keys(contests).map(contestId =>
            /**was getting a warning: Each child in a list should have a unique "key" prop. Added the key prop*/
            <ContestPreview {...contests[contestId]} 
                key={contestId}
                onClick={onContestClick}
            />
        )}
  </div>  
);

ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired
}

export default ContestList;