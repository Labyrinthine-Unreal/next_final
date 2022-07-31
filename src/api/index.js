import { client,q } from "@src/config/db";

export const getAllWhitelist = client
  .query(q.Paginate(q.Match(q.Ref('indexes/Whitelist'))))
  .then(response => {
    const whitelistRef = response.data;
    const getAllDataQuery = whitelistRef.map(ref => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));


  export const createWhitelistItem = name =>
  client
    .query(
      q.Create(q.Collection('Whitelist'), {
        data: {
          name
        }
      })
    )
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));

    export const deleteWhitelistItem = whitelistId =>
    client
      .query(q.Delete(q.Ref(q.Collection('Whitelist'), whitelistId)))
      .then(ret => ret)
      .catch(error => console.error('Error: ', error.message));