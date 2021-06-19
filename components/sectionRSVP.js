import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import Title from 'components/title';
import Wishes from 'components/wishes';

const useStyles = makeStyles((theme) => ({
  typo1: {
    fontSize: 16,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  typo2: {
    fontSize: 70,
    textAlign: 'center',
    lineHeight: 1,
  },
  typo3: {
    textAlign: 'center',
    fontSize: 16,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    '& label, & input, & textarea': {
      fontSize: 16,
    },
  },
}));

const SectionRSVP = ({
  messages,
  onChangeVal,
  onSubmit,
  values,
  loading,
  success,
 }) => {
  const classes = useStyles();
  return (
    <Box paddingY={3} paddingX={3}>
      <Title text="RSVP" />
      {success ? (
        <Box marginBottom={3}>
          <Typography className="custom-font" classes={{root: classes.typo2}}>
            Thank You
          </Typography>
          <Typography classes={{root: classes.typo3}}>
            Very Much
          </Typography>
        </Box>
      ) : (
        <>
          <Typography classes={{root: classes.typo1}}>
            Valid for 2 people dan Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:
          </Typography>
          <Box>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="off"
              autoFocus
              size="small"
              value={values.name ? values.name : ''}
              disabled={loading}
              onChange={onChangeVal}
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              rows={3}
              id="message"
              label="Message"
              name="message"
              autoComplete="off"
              autoFocus
              size="small"
              value={values.message ? values.message : ''}
              disabled={loading}
              onChange={onChangeVal}
              className={classes.textField}
            />
            <Button
              type="button"
              fullWidth
              disabled={loading}
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Box>
        </>
      )}
      <Wishes messages={messages} />
    </Box>
  );
};

export default memo(SectionRSVP);