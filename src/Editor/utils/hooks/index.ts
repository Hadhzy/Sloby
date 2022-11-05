import React from "react"
import { IEventType } from "../types"

export const useAuth = () => {
    const user = { permissions: { adminPage: true } }
    return user && user.permissions.adminPage
}