import React from "react"

export const useAuth = () => {
    const user = { permissions: { admingPage: true } }
    return user && user.permissions.admingPage
}