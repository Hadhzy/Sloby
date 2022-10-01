import React from "react"

export const useAuth = () => {
    const user = { permissions: { admingPage: false } }
    return user && user.permissions.admingPage
}