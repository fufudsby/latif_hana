import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(
    async (req, res) => {
      return handler(req, res);
    },
    {
      password: process.env.SESSION_PASSWORD,
      cookieName: '_session',
      cookieOptions: {
        secure: false,
      },
    },
  );
};

export const getSession = withSession(function({ req, res, withReturn = false }) {
  return new Promise((resolve) => {
    const authorization = req.session.get('Authorization');
    if (authorization) {
      resolve({
        Authorization: authorization || '',
      });
    } else {
      if (withReturn) {
        resolve(null);
      } else {
        return res
        .writeHead(302, {
          Location: '/auth/login',
        })
        .end();
      }
    }
  });
});