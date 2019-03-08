import * as React from 'react';
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core';

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

import lake from "../resources/roxen1.jpg";
import { I18N } from "../config";

console.log("lake = ", lake);

const styles = (theme: Theme) => createStyles(
    {
        card: {
            // maxWidth: 345,
            width: "100%"
        },
        media: {
            height: 140,
        },
    }
);

interface InfoCardProps extends WithStyles<typeof styles> {
}

// TODO (forman): Replace mock content

class InfoCard extends React.PureComponent<InfoCardProps> {
    render() {
        const {classes} = this.props;

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={lake}
                        title="Roxen"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Roxen
                        </Typography>
                        <Typography component="p">
                            Roxen är en sjö i Linköpings och Norrköpings kommuner i Östergötland och ingår i Motala
                            ströms huvudavrinningsområde.
                            Sjön är 8 meter djup, har en yta på 94,9 kvadratkilometer och befinner sig 33 meter över
                            havet.
                            Sjön avvattnas av vattendraget Motala Ström. Vid provfiske har en stor mängd fiskarter
                            fångats,
                            bland annat abborre, björkna, braxen och gärs.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {I18N.text`Share`}
                    </Button>
                    <Button size="small" color="primary"
                            onClick={() => window.open("https://sv.wikipedia.org/wiki/Roxen", "_blank")}>
                        {I18N.text`Learn more`}
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(InfoCard);