import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, TextField, Button, CircularProgress } from '@material-ui/core';
import Title from 'components/title';
import Wishes from 'components/wishes';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .title': {
      marginBottom: 0,
    },
  },
  typo1: {
    fontSize: 15,
    letterSpacing: 0.8,
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.grey[800],
  },
  typo2: {
    fontSize: 74,
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.primary.main,
  },
  typo3: {
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.8,
    color: theme.palette.grey[600],
  },
  submit: {
    fontSize: 13,
    letterSpacing: 0.8,
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.background.paper,
    border: `1px solid #d59e97`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  textField: {
    backgroundColor: theme.palette.background.default,
    '& label, & input, & textarea': {
      fontSize: 15,
      letterSpacing: 0.8,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[500],
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SectionRSVP = ({
  messages,
  onChangeVal,
  onSubmit,
  values,
  loading,
  loadingMessage,
  success,
 }) => {
  const classes = useStyles();
  return (
    <Box paddingTop={8} paddingX={3} className={classes.root}>
      <Title text="Berikan Ucapan &amp; Doa" />
      {loading ? (
        <Box display="flex" justifyContent="center" paddingBottom={6} paddingTop={3}>
          <CircularProgress size={22} thickness={4.5} />
        </Box>
      ) : (
        <>
          {success ? (
            <Box paddingBottom={6} paddingTop={3}>
              <Typography className="custom-font" classes={{root: classes.typo2}}>
                Thank You
              </Typography>
              <Typography classes={{root: classes.typo3}}>
                Very Much
              </Typography>
            </Box>
          ) : (
            <>
              {/* <Typography classes={{root: classes.typo1}}>
                Valid for 2 people dan Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:
              </Typography> */}
              <form onSubmit={onSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="off"
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
                  size="small"
                  value={values.message ? values.message : ''}
                  disabled={loading}
                  onChange={onChangeVal}
                  className={classes.textField}
                />
                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  variant="contained"
                  color="primary"
                  disableElevation
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
            </>
          )}
        </>
      )}
      <Wishes messages={messages} loadingMessage={loadingMessage} />
    </Box>
  );
};

export default memo(SectionRSVP);