import axios from 'axios'
import config from '@/config/config'

const GetData = async () => {
    try {
        const result = await axios.get(`${config.domain}/user-profiles/`)
        return result.data
    } catch (error) {
        return error
    }
}

const Create = async (payload: any) => {
    try {
        const result = await axios.post(`${config.domain}/user-profiles/`, payload)
        return result
    } catch (error) {
        return error
    }
}

const Update = async (payload: any) => {
    try {
        const result = await axios.put(`${config.domain}/user-profiles/${payload.usproId}`, payload)
        return result
    } catch (error) {
        return error
    }
}

const Deleted = async (id: any) => {
    try {
      const result = await axios.delete(`${config.domain}/user-profiles/${id}` );
      return result;
    } catch (error) {
      return await error;
    }
  }

const findOne = async (id: any) => {
    try {
        const result = await axios.get(`${config.domain}/user-profiles/${id}` )
        return result.data
    } catch (error) {
        return error
    }
}

export default {
    GetData,
    Create,
    Update,
    Deleted,
    findOne,
}