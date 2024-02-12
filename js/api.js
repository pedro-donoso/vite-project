let url = 'https://api.imgflip.com/get_memes'

export const getApi= async()=>{

    const resp=await fetch(url)
    const {data}=await resp.json()

    return data.memes 
}
    
