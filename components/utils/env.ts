import { usePath } from "monobase"

export const isProduction = () => {
    return usePath().search("/production/") !== -1
}
