import apisauce from 'apisauce';

const create = (baseURL = 'http://62f0860c57311485d13215d2.mockapi.io/') => {
    const api =apisauce.create({
        baseURL,
        headers: {
            'Cache-control' : 'no-cache',
        },
        
    });

    const setAuthToken = userAuth => api.setHeader('X-Auth-Token', userAuth);
    const setLanguage = () => api.setHeader('Accept-Language', 'id');
    const removeAuthToken = () => api.setHeader('Authorization', '');

    const searchPlace = async() => await api.get('places/');
    const getHistory = async() => await api.get('history/');
    const saveHistory = async(place) => await api.post('history/', place);
    const removeHistory = async(history) => await api.delete('/' + history.id);


    return {
        api,
        setAuthToken,
        setLanguage,
        removeAuthToken,
        searchPlace,
        getHistory,
        saveHistory,
        removeHistory,
    };
};

export default create();