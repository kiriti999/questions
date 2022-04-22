// Fetch url with retries
// =====================
//  implement retry mechanism
// data.statusCode === 200;


// Option 1:
// =======
const getResponse2 = async (url, retries) => {
    let data = await fetch(url);
    if (data.statusCode == 200) {
        return data;
    }

    if (retries) {
        return getResponse2(url, retries - 1);
    }

    const error = new Error();
    error.message = data.message;
    error.status = data.statusCode;
    throw error;
};

const main2 = async () => {
    const data = await getResponse('https://api.ues.astro.com.my/get-prepaid-entitlement', 3);
    return data;
};
main2();


// Option 2:
// =======
const getResponse = async (url, retries) => {
    let data = await fetch(url);
    if (data.statusCode == 200) {
        return data;
    }

    for (let i = 0; i < retries; i++) {
        data = await fetch(url);
        if (data.statusCode === 200) break;
    }

    const error = new Error();
    error.message = data.message;
    error.status = data.statusCode;
    throw error;
};

const main = async () => {
    const data = await getResponse('https://api.ues.astro.com.my/get-prepaid-entitlement', 3);
    return data;
};
main();