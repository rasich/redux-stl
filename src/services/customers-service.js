export default class CustomersService {
  _apiBase = 'http://localhost:3000';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
        `, received ${res.status}`);
    }
    return await res.json();
  }

  getAllCustomers = async () => {
    return await this.getResource('/customers/');
  }

  getAllReserve = async () => {
    return await this.getResource('/reserve/');
  }

  getCustomer = async (id) => {
    return await this.getResource(`/customers/${id}`);
  }


  deleteResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  }

  deleteCustomer = async (id) => {
    return await this.deleteResource(`/customers/${id}`);
  }


  putResource = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  }

  updateCustomer = async (id, data) => {
    return await this.putResource(`/customers/${id}`, data);
  }


  postResource = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`Could not fetch`);
    }
    return await res.json();
  }

  postCustomer = async (data) => {
    return await this.postResource('/customers/', data);
  }
}