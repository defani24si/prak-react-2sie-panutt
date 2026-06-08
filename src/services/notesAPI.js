import axios from 'axios'

const API_URL = "https://anficitjrmedfgrqapma.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_C3JUAyAJN7Tffaa0nemAog_f9i1dJd5"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    }
}