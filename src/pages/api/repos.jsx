let key1 = process.env.gittoken;
let key2 = process.env.gittoken;

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/DeaxTV/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();


    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
