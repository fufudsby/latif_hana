import { initializeApollo } from 'lib/apolloClient';
import { CREATE_MESSAGE } from 'graphql/message';

export default async(req, res) => {
  const apolloClient = initializeApollo();
  try {
    const fields = req.body;
    await apolloClient.mutate({
      mutation: CREATE_MESSAGE,
      variables: { name: fields.name, message: fields.message },
    }).then(async (v) => {
      res.send(v.data);
    }).catch(err => {
      console.log('Error', err);
      res.send({ err });
    });
  } catch (e) {
    res.statusCode = 500;
    res.json({ status: 'error', e });
  };
};