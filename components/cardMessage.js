import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
  Typography,
  CardContent,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    marginBottom: theme.spacing(2),
  },
  actions: {
    backgroundColor: theme.palette.grey[300],
  },
  button: props => ({
    backgroundColor: props.isActive ? theme.palette.success.main : theme.palette.error.main,
    padding: theme.spacing(0.3, 2),
    color: '#FFF',
    fontSize: 13,
  }),
}));

const CardMessage = ({ message, updateStatus, loading }) => {
  console.log('render CardMessage', message.name);
  const classes = useStyles({ isActive: message.isActive });
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4">
          {message.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {message.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          size="small"
          color="primary"
          className={classes.button}
          disabled={loading}
          onClick={(e) => updateStatus(e, message.id, message.isActive)}
        >
          {message.isActive ? 'Sembunyikan' : 'Tampilkan'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(CardMessage);