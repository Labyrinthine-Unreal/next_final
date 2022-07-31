import faunadb from 'faunadb';
const client = new faunadb.Client({
  secret: "fnAEs3BV7GAARHDaSRkD0hjmuHSguuMB-k_pK1_h",
  domain: 'db.us.fauna.com'
});
const q = faunadb.query;
export { client, q };