import axios from "axios"

const baseurl = "https://email-otp-authentication-system-with.onrender.com"

export const generate = async (email) => {
    try {

        const res = await axios.post(`${baseurl}/api/auth/generateOTP`, { email })

        return res.data

    } catch (error) {
        return error.response?.data?.message || "Something went wrong"
    }
}

export const verify = async (email, otp) => {
    try {

        const res = await axios.post(`${baseurl}/api/auth/verifyOTP`, { email, otp })

        return res.data
    } catch (error) {
        return error.response?.data?.message || "Something went wrong"
    }
}

export const register = async (formdata) => {
    try {

        const res = await axios.post(`${baseurl}/api/auth/register`, formdata)

        return res.data
    } catch (error) {
        return error.response?.data?.message || "Something went wrong"
    }
}

