import { initializeApollo } from 'lib/apolloClient';
import { UPDATE_MESSAGE } from 'graphql/message';
import { getSession } from 'lib/session';

export default async(req, res) => {
  const session = await getSession({ req, res });
  const apolloClient = initializeApollo();
  try {
    const { id } = req.query;
    const fields = req.body;
    await apolloClient.mutate({
      mutation: UPDATE_MESSAGE,
      variables: { messageId: id, isActive: fields.isActive },
      context: { headers: session },
    }).then(async (v) => {
      res.send(v);
    }).catch(err => {
      console.log('Error', err);
      res.send({ err });
    });
  } catch (e) {
    res.statusCode = 500;
    res.json({ status: 'error', e });
  };
};