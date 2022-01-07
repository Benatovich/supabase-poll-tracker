const SUPABASE_URL = 'https://uojjqndpuztdodsukocz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4NDgyOSwiZXhwIjoxOTU1MjYwODI5fQ.L_uZQfqCgI9Q-fMMk_PA8e0hMl0hM8PL4cEqYk5ZkWk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(poll){
    const response = await client
        .from('polls')
        .insert({
            ...poll,
            user_id: client.auth.user().id,
        })
        .single();

    return checkError(response);
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select();

    return checkError(response);
}

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectToPolls() {
    if (await getUser()) {
        location.replace('./polls');
    }
}

export async function signUpUser(email, password){
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = './';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}