async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/IsraelAlvesN/portfolio-js/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}