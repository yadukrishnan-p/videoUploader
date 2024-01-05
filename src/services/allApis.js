import { baseUrl } from "./baseUrl";
import { commonRequest } from "./commonRequest";

// add video      baseUrl/videos

export const addVideo = async (body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}

// get all videos (display all videos)

export const getAllVideos = async ()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

// delete single video

export const deleteVideo = async (id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

// add category

export const addCategory = async (body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}

// display all categories (get all)

export const getAllCategory = async ()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}

// delete one category (one by one)

export const deleteCategory = async (id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

// add history

export const addHistory = async (body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}

// get all histories

export const getAllHistories = async ()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}

// delete History

export const deleteHistory  = async (id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}

// drag and drop

// access single video

export const getVideo = async (id)=>{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

// update category

export const updateCategory = async (id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}




export const deleteDrag = async (id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}