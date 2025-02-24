export default ({ env }) => ({
  host: env('0.0.0.0'),
  port: env.int(1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
