import * as React from 'react';
import { connect } from 'react-redux';
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

import TimeSeriesChart from './TimeSeriesChart';
import { AppState } from '../states/appState';
import ControlBar from "./ControlBar";
import Viewer from './Viewer';
import TimeRangeControl from './TimeRangeSlider';
import InfoCard from "../components/InfoCard";


interface AppPaneProps extends WithStyles<typeof styles> {
}

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state: AppState) => {
    return {
        locale: state.controlState.locale,
    };
};

const mapDispatchToProps = {};

const styles = (theme: Theme) => createStyles(
    {
        content: {
            flexGrow: 1,
            padding: theme.spacing.unit,
            height: '100vh',
            overflow: 'auto',
        },
        appBarSpacer: theme.mixins.toolbar,
        viewerContainer: {
            height: '80vh',
        },
        chartContainer: {
            // marginLeft: -22,
        },
        h5: {
            marginBottom: theme.spacing.unit * 2,
        },
    });

class AppPane extends React.Component<AppPaneProps> {

    render() {
        const {classes} = this.props;

        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <ControlBar/>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.viewerContainer}>
                            <Viewer/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} container>
                        <Grid item xs container direction="column" spacing={8}>
                            <Grid item xs>
                                <InfoCard/>
                            </Grid>
                            <Grid item xs>
                                <div className={classes.chartContainer}>
                                    <TimeSeriesChart/>
                                </div>
                                <TimeRangeControl/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppPane));


