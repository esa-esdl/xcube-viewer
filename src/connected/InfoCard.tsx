import { connect } from 'react-redux';

import { AppState } from '../states/appState';
import InfoCard from "../components/InfoCard";


const mapStateToProps = (state: AppState) => {
    return {
        locale: state.controlState.locale,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);
