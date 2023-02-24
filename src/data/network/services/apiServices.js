import {getAsyncStorageData} from '../../../utility/asyncStorage';
import Logger from '../../../utility/Logger';
import {AUTH_TOKEN_SS, ENV_PROD} from '../../../utility/valueConstants';

const timeout = 10000;
export const PostRequestService = async ({
  url = '',
  headers = {},
  body = {},
  contentType = 'application/json',
}) => {
  const jwtToken = await getAsyncStorageData(AUTH_TOKEN_SS);

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Authorization: 'Bearer ' + jwtToken,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then(response => response.json())
      .then(response => {
        Logger({
          body: {
            body,
          },
          headers,
          response: {
            ...response,
          },
          url,
          method: 'POST',
          isProd: ENV_PROD,
        });
        resolve(response);
      })
      .catch(error => {
        reject(error);
        Logger({
          body: {
            body,
          },
          headers,
          response: error,
          url,
          method: 'POST',
          isProd: ENV_PROD,
        });
      });
  });
};

export const PostRequestWithoutAuthTokenService = ({
  url = '',
  headers = {},
  body = {},
  contentType = 'application/json',
}) => {
  return new Promise((resolve, reject) => {
    //  RNFetchBlob.config({
    //       trusty: true,
    //     })
    //       .
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then(response => response.json())
      .then(response => {
        resolve(response);
        Logger({
          headers,
          response,
          url,
          method: 'POST',
          isProd: ENV_PROD,
          body,
        });
      })
      .catch(error => {
        reject(error);
        Logger({
          body: body,
          headers,
          response: error,
          url,
          method: 'POST',
          isProd: ENV_PROD,
        });
      });
  });

  // return Promise.race([
  //   new Promise((resolve, reject) => {
  //   fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": contentType,
  //         ...headers,
  //       },
  //       body: JSON.stringify({
  //         ...body,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   }),
  //   new Promise((_, reject) =>
  //     setTimeout(() => reject(new Error("Request timed out")), timeout)
  //   ),
  // ]);
};

export const GetRequestService = async ({
  url = '',
  headers = {},
  contentType = 'application/json',
}) => {
  const jwtToken = await getAsyncStorageData(AUTH_TOKEN_SS);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': contentType,
        Authorization: 'Bearer ' + jwtToken,
        ...headers,
      },
    })
      .then(response => response.json())
      .then(response => {
        resolve(response);

        Logger({
          method: 'GET',
          headers,
          response,
          url,
          isProd: ENV_PROD,
        });
      })
      .catch(error => {
        reject(error);
        Logger({
          method: 'GET',
          headers,
          response: error,
          url,
          isProd: ENV_PROD,
        });
      });
  });
};

export const GetRequestWithoutAuthTokenService = ({
  url = '',
  headers = {},
  contentType = 'application/json',
}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': contentType,
        ...headers,
      },
    })
      .then(response => response.json())
      .then(response => {
        resolve(response);
        Logger({
          method: 'GET',
          headers,
          response,
          url,
          isProd: ENV_PROD,
        });
      })
      .catch(error => {
        reject(error);
        Logger({
          method: 'GET',
          headers,
          response: error,
          url,
          isProd: ENV_PROD,
        });
      });
  });
};

export const PutRequestService = async (
  url = '',
  headers = {},
  body = {},
  contentType = 'application/json',
  authToken = '',
) => {
  const jwtToken = await getAsyncStorageData(AUTH_TOKEN_SS);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': contentType,
        Authorization: 'Bearer ' + jwtToken,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

export const CustomRequestService = async ({
  url = '',
  headers = {},
  contentType = 'application/json',
  method = '',
  body = {},
}) => {
  const jwtToken = await getAsyncStorageData(AUTH_TOKEN_SS);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': contentType,
        Authorization: 'Bearer ' + jwtToken,
        ...headers,
      },
      body: JSON.stringify({
        ...body,
      }),
    })
      .then(response => response.json())
      .then(response => {
        resolve(response);

        Logger({
          method: method,
          headers,
          response,
          url,
          isProd: ENV_PROD,
        });
      })
      .catch(error => {
        reject(error);
        Logger({
          method: method,
          headers,
          response: error,
          url,
          isProd: ENV_PROD,
        });
      });
  });
};
