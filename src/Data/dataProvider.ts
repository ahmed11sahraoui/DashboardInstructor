import { fetchUtils } from 'react-admin';

const apiUrl = '/api/';

const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource: string, params: any) => {
    let endpoint = `${apiUrl}/${resource}/getAll`;
    if (endpoint) {
      return httpClient(endpoint, {
        method: 'GET',
      })
      .then(({ json }) => {
        if (Array.isArray(json)) {
          return {
            data: json,
            total: json.length,
          };
        } else if (json && Array.isArray(json.data)) {
          return {
            data: json.data,
            total: json.data.length,
          };
        } else {
          throw new Error("Invalid response format for 'getList'");
        }
      })
      .catch(error => {
        throw error;
      });
    } else {
      return Promise.resolve({ data: [], total: 0 });
    }
  },

  create: (resource: string, params: any) => {
    let endpoint = `${apiUrl}/${resource}/create`;


    if (endpoint) {
      return httpClient(endpoint, {
        method: 'POST',
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    } else {
      return Promise.resolve({ data: {} });
    }
  },

  getOne: (resource: string, params: any) => {
    let endpoint = `${apiUrl}/${resource}`


    if (endpoint) {
      const url = new URL(endpoint);
      url.searchParams.append('id', params.id);

      return httpClient(url, {
        method: 'GET',
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    } else {
      return Promise.resolve({ data: {} });
    }
  },

  delete: (resource: string, params: any) => {

    let endpoint = `${apiUrl}/${resource}/delete`

    if (endpoint) {
      const url = new URL(endpoint);
      url.searchParams.append('id', params.id);

      return httpClient(url, {
        method: 'DELETE',
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    } else {
      return Promise.resolve({ data: {} });
    }
  },

  update: (resource: string, params: any) => {
    let endpoint = `${apiUrl}/${resource}/update`
    if (endpoint) {
      const url = new URL(endpoint);
      url.searchParams.append('id', params.id);
      url.searchParams.append('name', params.data.name);
      url.searchParams.append('slug', params.data.slug);

      return httpClient(url, {
        method: 'PUT',
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    } else {
      return Promise.resolve({ data: {} });
    }
  },

  getMany: (resource: string, params: any) => {
    let endpoint = '';
    if (resource === 'niveau') {
      endpoint = `${apiUrl}/niveau/getMany`;
    } else if (resource === 'trimestre') {
      endpoint = `${apiUrl}/trimestre/getMany`;
    }

    if (endpoint) {
      // Implement your logic here
      return Promise.resolve({ data: [] });
    } else {
      return Promise.resolve({ data: [] });
    }
  },

  getManyReference: (resource: string, params: any) => {
    let endpoint = '';
    if (resource === 'niveau') {
      endpoint = `${apiUrl}/niveau/getManyReference`;
    } else if (resource === 'trimestre') {
      endpoint = `${apiUrl}/trimestre/getManyReference`;
    }

    if (endpoint) {
      // Implement your logic here
      return Promise.resolve({ data: [] });
    } else {
      return Promise.resolve({ data: [] });
    }
  },

  updateMany: (resource: string, params: any) => {
    let endpoint = '';
    if (resource === 'niveau') {
      endpoint = `${apiUrl}/niveau/updateMany`;
    } else if (resource === 'trimestre') {
      endpoint = `${apiUrl}/trimestre/updateMany`;
    }

    if (endpoint) {
      // Implement your logic here
      return Promise.resolve({ data: [] });
    } else {
      return Promise.resolve({ data: [] });
    }
  },

  deleteMany: (resource: string, params: any) => {
    let endpoint = '';
    if (resource === 'niveau') {
      endpoint = `${apiUrl}/niveau/deleteMany`;
    } else if (resource === 'trimestre') {
      endpoint = `${apiUrl}/trimestre/deleteMany`;
    }

    if (endpoint) {
      // Implement your logic here
      return Promise.resolve({ data: [] });
    } else {
      return Promise.resolve({ data: [] });
    }
  },
};

export default dataProvider;