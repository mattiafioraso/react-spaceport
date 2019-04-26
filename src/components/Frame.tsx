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
        ...theme.mixins.toolbar,
        display: 'block',
        content: "''",
        width: '100%',
      },
    },
    content: {
      display: 'flex',
    },
    master: {
      flex: '0 0 320px',
      padding: `0 ${theme.spacing.unit * 2}px`,
    },
    detail: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing.unit * 2,
      paddingLeft: 0,
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
