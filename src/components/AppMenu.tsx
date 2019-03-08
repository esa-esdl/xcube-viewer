import * as React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { WithLocale } from '../util/lang';
import { I18N } from '../config';


interface AppMenuProps extends WithLocale {
    anchorElement: HTMLElement | null;
    itemSelect: (itemId: string | null) => void;
}

export default class AppMenu extends React.Component<AppMenuProps> {

    handleLanguage = () => {
        this.props.itemSelect("language");
    };

    handleSettings = () => {
        this.props.itemSelect("settings");
    };

    handleClose = () => {
        this.props.itemSelect(null);
    };

    render() {
        const {anchorElement} = this.props;
        return (
            <Menu
                id="app-menu"
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={this.handleClose}
            >
                <MenuItem onClick={this.handleLanguage}>{I18N.get('Language')}</MenuItem>
                <MenuItem onClick={this.handleSettings}>{I18N.get('Settings')}</MenuItem>
            </Menu>
        );
    }
}