import { initializeApollo } from 'lib/apolloClient';
import { LOGIN } from 'graphql/login';
import withSession from 'lib/session';

export default withSession(
  async (req, res) => {
    const apolloClient = initializeApollo();
    try {
      const fields = req.body;
      await apolloClient.mutate({
        mutation: LOGIN,
        variables: { username: fields.username, password: fields.password }
      }).then(async (v) => {
        req.session.set('Authorization', `Bearer ${v.data.login.token}`);
        await req.session.save();
        res.send({ statusCode: 'success' });
      }).catch(err => {
        console.log('Error', err);
        res.send({ err });
      });
    } catch (e) {
      res.statusCode = 500;
      res.json({ status: 'error', e });
    };
  },
);