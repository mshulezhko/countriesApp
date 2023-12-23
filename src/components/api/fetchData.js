const fetchData = async (url) => {
    const response = await fetch(url);
    const countries = await response.json();
    return countries
};

export default fetchData;