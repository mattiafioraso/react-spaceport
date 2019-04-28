import React, { FunctionComponent, ReactNode } from 'react';

import {
  AppBar,
  Typography,
  createStyles,
  Theme,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface FrameProps {
  readonly master: ReactNode;
  readonly detail: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      backgroundColor: theme.palette.background.default,
      '&::before': {
        /**
         * Here we extend the before pseudo-element with the toolbar mixin in order to use it as an
         * offset for the actual app bar (which is in fixed position)
         */
        ...theme.mixins.toolbar,
        display: 'block',
        content: "''",
        width: '100%',
        flex: '0 0 auto',
      },
    },
    content: {
      display: 'flex',
      flex: '1 1 auto',
    },
    master: {
      flex: '0 0 320px',
      borderRight: `1px solid ${theme.palette.divider}`,
      padding: `0 ${theme.spacing.unit * 2}px`,
    },
    detail: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing.unit * 2,
    },
  }),
);

const Frame: FunctionComponent<FrameProps> = ({ detail, master }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Spaceport</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.master}>{master}</div>
        <div className={classes.detail}>{detail}</div>
      </main>
    </div>
  );
};

export default Frame;
