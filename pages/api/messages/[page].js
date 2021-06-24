import { initializeApollo } from 'lib/apolloClient';
import { GET_MESSAGES } from 'graphql/message';

export default async(req, res) => {
  const apolloClient = initializeApollo();
  const { page } = req.query;
  await apolloClient.query({
    query: GET_MESSAGES,
    variables: { first: 3, page: parseInt(page) }
  }).then((v) => {
    res.send(v.data.getMessages);
  }).catch(err => {
    console.log('Error', err);
    res.send({ err });
  });
};