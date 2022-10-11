import React from "react"
import { IEventType } from "../../types"

export const useAuth = () => {
    const user = { permissions: { admingPage: true } }
    return user && user.permissions.admingPage
}