export async function buscar_info_cartoes() {
    try {
        const response = await fetch('http://172.17.16.44:3000/');
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error', error);
    }
}